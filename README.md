# 🏡 Wanderlust — Full Stack Accommodation Platform

> An Airbnb-style property listing platform where users can discover, list, and review accommodations from around the world.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

🔗 [Live Demo](#) &nbsp;|&nbsp; 📁 [GitHub Repo](#)

---

## 📌 Overview

Wanderlust is a full-stack web application that replicates core features of Airbnb. Users can sign up, create and manage property listings, upload images, leave reviews, and explore listings on an interactive map. Built with a clean MVC architecture for scalability and maintainability.

---

## ✨ Features

- 🔐 **Secure Authentication** — Signup/login with Passport.js, password salting & hashing
- 🏠 **Listing Management** — Create, edit, and delete property listings with image uploads
- ⭐ **Reviews & Ratings** — Post and delete reviews on any listing
- 🗺️ **Map Integration** — Geocoding API to pinpoint listing locations on an interactive map
- 🔍 **Search & Filter** — Find listings using MongoDB indexing and tokenization
- ☁️ **Cloud Image Storage** — Images uploaded via Multer and stored on Cloudinary
- ✅ **Validation** — Client-side (Bootstrap) and server-side (Joi) form validation
- 📱 **Responsive UI** — Clean, minimal design that works across all devices
- 🔒 **Session Management** — Persistent login sessions using Express Sessions

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript, Bootstrap, EJS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Passport.js |
| Image Storage | Multer, Cloudinary |
| Validation | Joi |
| Maps | Geocoding API |
| Session | Express Sessions |

---

## 🏗️ Architecture

```
Wanderlust/
├── models/          # Mongoose schemas (User, Listing, Review)
├── routes/          # Express route handlers
├── controllers/     # Business logic (MVC controllers)
├── views/           # EJS templates
│   ├── listings/
│   ├── reviews/
│   └── users/
├── public/          # Static assets (CSS, JS, images)
├── middleware/      # Auth & validation middleware
├── utils/           # Helper functions & error handling
├── app.js           # Main entry point
└── cloudConfig.js   # Cloudinary configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- Cloudinary account

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/wanderlust.git
cd wanderlust

# Install dependencies
npm install

# Create .env file
touch .env
```

### Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_atlas_url
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_geocoding_api_token
```

### Run the App

```bash
node app.js
# or
nodemon app.js
```

Visit `http://localhost:8080` in your browser.

---

## 📸 Screenshots

> *(Add screenshots of your homepage, listing page, and map view here)*

---

## 🙏 Acknowledgements

Special thanks to **Shradha Khapra Ma'am** for guidance throughout this project.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
