// script.js
function appendToDisplay(value) {
    const display = document.getElementById('display');
    const history = document.getElementById('history');
    
    // Append value to the current display
    display.value += value;
    
    // Update history with the latest operation
    if (history.innerHTML === '0') {
        history.innerHTML = '';
    }
    history.innerHTML += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('history').innerHTML = '0';
}

function calculate() {
    const display = document.getElementById('display');
    const history = document.getElementById('history');
    
    try {
        // Evaluate the expression and display the result
        const result = eval(display.value);
        display.value = result;
        
        // Update history with the result
        history.innerHTML += ' = ' + result;
    } catch (e) {
        display.value = 'Error';
    }
}
