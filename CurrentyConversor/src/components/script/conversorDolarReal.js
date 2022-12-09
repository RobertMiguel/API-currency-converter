const url = 'https://economia.awesomeapi.com.br/last/'
const moeda = 'USD-BRL'
const valor = document.getElementById('valor')
const saida = document.querySelector('h2#saida')
const btnLimpar = document.getElementById('limpar')
const btnConversor = document.getElementById('btnConversor')

function conversor() {
    fetch(url+moeda)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const dolar = data.USDBRL
            let conversao = (dolar.high * valor.value)
            let moedaConvertida = conversao.toLocaleString('pt-BR', {style : 'currency', currency : 'BRL'})
            saida.innerHTML = `${moedaConvertida}`
        })
}

function btnFalse() {
    if((valor.value == 0) || (valor.value == '') || (valor.value == null)){
        btnConversor.style.cursor = 'not-allowed'
        alert("Digite um valor que zero")
    }
}

function btnTrue() {
    if(valor.value > 0){
        btnConversor.removeAttribute('disabled')
        btnConversor.style.cursor = 'pointer'
    }
    else{
        alert("Botão não ativo")
    }
}


btnLimpar.addEventListener('click',function() {
    valor.value = ''
})
