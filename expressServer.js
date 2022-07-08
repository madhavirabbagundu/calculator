const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send("hello madhavi")
});
app.listen(3004)

app.get('/books',(req,res)=>{
res.json({name1:"The Life and Oxpinions of Tristram Shandy",
name2:"Gentleman Robinson Crusoe Gulliver's Travels" ,
name3:"Gulliver's Travels",
name4:"How to fly"})
});
app.listen(3005)