


// rest Operator
function add(a,b,c,...other){
    console.log(other);
   return a+b+c;
}
const output =add(10,20,20,10,20,10,10);
console.log(output);

// Rest Operator

const names=["sufyan","shaikh"];

function showname(name1,name2){
    console.log(name1,name2);

}
showname(names[0],names[1]);
