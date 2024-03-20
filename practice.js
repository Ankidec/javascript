// practice question 
// print 1 to 100 number
// for (let num=1; num<=100;num++){
//     console.log("num=",num);
// }


// print all even number from 0 to 100

// for (let num=0; num<=100; num++){
//     if(num%2===0){
//         console.log("num=",num)
//     }
// }




// print all odd number from 0 to 100
// for (let num=0; num<=100; num++){
//     if (num%2!==0){
//         console.log("num=",num)
//     }
// }


//create a game where you start with any random game number . aks the user to keep guessing the game number until the user enters correct value.

let gamenum=25;
let usernum = prompt("Guess the game number:");

while(usernum !=gamenum){
    //game
    usernum=prompt("you enteres worng number . Guess again:");

}
console.log("congratulation,you entered the right number");