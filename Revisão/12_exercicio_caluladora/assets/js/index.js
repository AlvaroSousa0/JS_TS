function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            this.cliqueBotao();

        },

        cliqueBotao() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnDisplay(el.innerText)
                }
            })
        },
  
        btnDisplay(valor) {
            this.display.value += valor
        },
  
    }
};

const calculadora = criaCalculadora();
calculadora.inicia()