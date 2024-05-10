let mydetails={
    name:"Sufyan Shaikh",
    age:"19",
    Designation:"Software Engineer",
    
}
showDetail=function(state,country,){
    console.log( this.name," ",state,country);

}
 showDetail.call(mydetails,"Burhanpur","India");


let mydetails2={
    name:"  shaikh bhai ",
    age:"19",
    Designation:"Engineer",
    

    }
 
   showDetail.apply(mydetails2,["Burhanpur","India","ss"," sk"]);

//    Bind
let newfun=showDetail.bind(mydetails,"Burhanpur","India");
 newfun();
 









 