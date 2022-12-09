//Constante com a url da API inserida
const url = 'https://economia.awesomeapi.com.br/last/'
//Constante com a cotação da moeda inserida
const moeda = 'USD-BRL'
 fetch(url+moeda)
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        const dolarAmericano = data.USDBRL
        let dataAtual = new Date(dolarAmericano.create_date)
        document.getElementById('codCoin').innerHTML = dolarAmericano.code
        document.getElementById('unidMonetaria').innerHTML = dolarAmericano.codein
        document.getElementById('pctChange').innerHTML = dolarAmericano.pctChange
        document.getElementById('title').innerHTML = dolarAmericano.name
        document.getElementById('thisdate').innerHTML = dataAtual.toLocaleString()
        document.getElementById('maxvalue').innerHTML = parseFloat(dolarAmericano.high).toLocaleString('pt-br',{
            style : 'currency',
            currency : 'BRL'
        })
        document.getElementById('minvalue').innerHTML = parseFloat(dolarAmericano.low).toLocaleString('pt-br',{
            style : 'currency',
            currency : 'BRL'
        })
    })
