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

document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Numbers and operators
    if (
        "0123456789+-*/.".includes(key)
    ) {
        WhatToDisplay(key);
    }

    if (key === "Enter") {
        Calculate()
    }

    if(key === "Backspace") {
        display.value = display.value.slice(0 , -1)
    }
    
    if(key === "Escape") {
        ClearDisplay()
    }})