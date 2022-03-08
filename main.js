// variavel vazia.
var valorCapturado = "";

// funcao que ativa quando apertar o botão.
function pegar() {
  // variavel que recebe o que foi digitado no campo de texto
  valorCapturado = document.getElementById("valor").value;
  // transformando o valor digitado que veio como uma string em um numero float
  parseFloat(valorCapturado);

  // valor digitado pelo usuario em real x o valor 3.44 que é o valor em dogecoin
  valorBitcoin = valorCapturado * 0.0000051;

  valorDolar = valorCapturado * 5;

  // pegando o resultado da conta de cima e mando pro html e monstrando na tela o resultado
  document.getElementById("bitcoin").innerHTML =
    "O valor convertido para Bitcoin é: " + valorBitcoin.toFixed(6);

  document.getElementById("dolar").innerHTML =
    "O valor convertido para Dolar é: " + valorDolar;
}
