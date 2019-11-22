const express = require('express');
const app =  new express();


app.use(express.static(__dirname+ "/"));

app.get("/",function(req,res){

    res.sendFile(__dirname + '/Client/home.html');
})

app.listen(2500,function(){

console.log("Server running in port 2500");

});

