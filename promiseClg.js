// Promise Challenge :

// write program which give result after 3 second using promise,
// async await

let pro = new Promise(function(resolve, reject){

    setTimeout(function(){
       let API = true;
       if(API){
        resolve("Promise resolve....")
       }else{
        reject("Promise rejected....")
       }
    },1000)
})

console.log(pro);
async function check(){
    let data = await pro;
    console.log(data);
    
}
check();
