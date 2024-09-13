const faturamento = {
    "faturamento_diario": [1200.5, 1000.0, 0, 1400.5, 0, 2000.75, 0, 1800.0, 1500.25, 0]
};

const valoresValidos = faturamento.faturamento_diario.filter(valor => valor > 0);

// Menor e maior valor de faturamento
const menorValor = Math.min(...valoresValidos);
const maiorValor = Math.max(...valoresValidos);

// Média mensal
const somaFaturamento = valoresValidos.reduce((acc, curr) => acc + curr, 0);
const mediaMensal = somaFaturamento / valoresValidos.length;

// Dias com faturamento acima da média
const diasAcimaMedia = valoresValidos.filter(valor => valor > mediaMensal).length;

console.log(`Menor valor de faturamento: R$${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maiorValor.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
