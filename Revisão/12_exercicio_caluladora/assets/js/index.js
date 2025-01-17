// function criaCalculadora() {
//     return {
//         display: document.querySelector('.display'),
//         inicia() {
//             this.cliqueBotao();
//             this.btnBackSpace();
//             this.btnEnter();
//             this.display.focus();
//         },

//         delUm() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         clearDisplay() {
//             this.display.value = ''
//         },

//         realizaConta() {
//             let conta = this.display.value;
//             try{
//                 conta = eval(conta);
            
//                 this.display.value = String(conta);
//             }catch (e){
//                 alert('Conta Inválida');
//             };
//         },

//         cliqueBotao() {
//             document.addEventListener('click', e => {
//                 const el = e.target;

//                 if (el.classList.contains('btn-num')) {
//                     this.btnDisplay(el.innerText)
//                 }
//                 if (el.classList.contains('btn-del')) {
//                     this.delUm()
//                 }
//                 if (el.classList.contains('btn-clear')) {
//                     this.clearDisplay()
//                 }
//                 if (el.classList.contains('btn-eq')) {
//                     this.realizaConta()
//                 }
//             })
//         },
  
//         btnDisplay(valor) {
//             this.display.value += valor
//         },
        
//         btnBackSpace() {
//             this.display.addEventListener('keydown', e => {
//                 if (e.keyCode == 8) {
//                     e.preventDefault();
//                     this.delUm();
//                 }
//             })
//         },

//         btnEnter() {
//             this.display.addEventListener('keyup', e => {                 
//                 if (e.keyCode == 13) {
//                     this.realizaConta();
//                 }
//             })
//         },

//     }
// };

// const calculadora = criaCalculadora();
// calculadora.inicia()



function Calculadora() {
    const display = document.querySelector('.display');
    display.focus()

    this.incializar = () => {
        clickBtn();
        clickBackSpace();
        clickEnter();
    };

    function clickBtn() {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                btnDisplay(el.innerText)
            }
            if (el.classList.contains('btn-del')) {
                delUm()
            }
            if (el.classList.contains('btn-clear')) {
                clearDisplay()
            }
            if (el.classList.contains('btn-eq')) {
                realizaConta()
            }
            display.focus();
        })
    };

    function btnDisplay(valor) {
        display.value += valor
    };

    function delUm() {
        display.value = display.value.slice(0, -1);
    };

    function clearDisplay() {
        display.value = ''
    };

    function realizaConta() {
        let conta = display.value;
            try{
                conta = eval(conta);
            
                display.value = String(conta);
            }catch (e){
                alert('Conta Inválida');
            };
    };

    function clickBackSpace() {
        display.addEventListener('keydown', e => {
            if (e.keyCode == 8) {
                e.preventDefault();
                delUm();
            }
        })
    };

    function clickEnter() {
        display.addEventListener('keyup', e => {                 
            if (e.keyCode == 13) {
                realizaConta();
            }
        })
    }
};

const calc = new Calculadora();
calc.incializar();
