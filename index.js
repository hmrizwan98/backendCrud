const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const userRoutes = require("./routes/users");

const cors = require("cors");

dotenv.config();

// BD connection
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// import routes
const productRoutes = require("./routes/product");
const authRoutes = require("./routes/auth");

// Middleware
app.use(express.json());
app.use(cors());

// route middleware
app.use("/api/products", productRoutes);
app.use("/api", authRoutes);
// app.use("/api/auth", authRoutes);

app.listen(4000, () => console.log("server run on port 4000"));
