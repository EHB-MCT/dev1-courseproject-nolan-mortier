"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x = [];
let y = [];
let colors = []; 
let sizes = [];

const mouse = {
    x: 0,
    y: 0,
    radius: 30, 
};

let total = 500;

document.onmousemove = onMouseMove;

setup();
update();

function setup() {
    context.lineCap = "round";
    context.lineWidth = 2;

    for (let i = 0; i < total; i++) {
        x[i] = Utils.randomNumber(1, width - 2);
        y[i] = Utils.randomNumber(1, height - 2);

        colors[i] = Utils.hsl(
            Utils.randomNumber(0, 360),
            Utils.randomNumber(50, 80),
            Utils.randomNumber(30, 60)
        );
        sizes[i] = 25; 
    }
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < total; i++) {
        let distance = Utils.calculateDistance(x[i], y[i], mouse.x, mouse.y);

        if (distance < mouse.radius) {
            
            colors[i] = Utils.hsl(
                Utils.randomNumber(0, 360),
                Utils.randomNumber(50, 80),
                Utils.randomNumber(40, 70)
            );
            sizes[i] = 100; 
        } else {
            sizes[i] = Math.max(25, sizes[i] - 1); 
        }

        
        context.fillStyle = colors[i];
        context.fillRect(
            x[i] - sizes[i] / 2,
            y[i] - sizes[i] / 2,
            sizes[i],
            sizes[i]
        );
    }

   
    context.fillStyle = "red";
    context.beginPath();
    context.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
    context.fill();

    requestAnimationFrame(update);
}

/**
 * 
 * @param {MouseEvent} e 
 */
function onMouseMove(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}