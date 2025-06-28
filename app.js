
// let - Armazena dados
// alert ele alerta uma mensgame no navegador
//console.log motra oque esta sendo executado no codigo no console do navegador
//prompet aparece um icone para digitar informação no navegador
// O if siginifica "Se" então se a informação for verdadeira retorne tão condição 
// else "Caso contrario" caso contrario a informação não for verdadeira retorne tão condição
//  While enquandto não for verdadeira


alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 300;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let tentativas = 1;
let chute;



while (chute != numeroSecreto) {
   chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
   if (numeroSecreto == chute){
        break;
        } else if(chute > numeroSecreto){
            alert(`O número é menor que o ${chute}`);
        } else {
            alert(`O número é maior que o ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas ++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Isso ai ! você acertou o numero secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1 ){
//     alert(`Isso ai ! você acertou o numero secreto é ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai ! você acertou o numero secreto é ${numeroSecreto} com ${tentativas} tentativa.`);
// }

