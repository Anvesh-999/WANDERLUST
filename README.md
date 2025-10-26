# 🌍 WANDERLUST

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![EJS](https://img.shields.io/badge/EJS-4B0082?logo=EJS&logoColor=white)](https://ejs.co/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

Wanderlust is a full-stack travel and hotel booking platform.
Users can explore, add, edit, and manage hotel listings through a dynamic backend and responsive EJS frontend.
---

## 🏆 Features
- View all hotel listings (`/listings`)  
- Add new listings (`/listings/new`)  
- View single listing (`/listings/:id`)  
- Edit/Delete listings (`/listings/:id/edit`)  
- Dynamic EJS templates with responsive UI (Bootstrap)  
- MongoDB database integration with Mongoose  
- Fully functional CRUD operations for listings  
- User authentication and authorization
- Input validation using Joi (schema.js)
- Flash messages for form success/error notifications


---

## 💻 Tech Stack
- **Frontend:** HTML, CSS, Bootstrap, EJS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Version Control:** Git & GitHub  

---

## 🗂️ Project Structure
```bash
WANDERLUST/
├── init/
│   ├── init.js           # Sample data for DB
│   └── index.js          # Initialization scripts
├── models/
│   ├── listing.js        # Listing schema
│   ├── review.js         # Review schema
│   └── user.js           # User schema
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/
│   ├── ExpressError.js   # Custom error class
│   └── wrapAsync.js      # Async wrapper for routes
├── views/
│   ├── includes/
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── listings/
│   │   ├── edit.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── show.ejs
│   │── users/
│   │   ├── login.ejs
│   │   └── signup.ejs
│   ├── error.ejs
│  
├── .gitignore
├── app.js               # Main server file
├── middleware.js        # Custom middleware (auth, validation)
├── package-lock.json
├── package.json  
├── README.md           
└── schema.js           # Validation schemas (Joi or similar)

```
---

## 🚀 Installation / Setup
1. Clone the repo:
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
```bash
| Route                | Method   | Description                  |
| -------------------- | -------- | ---------------------------- |
| `/listings`          | GET      | Display all hotel listings   |
| `/listings/new`      | GET      | Show form to add new listing |
| `/listings`          | POST     | Add new listing to database  |
| `/listings/:id`      | GET      | Show single listing details  |
| `/listings/:id/edit` | GET      | Show form to edit listing    |
| `/listings/:id`      | PUT      | Update listing in database   |
| `/listings/:id`      | DELETE   | Delete listing from database |
| `/users/signup`      | GET/POST | User registration            |
| `/users/login`       | GET/POST | User login                   |
| `/users/logout`      | GET      | Logout user                  |

```
👨‍💻 Author

Anvesh Anumolu – Full Stack Developer
📫 [GitHub](https://github.com/Anvesh-999)
🌐 [LinkedIn](https://www.linkedin.com/in/anvesh-anumolu-472a66291/)
