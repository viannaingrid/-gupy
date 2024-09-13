function calcularSoma(indice) {
    let soma = 0;
    for (let k = 1; k <= indice; k++) {
      soma += k;
    }
    return soma;
  }
  
  const resultado = calcularSoma(13);
  console.log(resultado); // Imprime 91