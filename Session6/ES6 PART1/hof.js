// Call back function 
// When a function is passed as a parameter/ argument to another function

function gree(fn)
{
    //As the definition says call me back
    fn();
}

function myName()
{
    console.log("Hello jin");
}
gree(myName); //Hello jin


 let array = [1,2,3];
//  array.forEach(function(item,index){

//  })

 //arrow function
 array.forEach((item,index) =>{
    console.log(item,"Arry[i] value");
    console.log(index,"Index Value")
})

let myArray = [1,2,3,4,5];
let newArray = myArray.map(function(item,index){
    return item*2
})
console.log(myArray,"MY Array");
console.log (newArray,"New  Array");


//Note--- when you using the map function, The length of the array remains the same

//we want to change these values to filter pass or fail
let studentMathMarks = [
    {
        name: "Daniel",
        rollNumber: 100,
        garde :90
        
    },
    {
        name: "Amy",
        rollNumber: 101,
        garde :98
    },
    {
        name: "Eric",
        rollNumber: 40,
        garde :30
    }
];


let modfiedArray = studentMathMarks.map((student)=>{
    if(student.garde>50){
        student.garde= "Pass"
    }
    else{
        student.garde = "Fail"
    }
    return student;
})
console.log(modfiedArray);

// filter function


let numArray = [1,2,3,4,5,7];
let newArray2 = numArray.filter((num)=>{
    if(num%2 == 0)
    {
        return true
    }
})
console.log(numArray,"MY Array");
console.log (newArray2,"New  Array");

let passedStudents = modfiedArray.filter(function(student){
    if (student.garde === "Pass")
    {
        return true;
    }
})
let failStudents = modfiedArray.filter((student) =>
    student.garde ==="Fail"? true:false)
console.log(failStudents);

// **************************************

// REDUCE FUNCTION

let sum = 0;
let array2 = [1,2,3,4,5];
for (let i =0 ; i<array.length;i++)
{
    sum = sum +array2[i]
}
console.log(sum);

// let sumOfarray = array2.reduce((accumulator,currentValue)=>{


// },initialValue)


//accumulator === sum
//currentValue === array[i]
//initialValue === 0
let sumOfarray = array2.reduce((accumulator,currentValue)=>{

    return accumulator+currentValue;
},0)
console.log(sumOfarray);

// Maximum inside the array
// You can use for loop
let max = -Infinity;
for (let i = 0 ; i< array1.length; i++) {
    if (array1[i] > max) {
        max = array1[i];
    }
}

console.log(max);


// You can reduce just like the above example
let maxValue = array1.reduce((accumulator, currentValue) => {
   return accumulator >  currentValue ? accumulator : currentValue
}, -Infinity)

console.log(maxValue);



