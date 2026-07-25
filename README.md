# Wanderlust

A full-stack accommodation listing web application inspired by Airbnb. Users can create property listings, upload images, and leave reviews. I built this project to gain hands-on experience with backend development, database management, authentication, and third-party API integration.

## Features

* User signup, login, and logout authentication using Passport.js
* Create, edit, and delete property listings
* Upload and manage listing images with Cloudinary
* Add and delete reviews for listings
* Search and browse listings
* Server-side validation using Joi
* Session-based authentication and authorization
* Responsive UI built with Bootstrap

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Other Tools

* Passport.js (Authentication)
* Cloudinary (Image Storage)
* Multer (File Uploads)
* Joi (Validation)
* Express Session

## Project Structure

```text
wanderlust/
├── models/
├── routes/
├── controllers/
├── views/
├── public/
├── middleware/
├── utils/
├── app.js
└── cloudConfig.js
```

## Getting Started

### Prerequisites

* Node.js
* MongoDB Atlas or local MongoDB
* Cloudinary account

### Installation

```bash
git clone https://github.com/your-username/wanderlust.git

cd wanderlust

npm install
```

### Environment Variables

Create a `.env` file in the root directory and add:

```env
ATLASDB_URL=your_mongodb_connection_string

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_map_token
SECRET=your_session_secret
```

### Run the Project

```bash
node app.js
```

or

```bash
nodemon app.js
```

Open:

```text
http://localhost:8080
```

## What I Learned

Through this project, I learned:

* Building a full-stack application using the MVC architecture
* Implementing authentication and authorization
* Designing MongoDB schemas and relationships
* Handling file uploads and cloud storage
* Integrating third-party APIs
* Writing reusable middleware and validation logic
* Managing sessions and user permissions

## Acknowledgements

This project was built as part of my web development learning journey. Special thanks to Shradha Khapra Ma'am for the guidance and resources.

