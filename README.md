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
- MySql

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
Login Page:
<img width="1919" height="1081" alt="image" src="https://github.com/user-attachments/assets/83d11436-6084-499b-8744-055827a7debb" />
SignUp page:
<img width="1912" height="1083" alt="image" src="https://github.com/user-attachments/assets/b9743c52-3da0-471d-b0d5-56c314b7aea8" />
Home
<img width="1919" height="1100" alt="image" src="https://github.com/user-attachments/assets/09a14571-52ed-491d-911a-a323076a21e9" />
Dashboard
<img width="1914" height="1130" alt="image" src="https://github.com/user-attachments/assets/db34fb81-f985-4bfc-b93f-44d282727fd1" />
Create New Shorten Url
<img width="310" height="220" alt="image" src="https://github.com/user-attachments/assets/64b99ec4-dbbf-4bb7-8017-b2228ee57629" />
About
<img width="1919" height="1090" alt="image" src="https://github.com/user-attachments/assets/ac791377-7480-465b-a480-4a08ab939c24" />
Logout
<img width="1906" height="1075" alt="image" src="https://github.com/user-attachments/assets/19e303f3-1abe-4d63-a8a1-bac6acabac8d" />



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
