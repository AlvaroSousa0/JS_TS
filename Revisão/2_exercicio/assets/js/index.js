form = document.querySelector('.form');
console.log()


function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado')
    p.innerHTML = 'qwertgh'
    resultado.appendChild(p)
    
};



form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Evento prevenido');
    setResultado("agb");
});
