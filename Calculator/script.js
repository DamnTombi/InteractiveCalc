const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function clearLast() {
    display.value = display.value.slice(0, -1);
}

function calculatePercent() {
    if (display.value) {
        display.value = (parseFloat(display.value) / 100).toString();
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
