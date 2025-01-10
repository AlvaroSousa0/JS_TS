function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: true
    });
}

let p1 = new Produto('Camisa', 20, 4);
delete p1.estoque
p1.estoque = 100
console.log(p1);