var numeroSecreto = parseInt(Math.random() * 11); //um igual apenas ele faz uma atribuição

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
                //o paserInt vai imprimir no console o numero no formato inteiro sem as "" dizendo que é um numeral, "" são usadas apenas em string "texto"
    var chute = parseInt(document.getElementById("valor").value); //com o value ele vai trazer apenas o valor que foi colocado dentro do input, sem ele ira trazer toda a tag do input
    console.log(chute);
              
              // dois iguais em uma função ele esta fazendo uma comparação
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Voce acertou";
    } else if (chute > 10 || chute < 0) { // duas barras || significa ou  
        elementoResultado.innerHTML = "Voce deve entrar com um numero de 0 a 10!";
    } else {
        elementoResultado.innerHTML = "Voce errou " //+ numeroSecreto;
    }
}

// math.random() - é um codico que gera um numero aleatorio, mas gera o numero aleatorio maior que zero e menor que um ex: 0.854962
// math.random() * 11 - faz com que ele gera um numero aleatorio de zero a dez, se fosse math.random() * 10 ele iria gerar ate o numero nove apenas.
// parseInt(math.random() * 11) - faz com gere o numero de zero a dez mas o parseInt entra englobando para que as casa decimais (numeros depois da virgula) nao sejam impressos na tela