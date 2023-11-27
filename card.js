
function render(){

const board = document.getElementById("board"); //boards duudaj bn 
const middle = document.getElementById("middle");
const boardInProgress = document.getElementById("board-in-progress");
const boardStuck = document.getElementById("board-stuck");
const boardDone = document.getElementById("board-done");
const card = document.createElement("div"); //card create hiij bga 


//boardiin huuuhed bolgsnoor html deer nemgdej hargdann 

boardInProgress.appendChild(card);
boardStuck.appendChild(card);
boardDone.appendChild(card);
const correct = document.getElementById("fa-circle-check"); //correct temdeg oruulahin tuld class neej bn 

card.appendChild(correct); //cardiinha hvvhed bolgoj bn


const details = document.createElement("div"); //details dund zuils hiih div

card.appendChild(details); //huuhed n bolgson odoo  dotroh elmentvvdiig 


const h4 = document.createElement("h4");
const p = document.createElement("p");
const levelBtn = document.createElement("button");
h4.innerText = "Todo";
p.innerText = "This is a todo card";
const arr = ['low', 'medium', 'high'];
const low = document.getElementById("low")
const medium = document.getElementById("medium")
const high = document.getElementById("high")
levelBtn.innerText = arr[0];

details.appendChild(h4);
details.appendChild(p);
details.appendChild(levelBtn);
const actions = document.createElement("div");

const xmark = document.getElementById("fa-circle-xmark");
const pen = document.getElementById("fa-pen-to-square");
actions.appendChild(xmark);
actions.appendChild(pen);
middle.appendChild(card); 
xmark.style.fontSize = "1.25em";
pen.style.fontSize = "1.25em";
card.appendChild(actions);
actions.style.display = "flex";
actions.style.flexDirection = "column";
actions.style.gap = "8px";

levelBtn.style.width = "fit-content"
levelBtn.style.padding = "4px 8px"

details.style.flex = "1";
details.style.flexBasis = "0";
details.style.display = "flex";
details.style.flexDirection = "column";
details.style.gap = "12px";

correct.style.fontSize = "1.25em";

card.style.padding = "8px";
card.style.borderRadius = "4px";
card.style.backgroundColor = "white";
card.style.cursor = "pointer";
card.style.display = "flex";
card.style.gap = "12px";

}
// render();


// button.addEventListener('click',function(){
//    const colorIndex = parseInt(Math.random()*colors.length);
//    box2.style.backgroundColor = colors[colorIndex]
//})

