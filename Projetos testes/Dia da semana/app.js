//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".


//O jeito que fiz

// let diaDaSemana = 'Sabado';
// let diaDaSemanaS = 'Domingo';

// let diaDigitado = prompt('Qual o dia da semana?');

// if(diaDaSemana==diaDigitado){
//     alert('Bom fim de semana!')
// }
// if(diaDaSemanaS==diaDigitado){
//     alert('Bom fim de semana!')
// }else {
//     alert('Boa Semana')
// };


//O jeito que a alura fez

let diaDigitado = prompt('Qual o dia da semana')

if(diaDigitado == 'Sabado'){
    alert('Bom fim de semana!')
}else if (diaDigitado == 'Domingo'){
    alert('Bom fim de semana!')
} else {
    alert('Boa semana!')
}
