let boxes =document.querySelectorAll(".box");
let resetBtn =document.querySelector("#reset-btn");


let turno=true;//playerX,playero

const winPatterns=[
    [0,1,2], 
    [0,3,6],
    [0,4,7],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turno){ //playero
            box.innerText="O";
            turno=false;
        }else{  //playerX
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const checkWinner=() =>{
    
}