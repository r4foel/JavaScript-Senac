function tabuada(){

var num = parseInt(document.getElementById("num").value);
// traz o valor digitado no input "num" para a variavel

var resposta = document.getElementById('resposta'); //Traz a div chamada resposta
var tabuada = '';

for(var count=1; count<=10 ;  count++) //laço de 1 a 10
tabuada += num + " x " + count + " = " + num*count + '<br>'; // monta a expressão a ser apresentada ex: 5 x 2 = 10
resposta.innerHTML = tabuada; // insere no div chamado resposta o resultado da operação
}