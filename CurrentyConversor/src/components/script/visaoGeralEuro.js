const ctx = document.getElementById('myChart').getContext("2d")

const gradient = ctx.createLinearGradient(0,0,0, 400)
gradient.addColorStop(0, '#070705')
gradient.addColorStop(1, '#3e4b51')

const labels = [
    '5 de dez',
    '6 de dez',
    '7 de dez',
    '8 de dez',
    '9 de dez',
]

const data = {
    labels,
    datasets: [{
        data: [211, 299, 189, 344, 411, 377, 499, 389, 421],
        label: "Cotação do Euro",
        fill: true,
        backgroundColor : gradient
    }]
}

const config = {
    type: 'line',
    data,
    options: {
        responsive: true,
        radius: 3,
        hoverRadius: 10,
        scales:{
            y: {
                ticks: {
                    callback: function(value) {
                        let finalValue = value.toFixed(2)
                        return '€ ' + finalValue.replace('.', ',') + ' euros'
                    }
                }
            }
        }
    }
};

const myChart = new Chart(ctx, config)