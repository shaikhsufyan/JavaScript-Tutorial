// es5

// function multiply(a,b){
     

//     console.log(a*b);
// }
// multiply(4);



// function mult(a,b){
//     b=(typeof b !== 'undefined') ? b : 6
//     console.log(a*b);
// }
// mult(2);

// ES6
// Defination = Default Parameter function  allow to named parameter to initialize with default value When no value passed

// function mult(a,b=5){
//     console.log(a*b);
// }
// mult(a);


const mult = (a,b=4) =>{
    console.log(a*b);
}
mult(3);

