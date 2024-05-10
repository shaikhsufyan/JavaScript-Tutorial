// const array=[5,3,4,8,6];

// function max(array){
//     let max=0;
//     for(i=0;i<=array.length;i++){
//         if(array[i] > max){
//             max=array[i];
//         }
//     }
//      return max;

// }
// console.log(max(array));

// reduce function use

const array=[5,4,7,8,9];

const max=array.reduce( function (acc,cur){
    if(cur>acc){
        acc=cur;
    }
  return acc;

},0)
console.log(max);