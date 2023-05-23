/*
<17 - Muito abaixo do peso
17-18.49 - Abaixo do peso
18.5-24.99 - Peso normal
25 - 29.99 - Acima do peso
*/

//IMC = peso/(altura*altura)

function calcular(event){
    event.preventDefault()
    var peso=document.getElementById('ipeso').value
    var altura=document.getElementById('ialtura').value
    var IMC=peso/(altura*altura)
    var resposta = document.getElementById('res')

    if(IMC<17){
        resposta.innerHTML=`<br> O seu IMC é de ${IMC.toFixed(2)} <br> Você se encontra muito abaixo do peso!`
    }else if(IMC>=17 && IMC<=18.49){
        resposta.innerHTML=`<br> O seu IMC é de ${IMC.toFixed(2)} <br> Você se encontra abaixo do peso!`
    }else if(IMC>=18.5 && IMC<=24.99){
        resposta.innerHTML=`<br> O seu IMC é de ${IMC.toFixed(2)} <br> Você se encontra no peso considerado normal!`
    }else{
        resposta.innerHTML=`<br> O seu IMC é de ${IMC.toFixed(2)} <br> Você se encontra acima do peso!`
    }   

    document.getElementById('ipeso').value=''
    document.getElementById('ialtura').value=''
}