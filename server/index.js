const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const taskRoutes = require("./routes/tasks");
app.use("/tasks", taskRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/taskflow", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});
