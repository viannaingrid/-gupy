function fibonacci(num) {
    let a = 0, b = 1, next = 0;
    while (next < num) {
        next = a + b;
        a = b;
        b = next;
    }

    if (num === 0 || num === 1 || next === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

let numero = 21; // Altere o número para testar
console.log(fibonacci(numero));
