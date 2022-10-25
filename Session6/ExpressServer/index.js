const express = require('express');

const app = express();
const PORT = 4000;
const student = [];
// telling express that the dat i am getting is type json

app.use(express.json());


app.get('/',(req,res)=>
{
    res.send("Welcome to Student APIS!");
})
app.get('/user',(req,res)=>{

    res.send("Hello user!");
})


app.get('/students',(req,res)=>{

     // for get requests we give 200 success response
    //const data =  res.status(404);
    //return data.json(student);
    return DataTransfer.json(student);
})

app.post('/students',(req,res)=>{
    const studentData = req.body;
    student.push(studentData);
    //201 is used
    return res.status(201).json(student);
})
app.listen(PORT,()=>
{
    console.log(`Server running on port ${PORT}`);
})