console.log('Tic Tac Toe');
let music = new Audio("/ext/music.mp3");
let turnAudio = new Audio("/ext/ting.mp3");
let gameOverAudio = new Audio("/ext/gameover.mp3");

let gameOver = false;
let turn = "X";

const changeTurn = () =>{
    return turn === "X"?"O":"X";
}
// funtion to check winner
// music.play();
const checkWin = ()=>{
    let boxTexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, -12, 5, 0],
        [3, 4, 5, -12, 15, 0],
        [6, 7, 8, -12, 25, 0],
        [0, 3, 6, -22, 15, 90],
        [1, 4, 7, -12, 15, 90],
        [2, 8, 5, -2, 15, 90],
        [0, 4, 8, -12, 15, 45],
        [2, 4, 6, -12, 15, -45],
        
    ]
    wins.forEach(e =>{
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && ( boxTexts[e[0]].innerText !== '') ){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won";
            gameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="120px";  
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width ="26vw";
        }
    })
}
// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '' ){
            boxtext.innerText = turn;
            turn = changeTurn()
            turnAudio.play();
            checkWin();
            if(!gameOver){
            document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }
        }
    })
})
//  restart

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0px";  
        document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
        document.querySelector('.line').style.width ="0vw";



});