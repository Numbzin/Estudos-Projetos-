const calcular = document.getElementById("calcular");

function getClassificacao(valorIMC) {
  if (valorIMC < 18.5) return "Abaixo do peso.";
  if (valorIMC < 25) return "com peso ideal. Parabéns!!";
  if (valorIMC < 30) return "levemente acima do peso.";
  if (valorIMC < 35) return "com obesidade grau I.";
  if (valorIMC < 40) return "com obesidade grau II.";
  return "com obesidade grau III. Cuidado!!";
}

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const resultado = document.getElementById("resultado");

  if (nome && altura && peso && !isNaN(altura) && !isNaN(peso)) {
    const valorIMC = (peso / (altura * altura)).toFixed(2);
    const classificacao = getClassificacao(valorIMC);

    resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
  } else {
    resultado.textContent = "Preencha todos os campos com valores válidos!";
  }
}

calcular.addEventListener("click", imc);
