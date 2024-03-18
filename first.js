// const product={
//     tittle:"BALL PEN",
//     rating:5,
//     offer:7,
//     price:570,
// };
// console.log(product)


// const profile={
//     tittle:"shradha chapar",
//     post:500,
//     isfollow:true,
//     following:5
// };
// console.log(profile)

// //arithmetic opretion
// let a=5;
// let b=2;
// console.log("a =",a,"& b", b)
// console.log("a+b =",a+b)
// console.log("a-b =",a-b)
// console.log("a*b =",a*b)
// console.log("a/b =",a/b)
// console.log("a%b =",a%b)
// console.log("a**b =",a**b)

// // // Unary operator
// let a =15;
// let b =2;
// a+8;//6
// console.log("a =",a,"& b", b)


// conditional statements
//  let age=15;
//   if (age>=18){
//     console.log("you can vote");

//   }
//    if (age<18){
//     console.log("you can not vote");
//    }

// let mode="dark";
// let color;
// if(mode==="dark"){
//     color="black";
// }
//  if(mode==="light"){
//     color="white";
//  }
// console.log(color)

// if-else statements
// let mode="dark";
// let color; 
// if(mode==="dark"){
//     color="black";
// }
//  else{
//     color="white";
//  }
// console.log(color)


//odd or even
// let num=15;
// if(num%2===0){
//     console.log(num ," is even");

// } else{
//     console.log(num ," is odd");
// }

// else-if statement
//  let age=19;
// if (age<18){
//     console.log("junior");
// } else if (age>60){
//     console.log("senior");
// }else{
//     console.log("middle");
// }

// let mode="dark";
// let color;
// if (mode==="dark"){
//     color="black";
// }else if(mode==="blue"){
//     color="blue";
// }else if (mode==="pink"){
//     color="pink";
// }else{
//     color="white";
// }
// console.log(color);


// Ternary Operators
// condition ?true output: false output

// let age=15;
// let result=age >=18 ? "adult":"not adult";
// console.log(result);
// alert("hello!");//one time pop up create krta hai 

// let name=prompt("hello");
// console.log(name);

// get user to input a num using prompt("Enter a number;").check if number is a multiple of 5 or not.

// let num= prompt("Enter a number;")
// if (num % 5===0){
//     console.log( num," is multiple of 5");
// } else { 
//     console.log(num," is not  multiple of 5");
// }

//  whrite a code which can give gardes to student according to their scores:
// 90-100,A . 70-89,B. 60-69,C.50-59,D. 0-49,F

let score=55;
let grade;
if (score>=90 && score<=100){
    grade="A";
}else if (score>= 70 && score<=89){
    grade="B";
}else if (score>=60 && score<=69){
    grade="C";

}else if (score>= 50 && score<=59){
    grade ="D"
}else if (score>=0 && score<=49){
    grade="F"
}
console.log("according to your scores, your grade was:",grade)





