# What File Sharing App?

A simple **MERN-style File Sharing App** (React frontend + mock backend using `json-server`).  
This project demonstrates how to build and run a React app with an API server for testing.  

---

## Project Structure
file-sharing-app/
│
├── client/ # React frontend
│ ├── public/ # Static files
│ ├── src/ # React components
│ ├── package.json # React app dependencies & scripts
│ └── ...
│
├── db.json # JSON database for mock API
├── package.json # json-server config & scripts
└── README.md # Project documentation

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/heyamish/file-sharing.git
cd file-sharing

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

"proxy": "http://localhost:3001"


Now, requests like:

fetch("/files")


will automatically go to:

http://localhost:3001/files

 ## Available Scripts
In Root (/file-sharing)

npm start → runs json-server (db.json) on port 3001

In Client (/client)

npm start → runs React app on port 3000

npm run build → builds the app for production

npm test → runs tests

## 📊 Example db.json
{
  "files": [
    { "id": 1, "name": "document.pdf", "size": "2MB" },
    { "id": 2, "name": "image.png", "size": "1.5MB" }
  ]
}


## API Endpoints (via json-server):

GET /files

POST /files

PUT /files/:id

DELETE /files/:id

