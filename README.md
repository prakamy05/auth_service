# 🔐 Simple Secure REST API

## 📌 Overview

This project is a **basic but structured REST API** built using **Node.js and Express**, designed to demonstrate core backend concepts:

* User authentication using **JWT (JSON Web Tokens)**
* Secure password storage using **bcrypt hashing**
* Basic **rate limiting** to prevent abuse
* Clean **modular architecture** (routes, controllers, middleware)

This is intentionally kept **lightweight (no database, no Docker)** to focus on understanding backend fundamentals.

---

## ⚙️ Features

### ✅ Authentication

* User registration with hashed passwords
* Login with credential verification
* JWT-based authentication (stateless)

### 🔒 Security

* Password hashing using bcrypt
* Protected routes using JWT middleware
* Rate limiting on auth endpoints (prevents brute-force attacks)

### 🧱 Architecture

* Separation of concerns:

  * Routes
  * Controllers
  * Middleware
  * Data store (in-memory)

---

## 📁 Project Structure

```
project/
│── src/
│   │── controllers/
│   │   └── authController.js
│   │
│   │── middleware/
│   │   ├── auth.js
│   │   └── rateLimiter.js
│   │
│   │── routes/
│   │   ├── authRoutes.js
│   │   └── dataRoutes.js
│   │
│   │── store/
│   │   └── userStore.js
│   │
│   │── app.js
│
│── package.json
```

---

## 🧠 File-by-File Explanation

### `app.js`

* Entry point of the application
* Configures middleware (JSON parsing, CORS)
* Mounts routes (`/auth`, `/data`)
* Starts the server

---

### `routes/`

Defines API endpoints and connects them to controllers.

* `authRoutes.js`

  * `/register`
  * `/login`
  * Applies rate limiting

* `dataRoutes.js`

  * `/data`
  * Protected route using auth middleware

---

### `controllers/`

Contains business logic.

* `authController.js`

  * Handles registration and login
  * Hashes passwords
  * Generates JWT tokens

---

### `middleware/`

Reusable logic that runs before route handlers.

* `auth.js`

  * Verifies JWT token
  * Grants or denies access to protected routes

* `rateLimiter.js`

  * Limits repeated requests from same IP
  * Protects against brute-force login attempts

---

### `store/`

* `userStore.js`

  * Acts as a temporary in-memory database
  * Stores user credentials (hashed)

---

## 🚀 How to Run

```bash
npm install
npm start
```

Server will run at:

```
http://localhost:3000
```

---

## 🧪 API Endpoints

### 🔹 Register

```
POST /auth/register
```

Body:

```json
{
  "username": "user1",
  "password": "1234"
}
```

---

### 🔹 Login

```
POST /auth/login
```

Response:

```json
{
  "token": "JWT_TOKEN"
}
```

---

### 🔹 Protected Route

```
GET /data
```

Headers:

```
Authorization: Bearer <token>
```

Response:

```json
{
  "message": "Hello user1, protected data"
}
```

---

## 🔄 Request Flow

1. User registers → password is hashed and stored
2. User logs in → credentials verified → JWT issued
3. Client stores token
4. Token sent in headers for protected routes
5. Middleware verifies token before allowing access

---

## ⚠️ Limitations (Current Version)

*  No database (data lost on restart)
*  No input validation (e.g., schema validation)
*  Hardcoded JWT secret
*  No refresh tokens / logout system
*  No role-based authorization

---

## 🚀 Future Improvements

### 🔧 Backend Enhancements

* Add **MongoDB / PostgreSQL**
* Use **dotenv** for environment variables
* Add **input validation** (Joi/Zod)
* Implement **refresh tokens & logout**
* Add **role-based access control (RBAC)**

### 🔐 Security Improvements

* Add **helmet.js**
* Add **rate limiting per route**
* Add **account lock after failed attempts**

### 📦 DevOps

* Dockerize application
* Deploy

### 🧪 Testing

* Add unit + integration tests (Jest / Supertest)

---

## 🎯 Learning Goals

This project helps understand:

* REST API design
* Authentication vs Authorization
* Middleware flow in Express
* Stateless authentication (JWT)
* Backend project structuring

---

## 📌 Summary

This is a **foundational backend project** that focuses on correctness of concepts rather than production complexity. It provides a strong base to build more scalable and secure systems.

---
