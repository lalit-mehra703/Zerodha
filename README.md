<h1 align="center">📈 Zerodha Clone - Full Stack Tranding Platform</h1>

🔗 Live Demo: https://zerodha-app-wr6a.onrender.com/

<p align="center">
A full-stack trading dashboard inspired by Zerodha, built using the MERN stack.
Secure authentication, protected routes, and multi-origin architecture.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Auth-JWT-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Frontend-React%20(Vite)-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Backend-Node%20%26%20Express-black?style=for-the-badge" />
</p>

---

<h2>🚀 Features</h2>

<ul>
  <li>🔐 JWT Authentication (Signup & Login)</li>
  <li>🍪 HTTP-Only Cookie Based Session</li>
  <li>🛡 Protected Dashboard Routes</li>
  <li>👤 Profile Dropdown with Logout</li>
  <li>📊 Trading Dashboard UI</li>
  <li>🌐 Multi-Origin Setup (Auth App + Dashboard)</li>
</ul>

---

<h2>🛠 Tech Stack</h2>

<b>Frontend:</b> <br/>React (Vite), React Router, Axios  
<b>Backend:</b> Node.js, Express.js  
<b>Database:</b> MongoDB (Mongoose)  
<b>Authentication:</b> JWT, bcrypt, cookie-parser  

---

<h2>📂 Project Structure</h2>

<pre>
Zerodha/
│
├── backend/
├── frontend/   (Landing + Login + Signup)
├── dashboard/  (Protected Trading Dashboard)
└── README.md
</pre>

---

<h2>⚙️ Installation</h2>

<h3>1️⃣ Clone Repository</h3>


git clone https://github.com/lalit-mehra703/Zerodha.git
cd Zerodha

<h3>2️⃣ Backend Setup</h3>
cd backend
npm install

Create a <code>.env</code> file:

PORT=3002
MONGO_URI=your_mongodb_connection_string
TOKEN_KEY=your_secret_key

Start backend:

npm start
<h3>3️⃣ Frontend (Auth App)</h3>
cd frontend
npm install
npm run dev

Runs on:

http://localhost:5173
<h3>4️⃣ Dashboard</h3>
cd dashboard
npm install
npm run dev

Runs on:

http://localhost:5174
<h2>🔐 Authentication Flow</h2>

User signs up

User logs in

JWT token generated

Token stored in HTTP-only cookie

Dashboard verifies user via /auth/verify

Protected routes render only if authenticated

<h2>👨‍💻 Author</h2>

<b>Lalit Mehra</b>
<a href="https://github.com/lalit-mehra703">GitHub Profile</a>

<h2 align="center">⭐ If you like this project, consider giving it a star!</h2> ```
