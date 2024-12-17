const elements = [
    {tag: 'p', texto: 'Texto 1'},
    {tag: 'div', texto: 'Texto 2'},
    {tag: 'section', texto: 'Texto 3'},
    {tag: 'footer', texto: 'texto 4'}
]



const container = document.querySelector('.container');
const div = document.createElement('div');

for (i = 0; i < elements.length; i++){
    let { tag, texto } = elements[i];
    let p = document.createElement(tag);
    let textMsg = document.createTextNode(texto);
    p.appendChild(textMsg);
    div.appendChild(p);
    container.appendChild(div);
}
