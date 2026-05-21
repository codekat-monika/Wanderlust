# 🏡 Wanderlust — Full Stack Accommodation Platform

A full-stack web application inspired by Airbnb — built as a learning project to understand end-to-end web development with Node.js, Express, and MongoDB.

📁 [GitHub Repo](#)

---

## 📌 About The Project

This is one of my first full-stack projects. I built Wanderlust to understand how real-world web applications work — from user authentication and database design to file uploads and third-party API integration. It helped me connect all the dots between frontend, backend, and database.

---

## 🏠 What It Can Do

- Sign up / log in securely and stay logged in across sessions
- Create, edit, and delete property listings with photos
- Browse listings and explore their location on an interactive map
- Leave reviews and ratings on any listing
- Search and filter listings easily

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** HTML, CSS, JavaScript, Bootstrap, EJS
- **Authentication:** Passport.js
- **Image Storage:** Multer + Cloudinary
- **Maps:** Geocoding API
- **Sessions:** Express Sessions
- **Validation:** Joi

---

## 🚀 How To Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/wanderlust.git
cd wanderlust

# Install dependencies
npm install

# Create a .env file and add your keys (see below)
touch .env

# Start the server
node app.js
```

Open `http://localhost:8080` in your browser.

---

## 🔑 Environment Variables

Create a `.env` file in the root folder and add:

```env
ATLASDB_URL=your_mongodb_atlas_url
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_geocoding_api_token
```

---

## 📁 Folder Structure

```
wanderlust/
├── models/          # Mongoose schemas (User, Listing, Review)
├── routes/          # Express routes
├── controllers/     # Route logic (MVC)
├── views/           # EJS templates
├── public/          # Static files (CSS, JS)
├── middleware/      # Auth & validation middleware
├── app.js           # Main entry point
└── cloudConfig.js   # Cloudinary setup
```

---

## 🌱 What I Learned

- How to structure a full-stack app using MVC architecture
- User authentication and session management with Passport.js
- Connecting MongoDB with Mongoose for database operations
- Handling file uploads and storing images on Cloudinary
- Integrating third-party APIs (maps, geocoding)
- Writing server-side validation with Joi

---

> 💬 This is a learning project — feedback and suggestions are welcome!
