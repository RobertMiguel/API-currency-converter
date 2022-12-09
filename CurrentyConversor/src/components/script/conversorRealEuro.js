const urlRE = 'https://economia.awesomeapi.com.br/last/'
const moedaRE = 'BRL-EUR'
const valorRE = document.getElementById('valorRE')
const saidaRE = document.querySelector('h2#saidaRE')
const limparRE = document.getElementById('btnLimparRE')
const btnConversorRE = document.getElementById('btnConversorRE')


function conversorRE() {
    fetch(urlRE+moedaRE)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const dolar = data.BRLEUR
            let conversao = (dolar.high * valorRE.value)
            let moedaConvertida = conversao.toLocaleString('de-DE', {style : 'currency', currency : 'EUR'})
            saidaRE.innerHTML = `${moedaConvertida}`
        })
}

function btnFalseRE() {
    if((valorRE.value == 0) || (valorRE.value == '') || (valorRE.value == null)){
        btnConversorRE.style.cursor = 'not-allowed'
        alert("Digite um valor que zero")
    }
}

function btnTrueRE() {
    if(valorRE.value > 0){
        btnConversorRE.removeAttribute('disabled')
        btnConversorRE.style.cursor = 'pointer'
    }
    else{
        alert("Botão não ativo")
    }
}


limparRE.addEventListener('click',function() {
    valorRE.value = ''
})
