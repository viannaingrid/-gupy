function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }
  
  const stringOriginal = 'Hello, World!';
  const stringInvertida = inverterString(stringOriginal);
  console.log(stringInvertida); // Imprime '!dlroW ,olleH'