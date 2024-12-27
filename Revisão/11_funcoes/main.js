// const nome = 'Zé de Nega';
// const idade = 25;


// (function (nome, idade) {
//     console.log(nome, idade);
//     return 0;
// }
// )(nome, idade

function geraPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' '); 
        },
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}


const p1 = geraPessoa('José', 'Gustavo');
p1.nomeCompleto = 'João Paulo o Bosta'
console.log(p1.nomeCompleto);