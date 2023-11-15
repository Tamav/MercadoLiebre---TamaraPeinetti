const express = require("express");
const path = require("path");
const app = express();

let pathPublic = path.resolve("public");
app.use(express.static(pathPublic));

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{  
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get("/", (req, res)=>{
    let homeHtml = path.resolve(__dirname, "./views/home.html")
    res.sendFile(homeHtml);
});



app.get("/register", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"));


})

app.get("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
    

})