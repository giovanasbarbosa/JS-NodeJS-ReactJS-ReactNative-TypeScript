
// MAP = PERCORRER TODO UM ARRAY

// let lista = ["MATHEUS", "JOSE", "MARIA", "LUCAS"];

// lista.map((item, index) => {
//   console.log(`PASSANDO: ${item} - Esta na posicao ${index} `)
// })


// Reduce = O reduce buscsa reduzir um array.

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original)=>{
  console.log(`${acumulador} - total ate o momento`);
  console.log(`${numero} - valor atual`);
  // console.log(`${indice} - indice atual`);
  // console.log(`${original} - array original`);
  console.log("========================")

  return acumulador += numero;

})


console.log("TOTAL DO REDUCE: " + total);