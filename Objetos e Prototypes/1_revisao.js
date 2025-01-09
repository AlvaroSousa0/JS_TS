const pessoa = new Object();

pessoa.nome = 'Álvaro';
pessoa.sobrenome = 'Oliveira';
pessoa.idade = 1;
pessoa.getDataNascimento = () => {
    const anoAtual = new Date();
    console.log(anoAtual.getFullYear());
    console.log(this.idade);
    return anoAtual.getFullYear() - this.idade;
};

// console.log(pessoa.getDataNascimento());]
pessoa.getDataNascimento()