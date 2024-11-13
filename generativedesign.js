"use strict";

/** @type {CanvasRenderingContext2D} */


let context;
setup();

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
context.fillRect(595,130,30,30);
context.fillRect(625,100,30,30);
context.fillRect(655,130,30,30);
context.fillRect(685,160,30,30);
context.fillRect(565,160,30,30);
context.fillRect(715,190,30,30);
context.fillRect(535,190,30,30);
context.fillRect(745,220,30,30);
context.fillRect(505,220,30,30);
context.fillRect(715,250,30,30);
context.fillRect(565,280,30,30);
context.fillRect(685,280,30,30);
context.fillRect(625,280,30,30);
context.fillRect(720,110,30,30);
context.fillRect(595,310,30,30);
context.fillRect(535,250,30,30);
context.fillRect(655,310,30,30);
context.fillRect(535,110,30,30);
   }
