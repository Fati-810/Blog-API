# Blog-API

This is a full-stack blog web application that allows users to create, view, edit, and delete blog posts. It features a clean user interface with responsive design and leverages an Express.js REST API as its backend. The app is ideal for learning or demonstrating CRUD operations with a simple UI.

# Features
📝 Create Post – Add a new blog post with title, content, and author.

📖 View Posts – Homepage displays a list of blog entries dynamically.

✏️ Edit Post – Update existing blog content.

🗑 Delete Post – Remove any post with one click.

📅 Auto Timestamping – Posts include the creation date.

💻 Clean UI – Responsive, minimal front-end built with EJS and custom CSS.

🔁 Live Updates – Uses Axios to communicate with the backend API.

🧠 In-Memory Data – No database used; data stored in memory (ideal for demonstration or learning).

# Technical Overview (Behind the Scenes) :

Frontend:

EJS templates for dynamic rendering (index.ejs, modify.ejs)

main.css for responsive, modern styling

Backend:

Express.js as the web server

Axios for server-to-server API communication

Body-parser middleware for handling form and JSON input

API (Microservice Architecture):

Runs separately on port 4000

RESTful routes:

GET /posts – Fetch all posts

GET /posts/:id – Get a specific post

POST /posts – Add a new post

PATCH /posts/:id – Update specific fields of a post

DELETE /posts/:id – Delete a post

Main App Server:

Runs on port 3000

Renders frontend views and routes traffic through internal API

Data Storage:

Temporary, in-memory array (no persistent storage)

# Link:
https://blog-api-yaw2.onrender.com/
