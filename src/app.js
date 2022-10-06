const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

port = process.env.PORT || 8000;

const mainpath = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",templates_path)
hbs.registerPartials(partial_path)

app.use(express.static(mainpath));

app.get("/", (req,res)=>{
    res.render("index");
})

app.get("/about", (req,res)=>{
    res.render("about");
})

app.get("/weather", (req,res)=>{
    res.render("weather");
})

app.get("*", (req,res)=>{
    res.render("404error");
})



app.listen(port,() =>{
    console.log("Listening...");
} )