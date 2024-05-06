// setTimeOut, setInterval


// Make a Digital Clock using JavaScript
 
let get = setInterval(myFun, 1000);

function myFun(){
    let date = new Date();
    document.getElementById("head").innerHTML=date.toLocaleTimeString();
}