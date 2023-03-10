function getcalculator() {
    return {
        display: document.querySelector('.display'),

        // Método 
        inicia() {
            this.clickbottons();
            this.pressEnter();
        },

        delOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay() {
            this.display.value = ' '
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        pressEnter() {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clickbottons() {
            // this -> Calculadora 
            document.addEventListener('click', e => {
                const elemento = e.target;

                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }

                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (elemento.classList.contains('btn-del')) {
                    this.delOne();
                }

                if (elemento.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculator = getcalculator();
calculator.inicia();