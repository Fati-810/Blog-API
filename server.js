import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 4000;

// Helper for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// In-memory post store
let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content: "DeFi is a revolution...",
    author: "Alex Thompson",
    date: "2023-08-01",
  },
  {
    id: 2,
    title: "Impact of AI on Businesses",
    content: "AI is reshaping industries...",
    author: "Mia Williams",
    date: "2023-08-05",
  },
];
let lastId = posts.length;

// Routes
app.get("/", (req, res) => {
  res.render("index", { posts });
});

app.get("/new", (req, res) => {
  res.render("modify", { heading: "New Post", submit: "Create Post" });
});

app.get("/edit/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  res.render("modify", {
    heading: "Edit Post",
    submit: "Update Post",
    post,
  });
});

// API logic
app.post("/api/posts", (req, res) => {
  const newPost = {
    id: ++lastId,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date().toISOString().slice(0, 10),
  };
  posts.push(newPost);
  res.redirect("/");
});

app.post("/api/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  post.title = req.body.title;
  post.content = req.body.content;
  post.author = req.body.author;
  res.redirect("/");
});

app.get("/api/posts/delete/:id", (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.redirect("/");
});

// Start
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
