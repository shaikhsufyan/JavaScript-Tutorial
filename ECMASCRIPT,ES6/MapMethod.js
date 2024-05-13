// Map() Method 

// We create an new array with Map() in this three parameter currntvalue, index , array and we use fat arrow function

// simple Map() method  

// let array=["sufyan","shaikh","sufyanShaikh"];

// // console.log(array);


// const newarr=array.map(function(currentvalue,index ,arr){
//     return  index + " " + currentvalue+ "" + arr ;
// });

// console.log(newarr);








// advanced Map() method

const persondetail=[
   {name:"sufyan",age:20,logo:"IAS"}, 
    {name:"shaikh",age:20,logo:"IAS"},
    {name:"sks",age:20,logo:"IAS"},
    {name:"sufyan",age:20,logo:"IAS"}

]
  
// console.log(persondetail[0].name);


const details=persondetail.map(function(curvalue ,index,arr) {

     
    return  `my name is ${curvalue.name} and index is ${index} and age is ${curvalue.age} and logo is ${curvalue.logo}  `;
});


console.log( details);




// This type we empliment map()function or method in html 
document.getElementById("pd").innerHTML=details;