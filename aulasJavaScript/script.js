

// 

let pessoa = {
  nome: "Matheus",
  sobrenome: "Fraga",
  empresa: "Sujeito Programador",
  cargo: "Programador FullStack"
};

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

// let nome = "TESTE";

// const { nome:nomePessoa, cargo, empresa, sobrenome} = pessoa;

// console.log("NOME DA PESSOA " + nomePessoa);
// console.log(sobrenome);

// console.log(empresa);
// console.log(cargo);


// =================================

let nomes = ["Matheus", "Lucas", "Henrique"];

// let { 0:matheus, 2:terceiraPessoa } = nomes;

// console.log(matheus);
// console.log(terceiraPessoa);

let [primeironome, segundonome] = nomes;

console.log(primeironome);
console.log(segundonome);