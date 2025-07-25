# 📎 URL Shortener Full Stack Application

A full stack URL shortener application built using **Spring Boot** for the backend and **React** (with Vite) for the frontend. It allows users to generate short links, view stats, and manage original/shortened URLs efficiently through a clean UI.

---

## 📦 Tech Stack

### 🖥️ Frontend
- React 19
- Vite
- Tailwind CSS
- Material UI (MUI)
- Chart.js with `react-chartjs-2`
- React Router DOM
- React Hook Form
- Axios
- React Hot Toast

### 🔧 Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- RESTful APIs
- H2 (or PostgreSQL/MySQL as optional)

---

## 📁 Folder Structure

```
url-shortener-sb/
├── url-shortner-frontend/   # React frontend (Vite-based)
└── url-shortener-sb/        # Spring Boot backend
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/pramilaOM/UrlShortenerSbApplication.git
cd UrlShortenerSbApplication
```

---

### 2️⃣ Backend Setup (Spring Boot)

```bash
cd url-shortener-sb
./mvnw spring-boot:run
```

> By default, backend runs on: `http://localhost:8080`

To build:
```bash
./mvnw clean package
```

---

### 3️⃣ Frontend Setup (React + Vite)

```bash
cd url-shortner-frontend
npm install
npm run dev
```

> By default, frontend runs on: `http://localhost:5173`

Make sure to update the backend base URL in `axios` or `.env` config if running on a different port.

---

## 🧩 Key Features

- 🔗 Create shortened URLs
- 📋 Copy short links to clipboard
- 📊 View analytics using bar charts
- ⚡ Fast, responsive UI with Tailwind and MUI
- ✅ Input validation with `react-hook-form`
- 🔔 User feedback via toast notifications

---

## 🧪 API Endpoints (Sample)

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| POST   | `/shorten`       | Shorten a long URL     |
| GET    | `/urls`          | Retrieve all URLs      |
| GET    | `/clicks/{id}`   | Get click count by ID  |

(Actual endpoints may vary — refer to controller code.)

---

## 📸 UI Overview

> You can include screenshots or a demo GIF here.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👤 Author

**PramilaOM**  
🔗 GitHub: [github.com/pramilaOM](https://github.com/pramilaOM)

---

## 🌐 Live Demo

> *(Optional)* Add Netlify, Vercel, or Railway/Fly.io link here after deployment.

---

## 🤝 Contributions

Feel free to fork the repo and raise PRs for enhancements, bug fixes, or feature suggestions.
