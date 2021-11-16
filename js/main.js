document.addEventListener("DOMContentLoaded", function(){
    let input = document.getElementById('input');
    input.setAttribute("value", "1");
});

let addButton = document.getElementById('add');
let subtractButton = document.getElementById('subtract');
let output = document.getElementById('output');
let input = document.getElementById('input');

function add () {
    let outputValue = parseInt(output.textContent);
    let inputValue = parseInt(input.value);
    outputValue = outputValue + inputValue;
    output.textContent = outputValue;
    if (outputValue < 0) {
        output.style.color = 'red';
    } else {
        output.style.color = 'black';
    }
    
}

function subtract () {
    let outputValue = parseInt(output.textContent);
    let inputValue = parseInt(input.value);
    outputValue = outputValue - inputValue;
    output.textContent = outputValue;
    if (outputValue < 0) {
        output.style.color = 'red';
    } else {
        output.style.color = 'black';
    }
}

function interaction () {
    addButton.addEventListener('click', function() {
        add();
    })
    subtractButton.addEventListener('click', function() {
        subtract();
    })
    addButton.addEventListener('mouseover', function() {
        addButton.style.color = "grey";
        addButton.style.background = "white";
    })
    addButton.addEventListener('mouseleave', function() {
        addButton.style.color = "white";
        addButton.style.background = "grey";
    })
    subtractButton.addEventListener('mouseover', function() {
        subtractButton.style.color = "grey";
        subtractButton.style.color = "white";
    })
    subtractButton.addEventListener('mouseleave', function() {
        subtractButton.style.color = "white";
        subtractButton.style.color = "grey";
    })
}

interaction();
