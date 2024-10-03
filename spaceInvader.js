"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawSpaceInvador();

function drawSpaceInvador() {
   context.fillStyle = "black";
   context.beginPath();
   context.rect(25,10, 300, 300);
   context.fill();

   
   context.fillStyle = "#39FF14";
   context.beginPath();
   context.rect(50,150, 50, 50);
   context.rect(150,150, 50, 50);
   context.rect(250,150, 50, 50);
   context.rect(200,100, 50, 50);
   context.rect(100,100, 50, 50);
   context.rect(100,50, 150, 50);
   context.fill();


}
