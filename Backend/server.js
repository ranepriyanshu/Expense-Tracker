require("dotenv").config();

const exporess = require("express");
const cors = require("cors");
const path = require("path");


const app = exporess();

// middleware to handle cors

app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],

        allowedHeaders: ["Content-Type", "Authorization"],
    })
);


app,use(exporess.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`) });