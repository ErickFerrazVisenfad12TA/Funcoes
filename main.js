// Exemplo 1

function mensagem() {
    alert("Seja bem-vindo(a)!")
    console.log("Seja bem-vindo(a)!")
    console.log("Você é muito legal!")

}

mensagem()
mensagem()
mensagem()
mensagem()
mensagem()
mensagem()


// Exemplo 2
 
function somar(numero1, numero2) {
    console.log(numero1 + numero2)

}

let numero1 = 20
let numero2 = 30

somar(numero1, numero2)
somar(34, 50)
somar(34, 200)

// Exemplo 3
 
function raizQuadrada(numero) {
 
    console.log(Math.sqrt(numero))

}

function potenciacao(valor1, valor2) {
    console.log(Math.pow(valor1, valor2))

}

function multiplicacao(valor1, valor2) {
      console.log(valor1 * valor2)

}


let numero1 = Number(prompt("Digite o numero 1:"))
let numero2 = Number(prompt("Digite o numero 2:"))

raizQuadrada(numero1)
potenciacao(numero1, numero2)
multiplicacao(numero2, numero1)

// exemplo 4
 
function raizQuadrada(numero) {
 
    return Math.sqrt(numero)
 
 }
 
 function potenciacao(valor1, valor2) {
     return Math.pow(valor1, valor2)
 
 }
 
 function multiplicacao(valor1, valor2) {
       return valor1 * valor2
 
 }
 
 
 let numero1 = Number(prompt("Digite o numero 1:"))
 let numero2 = Number(prompt("Digite o numero 2:"))
 
 let raiz1 = raizQuadrada(numero1)
 let raiz2 = raizQuadrada(numero2)
 
 console.log(raiz1, raiz2)