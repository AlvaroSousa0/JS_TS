form = document.querySelector('.form');
console.log()

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    if (!peso) {
        setResultado('Peso inválido', false)
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false)
        return;
    }
    const imc = getImc(peso, altura);
    const nivelimc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelimc})`

    setResultado(msg, true)
});


function getImc(peso, altura) {
    const imc = peso / altura **2; 
    return imc.toFixed(2)
};

function getNivelImc(imc) {
    const niveisImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];
    if (imc >= 39.9) return niveisImc[5];   
    if (imc >= 34.9) return niveisImc[4];
    if (imc >= 29.9) return niveisImc[3];
    if (imc >= 24.0) return niveisImc[2];
    if (imc >= 18.5) return niveisImc[1];
    if (imc < 18.5) return niveisImc[0];
};

function criaP(){
    const p =document.createElement('p');
    return p
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado-sucesso')
    } else {
        p.classList.add('paragrafo-resultado-erro')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};


