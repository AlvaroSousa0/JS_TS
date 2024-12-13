const data = new Date('2024-11-25')
console.log(data.toString())

const diaSemana = data.getDay();
let diaSemanaTexto;

switch(diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'
        break;
    case 1:
        diaSemanaTexto = 'Segunda'
        break;
    case 2:
        diaSemanaTexto = 'Terça'
        break;
    case 3:
        diaSemanaTexto = 'Quarta'
        break;
    case 4:
        diaSemanaTexto = 'Quinta'
        break;
    case 5:
        diaSemanaTexto = 'Sexta'
        break;
    case 6: 
        diaSemanaTexto = 'Sábado'
        break;
    default:
        diaSemanaTexto = 'Dia Inválido'
}

console.log(diaSemana, diaSemanaTexto)