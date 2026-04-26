const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const store = require('../store/userStore');

const SECRET = "supersecret";

exports.register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const existingUser = store.findUser(username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  store.addUser({ username, password: hashedPassword });

  res.json({ message: 'User registered' });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = store.findUser(username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });

  res.json({ token });
};