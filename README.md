# 🌍 WANDERLUST
> 🧳 A full-stack travel and hotel booking platform built with Node.js, Express, MongoDB, and EJS.

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![EJS](https://img.shields.io/badge/EJS-4B0082?logo=EJS&logoColor=white)](https://ejs.co/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

---
## 🌐 Live Demo  

🔗 **Try it here:** [https://wanderlust-vb88.onrender.com](https://wanderlust-vb88.onrender.com)

---
✨ Features

- 🏠 **Add new listings** – Create property listings with descriptions and images

- 🌆 **Cloudinary Image Storage** – Secure, cloud-based image uploads

- 🔍 **Search & Filter** – Browse listings by location or category

- 🗺️ **Mapbox Integration** – Interactive maps to view locations

- ✏️ **Edit/Delete listings** – Full control over property management

- 🔐 **User Authentication & Authorization** – Secure login and role-based access

- ✅ **Input Validation** – Validate user inputs using Joi

- 💬 **Flash Messages** – Real-time success/error notifications

- 🧩 **MVC Architecture** – Organized structure for scalability

- 📱 **Responsive Design** – Optimized for both mobile and desktop

- ⚙️ **Session Management** – MongoDB session store for user persistence  

---

## 💻 Tech Stack

- **Frontend:** HTML, CSS, Bootstrap, EJS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB(Mongoose ORM)
- **Authentication** Passport.js
- **Validation:** Joi  
- **Cloud Storage:** Cloudinary
- **Maps:** Mapbox GL JS (Geocoding & Interactive Maps) 
- **Deployment:** Render

---

## 🗂️ Project Structure
```bash
WANDERLUST/
├── controllers/
│   ├── listings.js        
│   ├── reviews.js         
│   └── users.js
├── init/
│   ├── data.js           # Sample data for DB
│   └── index.js          # Initialization scripts
├── models/
│   ├── listing.js        # Listing schema
│   ├── review.js         # Review schema
│   └── user.js           # User schema
├── public/
│   ├── css/
│   │   └── rating.css
│   │   └── style.css
│   └── js/
│       └── map.js
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
├── cloudConfig.js        
├── middleware.js        # Custom middleware (auth, validation)
├── package-lock.json
├── package.json  
├── README.md           
└── schema.js           # Validation schemas (Joi or similar)

```
---

## 🚀 Installation / Setup
Follow these simple steps to get Wanderlust running locally 👇

🧩 1. Clone the Repository
 ```bash
  git clone https://github.com/Anvesh-999/WANDERLUST.git
  cd WANDERLUST
```
⚙️ 2. Install Dependencies
```bash
  npm install
```
🔐 3. Configure Environment Variables
Create a .env file in the project root and add your credentials:
```bash
ATLASDB_URL=your_mongodb_atlas_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
MAPBOX_TOKEN=your_mapbox_token
SECRET=your_random_secret
PORT=8080

```
▶️ 4. Run the Application
```bash 
  node app.js
```
🌐 5. Access the App
Now open your browser and visit:
```bash
👉 http://localhost:3000/listings
```

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

☁️ Cloudinary Integration

- Multer handles file uploads locally.

- Cloudinary securely stores images in the cloud.

- Each listing is linked with a Cloudinary image URL.

🗺️ Mapbox Integration

- Displays property locations on an interactive map

- Uses Mapbox Geocoding API to convert locations into coordinates

- Adds custom markers for each listing on the map

🔒 Authentication

- Built using Passport.js and express-session

- Supports signup, login, logout, and session persistence

- Authorization middleware ensures only listing owners can edit or delete their properties

💬 Flash & Error Handling

- Flash messages for success and errors (using connect-flash)

- Centralized error handling via custom ExpressError class

🧱 MVC Architecture

- Model: MongoDB schemas for Listings, Users, Reviews

- View: EJS templates rendered dynamically

- Controller: Handles business logic and route operations

👨‍💻 Author

Anvesh Anumolu – Full Stack Developer

- 📫 [GitHub](https://github.com/Anvesh-999)
- 🌐 [LinkedIn](https://www.linkedin.com/in/anvesh-anumolu-472a66291/)
- 🧭 [Live Demo](https://wanderlust-vb88.onrender.com)

📜 License

This project is licensed under the MIT License.
Feel free to use and modify with proper attribution.

⭐ If you like this project, don’t forget to star the repo!