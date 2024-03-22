// let marks=[76,98,76,55,45];
// console.log(marks);
// for loop in arrays
// let heros=["ironman","thor","hulk","shaktiman","spiderman","antman"]
// // for (let idx=0; idx< heros.length; idx++){
// //     console.log(heros[idx]);
// // }



// // for of 
// for (let hero of heros){
//     console.log(hero);
// }


// let cities=["delhi","mumbai","lucknow","banaras","gurgaon"]
//  for (let city of cities){
//     console.log(city.toUpperCase());
//  }

// /* q-1 for a given array with makes of student ->[85,97,44,37,76,60] fine the average marks of the entire class./*

let marks=[85,97 ,44, 37, 76,60];
let sum=0;
 for(let val of marks){
    sum+=val;
 }
 let avg=sum/marks.length;
 console.log(`avg marks of the class = ${avg}`);