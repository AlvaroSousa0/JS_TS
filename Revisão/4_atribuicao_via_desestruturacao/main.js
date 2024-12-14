const pessoas = ['jose', 'pedro', 'joao', 
    ['paulo', 'davi',
        ['paulo', 
            ['murilo']
        ], 'júlio'],
         'lucas', 'luiz', 'otavio', 'gustavo']

const [jose, pedro, joao, [,davi, [paulo, [murilo]]]] = pessoas
console.log(jose, pedro, joao, davi, paulo, murilo)




const pessoa = {
    nome: 'José',
    sobrenome: 'Oliveira',
    idade: 23,
    endereco: {
        numero:'22',
        rua: 'casa da desgraca',
        bairro: 'passa nada',
        estado: 'RJ'
    }
}

const {nome, endereco: {rua, bairro}} = pessoa
console.log(nome, rua, bairro)