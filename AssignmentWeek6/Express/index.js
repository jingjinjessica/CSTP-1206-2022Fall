// Question 3
// Write a Express server where you will keep records of Employees
// Write get and post api’s for getting all the employees and adding employee to the list

const express = require("express");
const app = express();
const PORT = 4000;
const path = require('path');
const employees = [
    {
      name: "Daniel",
      employeeId: 100,
      email: "daniel@gmail.com",
      department: "IT"
    }
];
app.use(express.json());

app.get("/", (req, res) => {

    res.send("Welcome !")
})
app.get("/employees", (req, res) => {
        return res.status(200).json({
        message: "Employess Info",
        data: employees
    })
})

app.post("/employees",(req,res)=>{
    const data = req.body;

    employees.push(data);
    return res.status(201).json({
        message: "Succesfully created the employees",
        data: employees
    })
})




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});