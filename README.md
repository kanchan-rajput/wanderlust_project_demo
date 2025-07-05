# 🏡 Wanderlust – Villa & Vacation Home Listing Website

**Wanderlust** is a full-stack web application for listing and managing vacation villas. Built with **Node.js, Express.js, MongoDB, EJS, HTML, CSS, Bootstrap, and JavaScript**, it allows users to **create, read, update, and delete (CRUD)** villa listings in various locations.

This project showcases server-side rendering with **EJS**, a responsive frontend with **Bootstrap**, and full-stack integration using **MongoDB** and **Express.js**—ideal for portfolio building and college submissions.

---

## 🚀 Features

- 🏠 **CRUD Operations** for villa listings (Add, Edit, View, Delete)
- 📄 **EJS Templating** for dynamic HTML rendering
- 🎨 **Responsive UI** built with Bootstrap
- 🗃️ **MongoDB Integration** for storing villa data
- ⚙️ Follows **MVC architecture** for clean project structure

---

## 🧰 Tech Stack

- **Frontend**: HTML, CSS, Bootstrap, JavaScript, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Templating Engine**: EJS
- **Architecture**: MVC + RESTful Routing

---

## 📁 Folder Structure

wanderlust/
│
├── models/ # Mongoose schema for villa listings
│ └── Villa.js
│
├── routes/ # Express route definitions
│ └── villas.js
│
├── views/ # EJS templates for rendering pages
│ ├── listings/ # Index, New, Show, Edit views
│ └── partials/ # Navbar, Footer, and Head includes
│
├── public/ # Static assets
│ ├── css/
│ │ └── styles.css # Custom styles
│ ├── js/ # Optional JavaScript files
│ └── images/ # Placeholder or sample villa images
│
├── app.js # Main server entry file
├── package.json # Project metadata and dependencies
└── .env # Environment variables (Mongo URI, PORT)


---

## 🛠️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/kanchan-rajput/wanderlust_project_demo.git
cd wanderlust_project_demo
