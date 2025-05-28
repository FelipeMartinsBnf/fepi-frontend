const display = document.querySelector('input[type="tel"]')
const deleteIcon = document.querySelector('span[class="icon"]')
const teclas = document.querySelectorAll('input[type="button"].btn-teclado')
const teclasOperacao = document.querySelectorAll('input[type=button].btn-operador')

let operador1 = 0
let operatorType = ""

teclas.forEach((e) => {
    e.addEventListener("click", () => {
        display.value += e.value
    })
})

teclasOperacao.forEach((e) => {
    if (e.value === "=") {
        e.addEventListener("click", () => {
            const operador2 = parseInt(display.value)

            switch (operatorType) {
                case "+":
                    display.value = operador1 + operador2
                    break
                case "–":
                    display.value = operador1 - operador2
                    break
                case "×":
                    display.value = operador1 * operador2
                    break
                case "÷":
                    display.value = operador1 / operador2
                    break
                default:
                    display.value = "Erro"
            }

            operador1 = 0
            operatorType = ""
        })
    } else {
        e.addEventListener("click", () => {
            operador1 = parseInt(display.value)
            display.value = ""
            operatorType = e.value
        })
    }
})

deleteIcon.addEventListener("click", () => {
    display.value = ""
    operador1 = 0
    operatorType = ""
})
