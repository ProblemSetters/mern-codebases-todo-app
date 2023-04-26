require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

// routes
const todo = require("./routes/todo");
// connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// initialize middleware
app.use(express.json({ extended: false }));

// use routes
app.use("/api/todo", todo);

// setting up port

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
