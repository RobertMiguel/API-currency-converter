const urlED = 'https://economia.awesomeapi.com.br/last/'
const moedaED = 'EUR-USD'
const valorED = document.getElementById('valorED')
const saidaED = document.querySelector('h2#saidaED')
const btnLimparED = document.getElementById('btnLimparED')
const btnConversorED = document.getElementById('btnConversorED')

function conversorED() {
    fetch(urlED+moedaED)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const dolar = data.EURUSD
            let conversao = (dolar.high * valorED.value)
            let moedaConvertida = conversao.toLocaleString('de-DE', {style : 'currency', currency : 'EUR'})
            saidaED.innerHTML = `${moedaConvertida}`
        })
}

function btnFalseED() {
    if((valorED.value == 0) || (valorED.value == '') || (valorED.value == null)){
        btnConversorED.style.cursor = 'not-allowed'
        alert("Digite um valor que zero")
    }
}

function btnTrueED() {
    if(valorED.value > 0){
        btnConversorED.removeAttribute('disabled')
        btnConversorED.style.cursor = 'pointer'
    }
    else{
        alert("Botão não ativo")
    }
}


btnLimparED.addEventListener('click',function() {
    valorED.value = ''
})
