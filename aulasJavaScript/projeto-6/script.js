
// FIND
let listagem = [5, 3, "Jose", 2, "Matheus", "Jose"]

let busca = listagem.find((item)=>{
  return item === "Jose";
})

console.log(busca);


// FILTER

let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador", "Jose"];

let resultado = palavras.filter((item)=>{
  return item.length >= 5;
})

console.log(resultado);