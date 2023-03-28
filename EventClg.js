// Event Challenge's 

// Write program when button click then background color change
// using addEventListner

// write program when hover then color change When double click
// then another color change
 
// let btn = document.getElementById("btn").addEventListener("click", myFun);

// function myFun(){
//     document.body.style.backgroundColor="red"
// }



let btn = document.getElementById("btn").addEventListener("mouseover", myFun);
let sec = document.getElementById("btn").addEventListener("dblclick", myFuns);

function myFun(){
    document.body.style.backgroundColor="black"
}

function myFuns(){
    document.body.style.backgroundColor="green"
}