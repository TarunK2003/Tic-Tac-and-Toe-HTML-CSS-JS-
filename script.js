console.log("WELCOME TO TICTACTOE");
let music = new Audio("game-play.mp3");
let audioTurn = new Audio("tap-tone.mp3");
let gameovera = new Audio("game-over.mp3");
let turn2 = "X";
let gameover = false;

//function to chnage the turn
const changeTurn = ()=>{

    return turn2 === "X"?"0": "X" 
}

//function to check win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ]
     wins.forEach(e=>{
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " wins";
                gameover = true;
                document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "320px"
            }
     })
}

//Game-logic
//music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext  = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn2;
            turn2= changeTurn();
            audioTurn.play();
            checkwin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn2;
                
            } 
        }
    })
})

//for reset button 
reset.addEventListener('click' , ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    });
    turn2 = "X";
    gameover = false;
    if(!gameover){
        document.getElementsByClassName("info")[0].innerText = "Turn for" + turn2;
        document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px";
    }
})































