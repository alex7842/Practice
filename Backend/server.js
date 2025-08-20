const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
const todoRoutes =require("./routes/todoRoutes")
app.use(cors());
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected")
    
})
app.use("/api/todo", todoRoutes);
app.listen(3000, () => {
    console.log("Server started on port 3000")
})

