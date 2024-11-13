"use strict";

/** @type {CanvasRenderingContext2D} */

let context;
setup();


function setup() {
let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
 context = canvas.getContext("2d");
drawLine();
}

   function drawLine() {
    drawColor(500,20);
    drawColor(800,40);
    drawColor(500,30);
    drawColor(100,25);
    drawColor(700,45);

   }



   function drawColor(position,size){
    let red = Math.random()* 255;
    let green = Math.random()* 255;
    let blue = Math.random()* 255;

context.fillStyle = "rgb(" + red + "," + green + "," + blue +")";
context.fillRect(position,position,size,size);
   }