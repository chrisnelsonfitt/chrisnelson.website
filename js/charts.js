var ctx = document.getElementById('skillsets').getContext('2d');

Chart.defaults.global.legend.display = false;
Chart.defaults.global.gridLines =false;
Chart.defaults.global.tooltips.enabled = false;


var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['Java','JavaScript','HTML',"CSS/SASS","Git","Android SDK","SQL"],
        datasets: [{
            backgroundColor:
            'rgba(81,78,73,.4)',
            borderColor:'rgba(81,78,73,1)',
            borderWidth:0,
            data: [1.6 ,3.5,4,4,3.5,1.5,1]
        }]
    },

    // Configuration options go here
    options: {

      scales: {
 scaleShowLabels: false,
      xAxes: [{
          gridLines: {
              zeroLineColor: 'transparent',
              drawOnChartArea: false,
              drawBorder: false
          },
          ticks: {
            display:false,
              beginAtZero: true,
   }

      }],
      yAxes: [{
          gridLines: {
              drawOnChartArea: false,
              drawBorder: false,
              display: false,

          },ticks:{
            fontSize:15,
            fontColor:'#000',
            fontStyle:"bold",

          }
      }]



  }
    }
});

Chart.pluginService.register({
    afterDraw: function(chartInstance) {
        var ctx = chartInstance.chart.ctx;
        // render the value of the chart above the bar
        ctx.font = Chart.helpers.fontString( 'normal', Chart.defaults.global.defaultFontFamily);
        ctx.textAlign = 'right';

        chartInstance.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
                var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                ctx.fillText(dataset.data[i] + ' years', model.x -20, model.y + 5);

            }
        });
  }
});
