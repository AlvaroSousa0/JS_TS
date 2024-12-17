const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const container = document.querySelector('.container');


const estiloBody = getComputedStyle(document.body);
const backgroundBody = estiloBody.backgroundColor;


for (let p of ps) {
    p.style.backgroundColor = backgroundBody;
    p.style.color = '#fff';
}