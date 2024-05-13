

//  Call
// Call Method basically  call to the owner object passed as an argument

let Mydetail1={
    name:"sufyan",
    age:19,
    designetion:"Software Engineer",
    
}
let printdetail=function(state,country){
    console.log(this.name ," "+state +"",+country);
}
printdetail.call(Mydetail1,"Burhanpur","India");


let Mydetail2={
    name:"Shaikh",
    age:19,
    designetion:"Software Engineer",
    
}
 
 printdetail.call(Mydetail2, "Burhanpur","India");

//apply()  
 printdetail.apply(Mydetail2,["Burhanpur","India"]);

//  bind()
let bindcopy=printdetail. bind(Mydetail1, "Burhanpur","India");
bindcopy();
 

 














 