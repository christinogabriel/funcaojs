// Criar uma página na qual a saída dela é a tabuada de multiplicação de 
// 5 (utilizar o comando FOR). Exemplo de saída: 5x1 = 5 5x2 = 10 5x3 = 15 
// 5x4 = 20 5x5 = 25 5x6 = 30 5x7 = 35 5x8 = 40 5x9 = 45 5x10 = 50
let mult = 1
for(let numero = 5; numero <=50; numero+=5) {
    
    console.log("5 x " + (mult++) + " = " + numero);
    
} 

// for(let n = 0; n<11; n++){
//     console.log("5 x" + n + "=" + (5*n));
// }



// numero = numero + 1 // numero++
// numero = numero - 1 // numero--
// numero = numero + 5 // numero-=5