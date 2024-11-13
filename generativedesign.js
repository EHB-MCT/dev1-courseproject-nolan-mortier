"use strict";

/** @type {CanvasRenderingContext2D} */


let context;
setup();
let x = 100;
let y = 100;


function setup() {
let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
 context = canvas.getContext("2d");
drawSquares();
}

   function drawSquares() {
    let red = Math.random()* 255;
    let green = Math.random()* 255;
    let blue = Math.random()* 255;
context.fillStyle = "rgb(" + red + "," + green + "," + blue +")";
context.fillRect(915,130,30,30);
context.fillRect(945,100,30,30);
context.fillRect(975,130,30,30);
context.fillRect(885,160,30,30);
context.fillRect(1005,160,30,30);
context.fillRect(855,190,30,30);
context.fillRect(1035,190,30,30);
context.fillRect(825,220,30,30);
context.fillRect(1065,220,30,30);
context.fillRect(855,250,30,30);
context.fillRect(885,280,30,30);
context.fillRect(915,310,30,30);
context.fillRect(945,280,30,30);
context.fillRect(975,310,30,30);
context.fillRect(1005,280,30,30);
context.fillRect(1035,250,30,30);
context.fillRect(850,110,30,30);
context.fillRect(1035,110,30,30);
   }
