const display = document.querySelector('input[type="tel"]')

const deleteIcon = document.querySelector('span[class="icon"]')

const teclas = document.querySelectorAll('input[type="button"].btn-teclado')
const teclasOperacao = document.querySelectorAll('input[type=button].btn-operador')

let operador1 = 0
let operatorType = ""

teclas.forEach((e) => {
    e.addEventListener("click", (click) => {
        display.value += e.value
    } )
})

teclasOperacao.forEach((e) => {

    if(e.value == "=" ){
        e.addEventListener("click", () => {
            console.log(operatorType)
            console.log(operador1.value)
            console.log(display.value)
            switch (operatorType) {
                case "+" : display.value = operador1 + parseInt(display.value)
                case "-" : display.value = operador1 + parseInt(display.value)
                case "×" : display.value = operador1 + parseInt(display.value)
                case "÷" : display.value = operador1 + parseInt(display.value)
            }
        })
    } else {
        e.addEventListener("click", () => {
            operador1 =  parseFloat(display.value)
            display.value = ""
            operatorType = e.value 
            console.log(operatorType)
        })
    }
})

deleteIcon.addEventListener("click", () => {
    display.value = ""
    operador1 = 0
    operatorType = ""
})