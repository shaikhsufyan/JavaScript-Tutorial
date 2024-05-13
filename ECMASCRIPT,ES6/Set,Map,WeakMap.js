// set

// set is a object
// It contain unique element means no duplicate element
// It is Object Constructor


// let array=[1,2,3,4,5];

// let setobject= new Set(array);
// console.log(setobject);

// setobject.add(5);
// setobject.add(5);
// setobject.delete(3);
// console.log(setobject);
// console.log(setobject.has(20));
// setobject.clear();

// console.log(setobject);
// let setobject2=["sufyan"];
// console.log(setobject2);






// MAP -> KEY -> VALUE

// MAP
// Map print value in (key and value)form ,Means value have name is called key
// In this also no duplicate but we write newvalue at same key then they update newvalue at same key


// let myMap=new Map([["name","sufyan"],["name2","shaikh"]]);

// console.log(myMap);
// myMap.set( "name3","skbhai" );  //From (.set) function we add the value
// console.log(myMap);             
// myMap.delete("name3");          //From (.delete) function we delete the value
// console.log(myMap);

// console.log(myMap.get("name")); //From get method using of key we get value
// for(let [key,value] of myMap){   // From forloop we get key and value in order
//     console.log(key,value);
// }


// WEAK SET
// WeakSet we store only object 
// In WeakSet we not use foreach loop or iterator

// let weaks=new WeakSet();
// let obj1={"name1":"sufyan"};
// let obj2={"name2":"shaikh"};
// weaks.add(obj1);
// weaks.delete(obj1);
// weaks.add(obj2);
// console.log(weaks);
// console.log(weaks.has(obj1));   //From has() method we check output come in true or false







// WeakMap
// WeakMap also store only object
// we not use forloop 



let wm=new WeakMap();
let ob1={"name":"sufyan"};
let ob2={"name":"shaikh"}
wm.set(ob1,"ss");   //From the set() method we add the object as key inside set we pass is our value 
wm.set(ob2,"sk");
console.log(wm);

 