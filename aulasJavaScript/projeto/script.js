var area = document.getElementById('area')

function entrar(){
  var nome = prompt("Digite seu nome");
  
  if(nome === '' || nome === null){
    alert("Ops algo deu errado")
    area.innerHTML = "Clique no botao para acessar..."
  }else{
    area.innerHTML = "Bem vindo " + nome + " ";

    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da conta";
    botaoSair.onclick = sair;

    area.appendChild(botaoSair);

  }
  
}


function sair(){
  alert("Até mais!");
  area.innerHTML = "Você saiu!"
}


