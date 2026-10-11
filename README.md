# 🌐 MERN Stack Project – Full Stack Product Management Website

🚀 Excited to Announce My Latest MERN Stack Project! 🚀  
This is a full-stack web application built using the **MERN** stack (MongoDB, Express, React, Node.js), showcasing interactive and responsive pages—**Home**, **About**, **Products**, and **Contact**—designed to deliver seamless user experience with complete CRUD functionality.

---

## 🛠️ Installation & Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/SaharFatimaDevjani/MERN_Application.git
cd MERN_Application
```

### 2. Install Dependencies

- For the backend:  
  ```bash
  cd server
  npm install
  ```

- For the frontend:  
  ```bash
  cd client
  npm install
  ```

### 3. Environment Variables

Create a `.env` file in the `server` directory (see `server/.env.example`) and add:

```
MONGO_URI=your_mongo_db_uri
PORT=5000
```

> Make sure MongoDB is running and the URI is correct. If `MONGO_URI` is not set, the server uses `mongodb://localhost:27017/Shopping`.
>
> The client calls the API at `http://localhost:5000` by default. To change it, create `client/.env` with `REACT_APP_API_URL=http://your-api-host`.

### 4. Run the App

- Start backend server:  
  ```bash
  cd server
  npm run server
  ```

- Start frontend dev server (in a new terminal):  
  ```bash
  cd client
  npm start
  ```

App will be accessible at: http://localhost:3000/

---

## 🚀 Project Highlights

- **Home Page:** Overview of the entire website  
- **About Page:** Information about the platform or business  
- **Products Page:** Full CRUD interface powered by REST API  
- **Contact Page:** Form with validation (empty fields & email format)

---

## 📌 Tech Stack

- **Frontend:** React  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **API Architecture:** RESTful APIs  
- **Operations:** CRUD (Create, Read, Update, Delete)

---

## 🔗 GitHub Repository

**GitHub:** [https://github.com/SaharFatimaDevjani/MERN_Application](https://github.com/SaharFatimaDevjani/MERN_Application)

---

## 🙏 Credits

Thanks to **Sir Haris Irfan** for his invaluable mentorship and support throughout this project.

---

Feel free to fork, use, or contribute to this project. Your feedback is welcome!
