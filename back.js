const express = require("express");
const app = express();
const path = require("path")
   app.use(express.static(path.join(__dirname,"public"))) 

    app.get("/", function(req, res){
        res.sendFile(__dirname + "/html/index.html")
    })

    app.get("/ferrari", function(req, res){
        res.sendFile(__dirname + "/html/ferrari.html")

    })
    app.get("/Mercedes", function(req, res){
        res.sendFile(__dirname + "/html/mercedes.html",)

    })
    app.get("/Mclaren", function(req, res){
        res.sendFile(__dirname + "/html/mc.html")

    })

    app.get("/RedBull", function(req, res){
        res.sendFile(__dirname + "/html/rbr.html")
    })


app.listen(8081, console.log("O servidor est rodando na porta 8081"))