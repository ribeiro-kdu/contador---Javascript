var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
var timer = console.time();

function increment() {
    while (timer<10s) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if (currentNumber > 0) {
        currentNumberWrapper.style.color = 'lightgreen';
    } else if (currentNumber == 0){
        currentNumberWrapper.style.color = 'white';
    }
}
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'yellow';
    } else if (currentNumber == 0){
        currentNumberWrapper.style.color = 'white';
    }
}