# What File Sharing App?

A simple **MERN-style File Sharing App** (React frontend + mock backend using `json-server`).  
This project demonstrates how to build and run a React app with an API server for testing.  

---

## Project Structure
file-sharing-app/
│
│ ├── public/
│ ├── src/
│ ├── package.json
│ └── ...
│
├── db.json
├── .env
├── package.json
└── README.md

---

## How to Install and Setup?

### 1️⃣ Clone the repository
git clone https://github.com/username/file-sharing-app.git
cd file-sharing-app

### 2️⃣ Install root dependencies (API server)
npm install

### 3️⃣ Install frontend dependencies
cd client
npm install
npm start

---

## How to Connect Frontend with Backend?

To make API calls from React → json-server, add a proxy to your React app’s package.json:

client/package.json
"proxy": "http://localhost:3000"
Now, requests like:
fetch("/files")
will automatically go to:
http://localhost:3000/files

---

## Available Scripts
In Root (/file-sharing-app)
npm start → runs json-server (db.json) on port 3000

In Client (/client)
npm start → runs React app on port 3000
npm run build → builds the app for production
npm test → runs tests

---

## API Endpoints (via json-server):

 -GET /files
 -POST /files
 -PUT /files/:id
 -DELETE /files/:id

