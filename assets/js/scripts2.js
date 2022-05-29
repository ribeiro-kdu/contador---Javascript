var currentNumberWrapper = document.getElementById('currentNumber');
var current = 0;
var up = document.getElementById("up");
var down = document.getElementById("down");

// Chama o comando a partir de um EventListener ao invés de chamá-lo na tag button do HTML
up.addEventListener("click", increment);
down.addEventListener("click", decrement);

function increment() {
    /* Verifica se o contador está em um número menor
    ou igual a 9, não executando o increment caso contrário
    e mantendo o contador em um número menor ou igual a 10 */
    if (current <=9) {
    current = current+1;
    currentNumberWrapper.innerHTML = current;
    }
}

function decrement() {
    /* Verifica se o contador está em um número maior que zero,
    não executando o decrement caso contrário */
    if (current > 0) {
    current = current-1;
    currentNumberWrapper.innerHTML = current;
    }
}