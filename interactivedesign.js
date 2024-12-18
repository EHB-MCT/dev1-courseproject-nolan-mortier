"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x = [];
let y = [];
let colors = []; 
let sizes = [];

let mouseY = 0;
let mouseX = 0;

let total = 500;
let hoverDistance = 30; 

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
        let distance = Utils.calculateDistance(x[i], y[i], mouseX, mouseY);

       
        if (distance < hoverDistance) {
            colors[i] = Utils.hsl(
                Utils.randomNumber(0, 360),
                Utils.randomNumber(50, 80),
                Utils.randomNumber(40, 70)
            );
            sizes[i] = 100; 
        } else {
            sizes[i] = Math.max(25, sizes[i] - 1); 
        }

        // Stel de kleur en grootte in
        context.fillStyle = colors[i];
        context.fillRect(
            x[i] - sizes[i] / 2,
            y[i] - sizes[i] / 2,
            sizes[i],
            sizes[i]
        );
    }

    requestAnimationFrame(update);
}

/**
 * 
 * @param {MouseEvent} e 
 */
function onMouseMove(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
}