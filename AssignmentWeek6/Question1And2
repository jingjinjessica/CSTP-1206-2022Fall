//Question: 1
// Write a function for that takes above array as a parameter and function to calculate the total of
// the marks of each student, and returns the student with the highest marks.
// Note: If you want you can add values to the objects of these array. YOU HAVE TO USE ES6
// FUNCTIONS (HOF’s) only.
// Your function should look like
// function studentWithHighestMarks(array) {}
console.log("Questin 1");
let student = [
    {
    name: "Daniel",
    email: "daniel@gmail.com",
    marks: [80, 60, 50, 70, 95]
    },
    {
    name: "Mark",
    email: "mark@gmail.com",
    marks: [99, 40, 84, 72, 60]
    },
    {
    name: "Stacy",
    email: "stacy@gmail.com",
    marks: [8, 30, 11, 0, 20]
    },
    {
    name: "Geri",
    email: "geri@gmail.com",
    marks: [100, 99, 95, 85, 99]
    }
    ];
    function studentWithHighestMarks(array) {
        
        for (let i =0; i<array.length ; i++)
        {
            let totalMarks = array[i].marks.reduce((mark,nextmark)=>
            {
                 return  mark + nextmark;   
            })
            console.log(`${array[i].name}'s total mark: ${totalMarks}`); 
            array[i]["totalMarks"] = totalMarks;
        } 
        let maxMark = 0;
        let student = array[0];
        for(let i=0; i<array.length;i++)
        {
            if(array[i].totalMarks > maxMark)
            {
                maxMark = array[i].totalMarks;
                student = array[i];
            }
            
        }
        return student;
        
    }
    console.log(studentWithHighestMarks(student));

    











//Question: 2
// Write a function to find the missing number in the array whose value ranges from 0 —> n,
// Example 1
// Let array = [ 4, 5, 2, 1, 0 ] , Here the missing number is 3, so you have to find it
// Example 2
// Let array = [2, 1, 0, 3, 7, 6,4, 5, 10, 9] , Here the missing number is 8, so you have to find it.
// YOU HAVE TO USE ES6 FUNCTIONS (HOF’s) only.
// Your function should look like
// Function missingNumber(array, n) {}
// console.log("Questin 2");
// let arr1 = [ 4, 5, 2, 1, 0 ];
// let arr2 = [2, 1, 0, 3, 7, 6,4, 5, 10, 9];

// function missingNumber(array, n) {
//     let missNum = [];
//     for(i = 0; i <= n; i++)
//     {
//         if (!array.includes(i))
//         {
//             missNum.push(i);
//         }
//     }
//     return console.log(`The missing number is ${missNum}.`);
// }
// missingNumber(arr1, 5);
// missingNumber(arr2, 10);