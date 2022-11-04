const express = require("express");
const Joi = require('joi')
const mongoose = require("mongoose");
const config=require('dotenv').config();
const { notFound, errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/DB")


const Users = require("./routes/userRoutes");

connectDB()

const app = express();
app.use(express.json());

app.use("/api/user", Users);

app.get("/", (req, res) => {
    res.send("It's running...");
    });

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening at Port ${PORT}...`));
