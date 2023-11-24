const board = document.getElementById("board"); //boards duudaj bn 

const boardInProgress = document.getElementById("board-in-progress");
const boardStuck = document.getElementById("board-stuck");
const boardDone = document.getElementById("board-done");
const card = document.createElement("div"); //card create hiij bga 

card.style.padding = "8px";
card.style.borderRadius = "4px";
card.style.backgroundColor = "white";
card.style.cursor = "pointer";
card.style.display = "flex";
card.style.gap = "12px";
console.log(board);
board.appendChild(card); //boardiin huuuhed bolgsnoor html deer nemgdej hargdann 

boardInProgress.appendChild(card);
boardStuck.appendChild(card);
boardDone.appendChild(card);
const correct = document.getElementById("fa-circle-check"); //correct temdeg oruulahin tuld class neej bn 

card.appendChild(correct); //cardiinha hvvhed bolgoj bn

correct.style.fontSize = "1.25em";
const details = document.createElement("div"); //details dund zuils hiih div

card.appendChild(details); //huuhed n bolgson odoo  dotroh elmentvvdiig 

details.style.flex = "1";
details.style.flexBasis = "0";
details.style.display = "flex";
details.style.flexDirection = "column";
details.style.gap = "12px";
const h4 = document.createElement("h4");
const p = document.createElement("p");
const levelBtn = document.createElement("button");
h4.innerText = "Todo";
p.innerText = "This is a todo card";
levelBtn.innerText = ['low', 'medium', 'high'];
details.appendChild(h4);
details.appendChild(p);
details.appendChild(levelBtn);
const actions = document.createElement("div");
card.appendChild(actions);
actions.style.display = "flex";
actions.style.flexDirection = "column";
actions.style.gap = "8px";
const xmark = document.getElementById("fa-circle-xmark");
const pen = document.getElementById("fa-pen-to-square");
xmark.style.fontSize = "1.25em";
pen.style.fontSize = "1.25em";
actions.appendChild(xmark);
actions.appendChild(pen);




// button.addEventListener('click',function(){
//    const colorIndex = parseInt(Math.random()*colors.length);
//    box2.style.backgroundColor = colors[colorIndex]
//})
