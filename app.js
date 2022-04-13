const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');
require('dotenv').config();
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// connect database
const dbURI = `mongodb+srv://root:${process.env.PASSWORD}@recording-life.a31dg.mongodb.net/record?retryWrites=true&w=majority`
// const dbURI = "mongodb://127.0.0.1:27017/nodeapi";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(3000);
        console.log("database connected");
    })
    .catch(err => console.log(err))


app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(morgan("tiny"));

app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

app.get("/", (req, res) => {
    res.redirect("/blogs");
})

app.get("/about", (req, res) => {
    res.render("about", { title: "关于我们" })
})

app.use("/blogs",blogRoutes);

// 中间件 的执行 一定是在req 和 res之间
// 中间件 一定是有一定的作用
app.use((req, res) => {
    res.status(404).render("404", { title: "404" })
})

