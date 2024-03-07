function fibonacci(numero) {
    const fibonacciSequence = [0, 1];
  
    for (let i = 2; i <= numero; i++) {
      const proximoNumero = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(proximoNumero);
    }
  
    const numeroPertence = fibonacciSequence.includes(numero);
  
    const mensagem = numeroPertence
      ? `O número ${numero} pertence à sequência de Fibonacci!`
      : `O número ${numero} não pertence à sequência de Fibonacci.`;

    return mensagem;
  }
  
  const numeroInformado = 13;
  const resultado = fibonacci(numeroInformado);
  console.log(resultado);