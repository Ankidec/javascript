// function myfunction(){
//     console.log("Hello world!")
//     console.log("This is my js code")
// };

// myfunction();


// // function -> 2 number + sum 
// function sum(x,y){
//     console.log(x+y);

// }


// arrow function
// function sum(){
//     return a+b;
// } 
 
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }

// function mul(){
//     return a*b;
// }

// const arrowMul=(a,b)=>{
//     console.log(a*b);
// }



// Create a function using the "function"keyword that takes a string as an argument& returns the number of the vowels in the string.

// function countVowel(str){
//     let count =0;
//     for (const char of str){
//         if (char ==="a" || char ==="e"|| char ==="i"|| char ==="o"|| char ==="u"){
//             count++;
//         }

//     }
//     console.log(count);
// }

//Create a arrow function to perform same task.
// const countVow=(str) =>{
//     let count=0;
//     for (const char of str ){
//         if (char ==="a" || char ==="e"|| char ==="i"|| char ==="o"|| char ==="u"){
//             count++;
//         }

//     }
//     return count;
// }


// for each

// let arr=["mumbai","delhi","lucknow","varansi","azamgarh"]

// arr.forEach((val,idx ,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);

// });


// For a given array of numbers,print the square of each value using the forEach loop.

let nums=[1,2,3,4,5,6,7,8];
let calcSquare=(num)=>{
    console.log(num*num);
};
nums.forEach(calcSquare);