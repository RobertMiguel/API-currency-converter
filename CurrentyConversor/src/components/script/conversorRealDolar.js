const urlRD = 'https://economia.awesomeapi.com.br/last/'
const moedaRD = 'BRL-USD'
const valorRD = document.getElementById('valorRD')
const saidaRD = document.querySelector('h2#saidaRD')
const btnLimparRD = document.getElementById('limparRD')
const btnConversorRD = document.getElementById('btnConversorRD')


function conversorRD() {
    fetch(urlRD+moedaRD)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const dolar = data.BRLUSD
            let conversao = (dolar.high * valorRD.value)
            let moedaConvertida = conversao.toLocaleString('en-US', {style : 'currency', currency : 'USD'})
            saidaRD.innerHTML = `${moedaConvertida}`
        })
}

function btnFalseRD() {
    if((valorRD.value == 0) || (valorRD.value == '') || (valorRD.value == null)){
        btnConversorRD.style.cursor = 'not-allowed'
        alert("Digite um valor que zero")
    }
}

function btnTrueRD() {
    if(valorRD.value > 0){
        btnConversorRD.removeAttribute('disabled')
        btnConversorRD.style.cursor = 'pointer'
    }
    else{
        alert("Botão não ativo")
    }
}


btnLimparRD.addEventListener('click',function() {
    valorRD.value = ''
})
