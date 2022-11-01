const e = require("express");
const express = require("express");
const app = express();
const PORT = 5000;
const path = require('path');

app.use(express.json());

app.get("/", (req, res) => {

    res.send("Welcome to Our Employess Info !")
})

let employeeList = [
    {
    id: 1,
    name: "Mike",
    email: "mike@company.ca",
    employeeID: 100,
    department: "IT",
    Salary: 100000
    },
    {
    id: 2,
    name: "Daniel",
    email: "daniel@company.ca",
    employeeID: 101,
    department: "HR",
    Salary: 50000
    }
];  

//http://localhost:5000/employees (GET)
// Return the list of employees

app.get("/employees", (req, res) => {
    return res.status(200).json({
    message: "Employess List  Info",
    data: employeeList
})
})

//http://localhost:5000/employees/:department (GET)
//Return the list of employees for given department name
app.get("/employees/:department",(req,res)=>
{
    const department = req.params.department;
    const findEmployees = employeeList.find((employeeList)=>employeeList.department == department? true : false);

    if(findEmployees){
        return res.status(200).json({
            message: "Employess department  Info",
            data: findEmployees
        })
    }
    else{
        return res.status(404).json({
            message: "Department Doesn't Exist",})
    }

})

//http://localhost:5000/employees/id/:employeeID (GET)
// Return the employee with the employee ID

app.get("/employees/id/:employeeID",(req,res)=>
{
    const id = req.params.employeeID;
    const findEmployeesId = employeeList.find((employeeList)=>employeeList.employeeID == id ? true : false);
    if (findEmployeesId){
        return res.status(200).json({
            message: "Employess department  Info",
            data: findEmployeesId
        })
    }
    else{
        return res.status(404).json({
            message: "Employee Id Doesn't Exist",})

    }
})


//http://localhost:5000/employees (POST)
// Creates the Employee
app.post("/employees",(req,res)=>{
    const data = req.body;
    if ( !postToUpdate.name ||!postToUpdate.email || !postToUpdate.employeeID || !postToUpdate.department || !postToUpdate.Salary)
        {
            return res.status(500).json({
                message: "One of the parameters is missing"
        })
    }
    data.id = employeeList.length+1;
    employeeList.push(data);
    return res.status(201).json({
        message: "Succesfully created the employees",
        data: employeeList
    })
})
// http://localhost:5000/employees/id/:employeeID (PUT)
//Updates the Employee for given ID
app.put("/employees/id/:employeeID", (req, res) => {
    const empid = req.params.employeeID;
    const postToUpdate = req.body;

    if (!postToUpdate.name || !postToUpdate.email ||!postToUpdate.employeeID||!postToUpdate.department || !postToUpdate.Salary) {
        return res.status(500).json({
            message: "One of the parameters is missing"
        })
    }
    employeeList = employeeList.map((post) => {
            if (post.employeeID == empid)
            {
                post = postToUpdate;
            }
            console.log(post);
            return post;
        })
       
    return res.status(200).json({
        message: "Succesfully updated the employee",
        data: employeeList
    })
})
//http://localhost:5000/employees/id/:employeeID (DELETE)
// Deletes the Employee for Given ID
app.delete("/employees/id/:employeeID",(req,res)=>{
    const id = req.params.employeeID;
    const index = employeeList.findIndex((employeeList)=>{
        if(employeeList.employeeID == id)
        {
            return true;
        }
    })
    if(index !== -1){
        employeeList.splice(index,1);
        return res.status(200).json({
            message: "Succesfully deleted the empolyee",
            data: employeeList
        })
    }
    else {
        return res.status(404).json({
            message: "Element you are trying to delete doesn't exist"
        })
    }
})


//http://localhost:5000/employees/salaries/highest (GET) —- (BONUS)
// Return the list of employees in sorted fashion of highest salaries  

app.get("/employees/salaries/highest",(req,res)=>{
    employeeList.sort(function(a,b){
        return a.Salary-b.Salary;
    })
   
    return res.status(200).json({
        message: "The Highest Salary",
        data:  employeeList  
    })

})

    app.listen(PORT, () => {
        console.log(`Server running at port ${PORT}`);
    })