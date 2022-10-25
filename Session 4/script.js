// way 1
// const button = document.getElementById("click");
//console.log(button);
//way 2
// const button = document.getElementsByName("button");
// console.log(button)
// way 3
const button = document.querySelector("#click");
console.log(button)
//way 4
const button1 = document.querySelector(".btn");
console.log(button1)

const buttons = document.querySelectorAll(".btn");
console.log(buttons,"All");


// Event handler and listener for button
button.addEventListener("click",function(){
    console.log("Fired");
});

//
const container = document.querySelector(".container");
console.log(container);
container.addEventListener("mouseenter",function()
{
    console.log("Mouse entered")
})