"use strict";

/** @type {CanvasRenderingContext2D} */

let xPositions = [];
let yPositions = [];
let context;
setup();
update();

drawSquares(500,100);

function setup(){
    for (let i = 0; i<100; i++){
        xPositions[i]= Utils.randomNumber (0,width);
        yPositions[i]= Utils.randomNumber (0,height);
    }
}

function update(){
    context.fillStyle = "black";
    context.fillRect (0,0, width, height);
    for ( let i = 0; i < xPositions.length; i++){
    drawSquares(xPositions[i], yPositions[i], 180);
    xPositions[i] += Utils.randomNumber (-2 , 2);
    yPositions[i] += Utils.randomNumber (-2 , 2);
}
requestAnimationFrame(update);
}
function drawSquares(x,y) {
    let red = Math.random()* 255;
    let green = Math.random()* 255;
    let blue = Math.random()* 255;
context.fillStyle = "rgb(" + red + "," + green + "," + blue +")";
context.fillRect(x+95,y+30,30,30);
context.fillRect(x+125,y,30,30);
context.fillRect(x+155,y+30,30,30);
context.fillRect(x+185,y+60,30,30);
context.fillRect(x+65,y+60,30,30);
context.fillRect(x+215,y+90,30,30);
context.fillRect(x+35,y+90,30,30);
context.fillRect(x+245,y+120,30,30);
context.fillRect(x+5,y+120,30,30);
context.fillRect(x+215,y+150,30,30);
context.fillRect(x+65,y+180,30,30);
context.fillRect(x+185,y+180,30,30);
context.fillRect(x+125,y+180,30,30);
context.fillRect(x+220,y +10,30,30);
context.fillRect(x+95,y+210,30,30);
context.fillRect(x+35,y+150,30,30);
context.fillRect(x+155,y+210,30,30);
context.fillRect(x+35,y+10,30,30);
   }


