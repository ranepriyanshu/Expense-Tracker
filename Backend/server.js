// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const connectDB = require("./config/db");

// const authRoutes = require("./routes/authRoutes");


// const app = express();

// // middleware to handle cors

// app.use(
//     cors({
//         origin: process.env.CLIENT_URL || "*",
//         methods: ["GET", "POST", "PUT", "DELETE"],

//         allowedHeaders: ["Content-Type", "Authorization"],
//     })
// );


// app.use(express.json());
// connectDB();

// app.use("/api/v1/auth", authRoutes);
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`) });



require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Connect to database first
connectDB(); // 👈 Move this above middleware

// Middlewares
app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json()); // 👈 Parsing JSON body
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);



// serve uploads folder

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
