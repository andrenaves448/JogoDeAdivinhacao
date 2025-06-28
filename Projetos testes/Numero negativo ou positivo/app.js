//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando

// O jeito que fiz

// let numero = 0;
// let numeroDigitado = prompt('Digite um número positivo ou negativo:');
// if(numeroDigitado > numero){
//     alert (`Seu numeró ${numeroDigitado} é positivo.`) 
// } else if(numeroDigitado < numero){
//     alert (`Seu numeró ${numeroDigitado} é negativo.`) 
// } else if(numeroDigitado == numero){
//     alert (`Seu numeró ${numeroDigitado} não é negativo e nem positivo é um número neutro.`) 
// };


//jeito que a alura fez:

numeroDigitado = prompt('Digite um número positivo ou negativo:')
if (numeroDigitado > 0){
    alert('Número positivo!');
}else {
    alert('Número negativo!')
}

