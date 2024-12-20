// try {
//     console.log('Olaaa mundo');
//     console.log(a);
//     console.log('nao vai aparecer');
// } catch (e) {
//     console.log('deu um erro');
//     console.log(e);
// } finally {
//     console.log('finally saindo dessa porra')
// }

// try {
//     console.log('aaa')
//     throw new ReferenceError('saporra nao existe')
// } catch (e) {
//     console.log('catch')
// } 



function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Era esperada instância de Date');
    }

    if (!data) {
        data = new Date()
    }


    return data.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

const timer = setInterval(function() {
    console.log(retornaHora()) 
}, 1000)

setTimeout(function() {
    clearInterval(timer);
    console.log('CABO O TEMPO');
}, 10000)