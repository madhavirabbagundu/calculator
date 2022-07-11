const express = require('express')
const app = express();
app.use(logger)

app.get('/',(req,res)=>{
    // console.log("hello")
    res.send('this is the books api page')
})
app.get('/book/:bookName',(req,res)=>{
    // res.send("Books Page")
    console.log(req.params)
    res.send(req.params)
})



function logger(req,res,next){
    console.log('Horry poter,','GameOfThrones','Gullivers Travels,',"How to fly")
    next()

}
app.listen(4000)
