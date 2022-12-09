//Constante com a url da API inserida
const url = 'https://economia.awesomeapi.com.br/last/'
//Constante com a cotação da moeda inserida
const moeda = 'EUR-BRL'
 fetch(url+moeda)
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        const euro = data.EURBRL
        let dataAtual = new Date(euro.create_date)
        document.getElementById('codCoin').innerHTML = euro.code
        document.getElementById('unidMonetaria').innerHTML = euro.codein
        document.getElementById('pctChange').innerHTML = euro.pctChange
        document.getElementById('title').innerHTML = euro.name
        document.getElementById('thisdate').innerHTML = dataAtual.toLocaleString()
        document.getElementById('maxvalue').innerHTML = parseFloat(euro.high).toLocaleString('pt-br',{
            style : 'currency',
            currency : 'BRL'
        })
        document.getElementById('minvalue').innerHTML = parseFloat(euro.low).toLocaleString('pt-br',{
            style : 'currency',
            currency : 'BRL'
        })
    })

