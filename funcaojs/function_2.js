// Construir um programa no qual o usuário deverá digitar dois números 
// e o programa escreverá, na tela, qual dos dois números é o maior 
// (utilizar o comando função).

let numero1 = parseInt(prompt("Digite um número: "));
let numero2 = parseInt(prompt("Digite outro número: "));

function maiorNumero(n1,n2) {
    if(numero1 > numero2) {
        document.write(numero1)
    } else if (numero2 > numero1) {
        document.write(numero2)
    }  else {
        document.write("São iguais")
    }
}

maiorNumero(numero1,numero2)
