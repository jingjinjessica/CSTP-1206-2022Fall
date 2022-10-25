const express = require("express");
const app = express();
const PORT = 5000;
const path = require('path');

app.use(express.json());

app.get("/", (req, res) => {

    res.send("Welcome to Our Employess Info !")
})

const employeeList = [
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
    
    return res.status(200).json({
        message: "Employess department  Info",
        data: employeeList.map(i=>({id:i.id, name:i.name,employeeID:i.employeeID}))

})
})

//http://localhost:5000/employees/:employeeID (GET)
// Return the employee with the employee ID

app.get("/employees/:employeeID",(req,res)=>
{
    
    return res.status(200).json({
        message: "Employess department  Info",
        data: employeeList.map(i=>({id:i.id, name:i.name,department:i.department}))

})
})

//http://localhost:5000/employees (POST)
// Creates the Employee
app.post("/employees",(req,res)=>{
    const data = req.body;

    employeeList.push(data);
    return res.status(201).json({
        message: "Succesfully created the employees",
        data: employeeList
    })
})
// http://localhost:5000/employees/:employeeID (PUT)
//Updates the Employee for given ID
app.put("/employees/:employeeID",(req,res)=>
    {
        const id = req.params.id;
        const postToUpdate = req.body;
        if (!postToUpdate.id || postToUpdate.name ||!postToUpdate.email || !postToUpdate.employeeID || !postToUpdate.department || !postToUpdate.Salary)
        {
            return res.status(500).json({
                message: "One of the parameters is missing"
        })
    }
    employeeList = employeeList.map((post)=>{
        if(post.id == id){
            post = postToUpdate;
        }
        return post;
    })
    return res.status(200).json({
        message: "Succesfully updated the employees",
        data: employeeList})

    })
//http://localhost:5000/employees/:employeeID (DELETE)
// Deletes the Employee for Given ID
app.delete("employees/:employeeID",(req,res)=>{
    const id = req.params.id;
    const index = employeeList.findIndex((employeeList)=>{
        if(employeeList.id == id)
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

app.get("/employees/highest",(req,res)=>{
    const maxSalary = 0;
    
    // for( var i =0; i< employeeList.length;i++)
    // {
    //     if ( employeeList[i].Salary > maxSalary)
    //     {
    //         maxSalary = employeeList[i].Salary;
    //     }
       
    // }
    // console.log("Max Salary is" + maxSalary +"of " +employeeList[i].name);
   
    return res.status(200).json({
        message: "The Highest Salary",
        data:  console.log("Max Salary is" + maxSalary +"of " +employeeList[i].name)
    })

})

    app.listen(PORT, () => {
        console.log(`Server running at port ${PORT}`);
    })