const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/data', dataRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});