const express = require('express');
const app = express();
const port= process.env.PORT || 8000; 

const categories= require('./data/categories.json')

app.get('/',(req,res)=>[
    res.send("Hello World")
])
app.get('/news-categories',(req,res)=>[
    res.send(categories)
])

app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
})
