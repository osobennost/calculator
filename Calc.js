let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operator');
let decimal = document.getElementById('decimal');
let resultBtn = document.getElementById('result');
let reset = document.getElementById('resetButton');
let howWorkBtn = document.getElementById('howWorkBtn');
let display = document.getElementById('display');
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';

const numberPress = (symbol) => {
    if (MemoryNewNumber) {
        display.value = symbol;
        MemoryNewNumber = false;
    } else {
        if (display.value === '0') {
            display.value = symbol;
        } else {
            display.value += symbol;
        };
    };
};

const operation = (op) => {
    let localOperationMemory = display.value;

    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === 'x') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        };
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    };
};

const decimalAdd = () => {
    let localDecimalMemory = display.value;

    if (MemoryNewNumber) {
        localDecimalMemory = '0.';
        MemoryNewNumber =false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        }
    };
    display.value = localDecimalMemory;
};

const clear = () => {
    display.value = 0;
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
};

for(let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    }
    );
};

for(let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
        operation(e.target.textContent);
    }
    );
};

decimal.addEventListener('click', decimalAdd);

resultBtn.addEventListener('click', result);

reset.addEventListener('click', clear);










