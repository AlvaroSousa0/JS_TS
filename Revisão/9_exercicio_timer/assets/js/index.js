const timer = document.querySelector('.timer');
let counter;
let segundos = 0;



function criaRelogio(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
 function iniciaRelogio() {
    counter = setInterval(function() {
        segundos++;
        timer.innerHTML = criaRelogio(segundos);
    }, 1000)
 }

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
        clearInterval(counter);
        timer.innerHTML = '00:00:00';
        timer.classList.remove('pausado');
        segundos = 0;
    };

    if (el.classList.contains('iniciar')) {
        timer.classList.remove('pausado');
        clearInterval(counter);
        iniciaRelogio();
    };

    if (el.classList.contains('pausar')) {
        clearInterval(counter);
        timer.classList.add('pausado');
    };
})

