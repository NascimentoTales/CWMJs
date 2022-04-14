let notas = ['1.5','7.5','4.5','8.5','3.5', "Banana"];

let notasBaixas = []

for (const key in notas) {
    if (notas[key] < 6) {
        notasBaixas.push(notas[key]);
    }
}

// let notasAltas = notas.filter( nota => nota > 6)

// let notasAltas = notas.filter( function (nota) {
//     return nota > 4
// }) 

// console.log(notasAltas);
// console.log(notasBaixas);

// for (const i in notas) {
//     if (notas[i] > 4) {
//         console.log(notas[i]);
//     }
// }

// arrayNotas.forEach(nota => {
    
//     if (nota > 5) {
//         receber.push(criarPar(nota));
//     }
// });

// function criarPar(nota) {
//     return  [{ unidade1: nota
//             },
//             {unidade1: nota
//             }]
// }
// console.log(receber);

// em notas, esta incluso o valor ... True or False

console.log(notas.includes("Banana"));
console.log(notas.includes("7.5"));
console.log(notasBaixas.join('-'));

// Remove o ultimo elemento
console.log(notasBaixas.pop());

// Remove o primeiro elemento
console.log(notasBaixas.shift());

console.log(notasBaixas);

