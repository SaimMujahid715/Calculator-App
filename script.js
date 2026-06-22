const display = document.querySelector("#display");

let calculated = false;

function WhatToDisplay(input) {
    if (calculated) {
        display.value = "";
        calculated = false;
    }

    display.value += input;
}

function ClearDisplay() {
    display.value = "";
    calculated = false;
}

function Calculate() {
    try {
        display.value = eval(display.value);
        calculated = true;
    } catch (error) {
        display.value = "Error..";
        calculated = true;
    }
}