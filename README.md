# 📚 Book Platform

A full-stack web application for book management, with user authentication and full CRUD functionality.

Allows users to register, log in, add books, edit them, delete them, and view them in a personalized way.

---

## Live Demo
🔗 https://book-platform-mauve.vercel.app/

> Guest mode available — no registration required to explore the app.

## 🚀 Technologies Used

### Frontend

- **React** (with `react-router-dom` for routing).
- **Axios** for communication with the API.
- **React Icons** for icons.
- **Custom CSS** for styles.

### Backend

- **Node.js** with **Express**.
- **MongoDB** with **Mongoose**.
- **JWT** (JSON Web Token) for authentication.
- **BcryptJS** for password encryption.
- **Dotenv** for managing environment variables.
- **CORS** to enable communication between frontend and backend.

---

## 📂 Project Structure

### Frontend (`/frontend`)

```bash
┣ 📁 public/ # Public files
┣ 📁 src/
┃ ┣ 📁 components/ # Reusable components (Navbar, etc.)
┃ ┣ 📁 pages/ # Main views (Login, RegisterBook, Dashboard, etc.)
┃ ┣ 📁 routes/ # App routes
┃ ┣ 📁 styles/ # CSS files
┃ ┣ 📄 App.js # Main component
┃ ┣ 📄 index.js # Entry point
┃ ┗ 📄 API.js # Axios configuration
┣ 📄 package.json
```

### Backend (`/backend`)

```bash
backend/
┣ 📁 config/ → General configuration (DB, variables, etc.)
┣ 📁 controllers/ → Logic for each route
┣ 📁 routes/ → API endpoints
┣ 📁 models/ → MongoDB models (Mongoose)
┣ 📁 middlewares/ → Custom middlewares
┣ 📁 utils/ → Auxiliary functions
┣ 📄 Index.js → Entry point
┣ 📄 Index.css
┣ 📄 App.js
┣ 📄 App.css
┣ 📄 package.json
```

---

## ⚙️ Installation and Configuration

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ErickSR1601/book-platform.git
cd book-platform
```

### 2️⃣ Configure the Backend

```bash
cd backend
npm install
```

Configuring **environment variables (.env)**

Initializing the server

```bash
npm run dev
```

### 3️⃣ Configure the Frontend

```bash
cd ../frontend
npm install
```

Configuring **environment variables (.env)**

Starting the application

```bash
npm start
```

---

## 📌 Features

✅ User registration and login.

✅ Authentication with JWT.

✅ Complete CRUD for books:

- Create
- Read
- Edit
- Delete
    
✅ Display only books belonging to the authenticated user.
    
✅ Dynamic navbar with user greeting.
    
✅ Persistence with MongoDB.
  
---

## 📷 Screenshots

### Login Page

<img width="1908" height="921" alt="login page" src="https://github.com/user-attachments/assets/27408936-7d5e-4749-9e85-3dd2a5360fc4" />

### Dashboard

<img width="1920" height="926" alt="dashboard 1" src="https://github.com/user-attachments/assets/f0e2dcc2-4802-49be-be67-da23254c46d3" />

<img width="1920" height="920" alt="dashboard 2" src="https://github.com/user-attachments/assets/551b68af-c21a-431e-8007-3a8b17b6b209" />

### Page to add book

<img width="1920" height="924" alt="Add book" src="https://github.com/user-attachments/assets/d06fd993-236d-4d0e-a342-278a91a6c9bb" />

---

## 👨‍💻 Autor

- **Email:** [dev.ericksr.16@gmail.com](mailto:dev.ericksr.16@gmail.com)
- **LinkedIn:** [Erick Solis Rojas](https://www.linkedin.com/in/ericksolisrojas)
