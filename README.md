# 🌍 WANDERLUST

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![EJS](https://img.shields.io/badge/EJS-4B0082?logo=EJS&logoColor=white)](https://ejs.co/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

Wanderlust is a **full-stack travel and hotel booking platform**.  
Users can explore, add, edit, and manage hotel listings using a fully dynamic backend and EJS frontend.

---

## 🏆 Features
- View all hotel listings (`/listings`)  
- Add new listings (`/listings/new`)  
- View single listing (`/listings/:id`)  
- Edit/Delete listings (`/listings/:id/edit`)  
- Dynamic EJS templates with responsive UI (Bootstrap)  
- MongoDB database integration with Mongoose  
- Fully functional CRUD operations for listings  

---

## 💻 Tech Stack
- **Frontend:** HTML, CSS, Bootstrap, EJS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Version Control:** Git & GitHub  

---

## 🗂️ Project Structure
WANDERLUST/
├─ Models/ # MongoDB schemas
├─ Routes/ # Express routes
├─ Views/ # EJS templates
├─ Public/ # CSS, JS, images
├─ node_modules/ # ignored by git
├─ app.js # main server file
├─ package.json
├─ package-lock.json
└─ README.md

---

## 🚀 Installation / Setup
1. Clone the repo:
```bash
git clone https://github.com/Anvesh-999/WANDERLUST.git
2. Navigate into the project folder:
  cd WANDERLUST
3. Install dependencies:
  npm install
4. Create a .env file and configure your database connection (example):
  MONGO_URI=your_mongodb_connection_string
  PORT=3000
5. Start the server:
  node app.js
6. Open in browser: http://localhost:3000/listings

----

🔹 Routes Overview
Route	Method	Description
/listings	GET	Display all hotel listings
/listings/new	GET	Show form to add new listing
/listings	POST	Add new listing to database
/listings/:id	GET	Show single listing details
/listings/:id/edit	GET	Show form to edit listing
/listings/:id	PUT	Update listing in database
/listings/:id	DELETE	Delete listing from database

👨‍💻 Author

Anvesh Anumolu – Full Stack Developer
📫 GitHub : https://github.com/Anvesh-999
 | LinkedIn: https://www.linkedin.com/in/anvesh-anumolu-472a66291/
