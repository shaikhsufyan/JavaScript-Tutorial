

let studentid={
    name :"sufyan",
    age :19,
    degree :'b-tech',
    hobbies :{
        game :"cricket",
        learn :"codeing",

    }

}
//   Useing ObjectDestructure :: These have 2 property 1st =  is declare in order way 2nd = not change the name should be same name 
let {name,age,degree,hobbies}=studentid;
 
console.log(`My name is ${name} and age is ${age} and degree is ${degree} My hobby is ${hobbies.learn}`);





// console.log("MY name is ",studentid.name,"age is",studentid.age,"degree is",studentid.degree);


