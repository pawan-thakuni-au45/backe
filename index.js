const express=require('express')

const app=express()
express.json()

app.get('/signup',(req,res)=>{
    res.json("yeah nabay")
    res.alert("this website is elligal")
    alert("yeah")
   
})



app.listen(8000,()=>{
    console.log(`app is running in port 8000 `);
})