const urlER = 'https://economia.awesomeapi.com.br/last/'
const moedaER = 'EUR-BRL'
const valorER = document.getElementById('valorER')
const saidaER = document.querySelector('h2#saidaER')
const limparER = document.getElementById('btnLimparER')
const btnConversorER = document.getElementById('btnConversorER')


function conversorER() {
    fetch(urlER+moedaER)
        .then(function(response){
        
            return response.json()
        })
        .then(function(data){
            const dolar = data.EURBRL
            let conversao = (dolar.high * valorER.value)
            let moedaConvertida = conversao.toLocaleString('de-DE', {style : 'currency', currency : 'EUR'})
            saidaER.innerHTML = `${moedaConvertida}`
        })
}

function btnFalseER() {
    if((valorER.value == 0) || (valorER.value == '') || (valorER.value == null)){
        btnConversorER.style.cursor = 'not-allowed'
        alert("Digite um valor que zero")
    }
}

function btnTrueER() {
    if(valorER.value > 0){
        btnConversorER.removeAttribute('disabled')
        btnConversorER.style.cursor = 'pointer'
    }
    else{
        alert("Botão não ativo")
    }
}


limparER.addEventListener('click',function() {
    valorER.value = ''
})
