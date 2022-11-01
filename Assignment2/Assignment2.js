// 1. Write a function to find the sum of the elements inside the array
console.log("Question: 1")
const arr=[1,2,3,4,5];

const sum = arr.reduce(
    function(a,b){
        return a+b;
    },0
);
console.log(sum);


// 2. Using a function for loop print all even numbers up to n (parameter in function);
console.log("Question: 2")
function evenNumbers(num){
    let i = 0;
    while(i<num)
        {
            if(i%2 === 0)
                {
                    console.log(i);
                }   
            i++;
        };
    
};
evenNumbers(10)

// 3. Write a function take a string as a parameter, Check if a string contains the letter “y”. If yes print "YES" and only one time.
    // For example - "Crayzy" "Yes"
console.log("Question: 3")
function findYcahr(string)
{
   if(string.search("y")!=-1)
   {
    console.log("Yes");
   }
   else
   {
    console.log("There is no chart y");
   }
}
findYcahr("crayzy");


// 4. Write a function to find the factorial of a given number n
console.log("Question: 4")
function factorial(number)
{
    if (number === 0 || number === 1)
    {
        return 1;
    }
    for(var i=number-1;i>=1;i--)
    {
        number*=i;

    }
    console.log( number);
}

factorial(5);

// 5.  Write a function which accepts 4 parameters (different scores of a student for subjects), and 
// then calculate the average of all the score.
// If the average is more than 90 , then console grade A
// If the average is between 70 and 90 , then console grade B
// If the average is between 50-70, then console grade C
// Other wise console grade F
console.log("Question: 5");
function averageGrade(num1,num2,num3,num4)
{
   var averagegrade = (num1+num2+num3+num4)/4;
   //console.log(averagegrade);
   if(averagegrade > 90)
   {
    console.log("A");
   }
    else if(averagegrade>70 & averagegrade<=90)
    {
        console.log("B");
    }
   else if(averagegrade>50&averagegrade<=70)
   {
        console.log("C");
   }
   else 
   {
        console.log("F");
   }
}

averageGrade(90,90,90,99);

// 6. Write a function which prints the star pattern like that for the given value 
// *
// **
// ***
// ****
// *****
// ******
// *******
console.log("Question: 6");
let start = "";
function repeatStart(num)
{
    for(let i=1 ; i<=num+1 ; i++)
    {
        for(let j=0;j<=num-i;j++)
        {
            start += "";
        } 
        for (let k=0;k<i;k++)
        {
            start += "* ";
        }
        start += "\n";
       
    }
    console.log(start);
}

repeatStart(7);


// 7.
// *
// **
// ***
// ****
// *****
// ******
// *******
// ******
// *****
// ****
// ***
// **
// *
console.log("Question: 7");
let starts = "";
function satrtsFunction(num)
{
    for(let i=0 ; i<=num ; i++)
    {
        for(let j=0;j<=i;j++)
        {
            starts += "* ";
        }
        starts += "\n";
       
    }
    for(let i=1;i<num;i++)
    {
        for(let j=0;j<num-i;j++)
        {
            starts +="* ";
        }
        starts +="\n";
    }
    console.log(starts);
}

satrtsFunction(4);


// 8. Write a function to reverse a string
function reverseString(string)
{
    const stringArray = string.split("");
    const reverseArray = stringArray.reverse();
    const joinArray = reverseArray.join("");
    
    console.log(joinArray);
}
reverseString("Hello");



