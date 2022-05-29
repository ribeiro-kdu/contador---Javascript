let currentNumber = document.getElementById('currentNumber')

// operation é a função que realmente faz as contas, recebe o typeButton como argumento
// isso evita ficar repetindo código, assim evitar ter uma função para incrementar
// outra pra decrementar etc.
// Invés de usar um if para fazer a condicional se o botão é 'add' ou 'sub', foi feito
// o que é chamado de ternário, se o botão é do tipo  'add' então startValue++
// caso não seja faça startValue--
function operation(typeButton) {
  startValue = currentNumber.innerText
  typeButton === 'add' ? startValue++ : startValue--
  currentNumber.innerText = startValue
}

// a setInterval é um função do javascript que executa a função interna dela a uma
// determinada quantidade de tempo (aqui está colocado para 100ms)
// a função interna está como função anonima, poderia ser uma função com nome ou uma
// arrow funcion 
// Essa função anonima chama outra função a "operation", a ideia de chamar operation aqui
// é evitar ficar repetindo código, já que a operation também será chamada pela função
// clicked.
function action(typeButton) {
  interval = setInterval(function () {
    operation(typeButton)
  }, 100)
}

// para (interrompe) a contagem "matando" o setInteval
// isso aconteceu qual o botão do mouse é "desclicado"
function stop() {
  clearInterval(interval)
}

// existe duas execuções, uma quando o botão do mouse é pressionado e seguro e outra
// quando o botão do mouse é somente clicado, essa ultima é executado com a função abaixo
function clicked(typeButton) {
  operation(typeButton)
}

