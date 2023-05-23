const express = require('express');
const app = express();
const path = require('path');
const hbs = require("hbs");
const port = process.env.PORT ||  4000;
const {json} = require("express");

//public  static mens html che page link jodayachi express la
const static_Path = path.join(__dirname,"/public");
const template_Path = path.join(__dirname,"/templates/views");
console.log(template_Path);
const partials_Path = path.join(__dirname,"/templates/partials");


app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(static_Path));
app.set("view engine",'hbs');
app.set("views", template_Path);
hbs.registerPartials(partials_Path);         


       

// Routing 

app.get("/",(req,res)=>{
 res.render("index");

});


app.get("/about",(req,res)=>{
  res.render("about");
 
 }); 


 app.get("/weather",(req,res)=>{
  res.render("weather");
 
 });           

  
 
  app.get("*",(req,res)=>{
  res.render("404error",{
    error:"error_page",
 });
  });



// port connected 
app.listen(port,(err)=>{
if(err)throw err;
console.log(` ${port} connected`); 

});




        
   

         

                                                   


        
