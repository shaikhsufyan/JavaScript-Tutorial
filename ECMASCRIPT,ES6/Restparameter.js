// Normal function

// function add(a,b,c,d){
//     console.log(a+b+c+d );
// }
// add(2,4,6,8,10);


// REST PARAMETER

function add(...array){
    console.log(array)

    total=0;
    for(let i of  array)
    total=total+i;
    console.log(total);
}
add(3,4,5,6,4,8,70);










// QUIZ QUESTION  FIND ANSWER OURSELF



// function name(a,b,...c){
//     console.log(`${a} ${b}`);
//     console.log(c);
//     console.log(c.length);
//     console.log(c.indexOf("faisu"));
// }

// name("shaikh","sufyan","imran","ahtesham","faisu")

