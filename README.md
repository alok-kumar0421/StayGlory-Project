# 🏡 StayGlory

StayGlory is a full-stack hotel & stay listing web application inspired by platforms like Airbnb.  
Users can explore stays, create listings with images, and share reviews — all with secure authentication and authorization.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- User signup & login using Passport.js
- Session-based authentication
- Only listing owners can edit or delete listings
- Only review authors can delete their reviews

### 🏠 Listings
- Create, edit, and delete stay listings
- Upload listing images using Cloudinary
- Responsive UI with Bootstrap
- Location, price, country, and description support

### ⭐ Reviews
- Add reviews with star ratings
- Reviews linked to users
- Star rating UI for better user experience

### ☁️ Image Upload
- Image upload handled using Multer
- Images stored securely on Cloudinary
- Optimized image delivery via CDN

---

## 🛠️ Tech Stack

### Frontend
- EJS (Embedded JavaScript Templates)
- Bootstrap 5
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- Passport.js (Local Strategy)

### Tools & Services
- Cloudinary (Image storage)
- Multer (File uploads)
- dotenv (Environment variables)
