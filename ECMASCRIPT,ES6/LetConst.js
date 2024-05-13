// variable var are in FunctionScope and variable Let and Const are in BlockScope

// var name ="sufyan";
// name="shaikh";
// console.log(name);



// let name ="shaikh";
// name="ssss"
// console.log(name);


//   var ,let we use as duplicate and print get output
// But in const we don't use duplicate or same variable name IF we give same in const then error comes

// const name ="sufyan";
//  name="shaikh";
// console.log("name");



// BLOCK SCOPE =In block scope we can not access from outside of the blockscope We acess or print  only inside the blockscope

// function jsgood(){      
//     if(true){
//         let language ="javascript";
//         const  version="ES6";
//         console.log("language name is",language,"version is ",version);
//     }
    

// }

// jsgood();








//  what you thing what output come : output come sufyan because shaikh are in blockscoped so we not access them so printf sufyan
function  name(){
    let x="sufyan"
    
    if(true){
        let x="shaikh";
       

         
    }
    console.log(x);
}
name();