const data = new Date();
const diaSemana = data.getDay();
const container = document.querySelector('.container');

function getDiaSemana(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    return diasSemana[diaSemana]
};

function mesTexto() {
    const mes = data.getMonth();
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[mes];
}


function formataData(data) {
    const dia = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = `${data.getHours()}:${data.getMinutes()}`
    return `${dia} de ${mesTexto(mes)} de ${ano}, ${hora}`
}

const msg = `${getDiaSemana(diaSemana)}, ${formataData(data)}`


function mostraData(msg) {
    container.innerHTML = ''
    const p = document.createElement('p')
    p.innerHTML = msg
    container.appendChild(p)
}

mostraData(msg)
