//Constante com a url da API inserida
const url = 'https://economia.awesomeapi.com.br/last/'
//Constante com a cotação da moeda inserida
const moeda = 'BTC-BRL'
 fetch(url+moeda)

    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        const real = data.BTCBRL
        let dataAtual = new Date(real.create_date)
        document.getElementById('codCoin').innerHTML = real.code
        document.getElementById('unidMonetaria').innerHTML = real.codein
        document.getElementById('pctChange').innerHTML = real.pctChange
        document.getElementById('title').innerHTML = real.name
        document.getElementById('thisdate').innerHTML = dataAtual.toLocaleString()
        document.getElementById('maxvalue').innerHTML = parseFloat(real.high).toLocaleString('pt-br',{
            style : 'currency',
            currency : 'BRL'
        })
        document.getElementById('minvalue').innerHTML = parseFloat(real.low).toLocaleString('pt-br',{
            style : 'currency',
            currency : 'BRL'
        })
    })
