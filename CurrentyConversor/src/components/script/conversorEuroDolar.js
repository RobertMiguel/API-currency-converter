const urlDE = 'https://economia.awesomeapi.com.br/last/'
const moedaDE = 'USD-EUR'
const valorDE = document.getElementById('valorDE')
const saidaDE = document.querySelector('h2#saidaDE')
const btnLimparDE = document.getElementById('btnLimparDE')
const btnConversorDE = document.getElementById('btnConversorDE')

function conversorDE() {
    fetch(urlDE+moedaDE)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const dolar = data.USDEUR
            let conversao = (dolar.high * valorDE.value)
            let moedaConvertida = conversao.toLocaleString('en-US', {style : 'currency', currency : 'USD'})
            saidaDE.innerHTML = `${moedaConvertida}`
        })
}

function btnFalseDE() {
    if((valorDE.value == 0) || (valorDE.value == '') || (valorDE.value == null)){
        btnConversorDE.style.cursor = 'not-allowed'
        alert("Digite um valor que zero")
    
    }
}

function btnTrueDE() {
    if(valorDE.value > 0){
        btnConversorDE.removeAttribute('disabled')
        btnConversorDE.style.cursor = 'pointer'
    }
    else{
        alert("Botão não ativo")
    }
}


btnLimparDE.addEventListener('click',function() {
    valorDE.value = ''  
})
