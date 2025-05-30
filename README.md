# 📄 Document Chunker App

A full-stack web application that allows users to upload PDF or TXT files, automatically chunk them using configurable settings, and view the results in an elegant UI.

---

## 🚀 Features

- 📁 Upload `.pdf` or `.txt` files
- ✂️ Automatically split documents into chunks using LangChain
- ⚙️ User-configurable chunk size and overlap
- 🧠 Chunks stored in SQLite database via Sequelize ORM
- 🔄 View and scroll through chunks in the UI
- 🖥️ Responsive frontend with fixed headers and upload form

---

## 🛠 Tech Stack

### Frontend
- React + TypeScript
- Vite
- Sass for styling
- Axios for API calls

### Backend
- Node.js + TypeScript + Express
- Sequelize + SQLite
- LangChain for intelligent chunking
- Express FileUpload for handling files

### DevOps
- Docker & Docker Compose ready

---

## 📁 Folder Structure

project-root/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── services/
│ │ ├── db.ts
│ │ └── server.ts
│ ├── Dockerfile
│ └── tsconfig.json
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── styles/
│ │ ├── App.tsx
│ │ └── main.tsx
│ ├── Dockerfile
│ └── vite.config.ts
└── docker-compose.yml


---

## 🧪 Setup & Run Locally

### Prerequisites
- Node.js ≥ 18
- npm or yarn
- Docker (optional, for containerization)

---

## 📸 Screenshots

### 🖼️ File Upload Form (Empty)
<img src="./screenshots/upload-form.png" alt="Upload Form" width="100%" />

### 📂 File Upload Form (Filled)
<img src="./screenshots/upload-filled.png" alt="Filled Upload Form" width="100%" />

### 📜 Chunk List Scroll View
<img src="./screenshots/chunk-list-scroll.png" alt="Chunk List" width="100%" />

### 🛠️ API Network Preview Tab
<img src="./screenshots/network-preview.png" alt="API Preview" width="100%" />

### 🔍 API Response (Raw JSON)
<img src="./screenshots/network-response.png" alt="API JSON Response" width="100%" />


### 🔧 Backend

```bash
cd backend
npm install
npm run dev

### 🔧 Frontend
cd frontend
npm install
npm run dev
