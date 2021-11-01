const configMixed = {
    type: 'scatter',
    data: {
            labels: [
              'Seg',
              'Ter',
              'Qua',
              'Qui',
              'Sex',
              'Sab',
              'Dom'
            ],
            datasets: [{
              type: 'bar',
              label: 'Visitantes',
              data: [10, 10, 20, 30, 15, 9 ,25,35],
              borderColor: 'rgb(125, 161, 108, 0.8);',
              backgroundColor: 'rgb(125, 161, 108, 0.6)'
            }, {
              type: 'line',
              label: 'Assinantes',
              data: [8, 5, 10, 15, 9, 20,30],
              fill: false,
              borderColor: '#9b5134'
            }]
    },
    options: {
        maintainAspectRatio: false
      }
    };

  

const config = { 
    type: "line", 
    data: {
      labels: ["2011", "2012", "2013","2014","2015","2016","2017","2018","2019","2020","2021"], 
      datasets: [ 
        {
          label: "Salário Mínimo",
          data: [540.00, 622.00, 678.00, 724.00, 788.00, 880.00, 937.00, 954.00, 998.00, 1045.00, 1100.00], 
          backgroundColor: "#aa0e95",
          borderColor: "#338a33" 
        }
      ]
    },
    options: {
      maintainAspectRatio: false
    }
  }

  const configGender = {
    type: "doughnut",
    data: {
      labels: ["Feminino","Masculino"],
      datasets: [
        {
          label: "Perfil: Gênero",
          data: [31,10],
          backgroundColor: ["#4C14FA","#02E6E1"],
          hoverBorderWidth: "80px",
          borderColor: ["#4C14FA","#02E6E1"],
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      cutout: "40%",
  }
}

  const configAge = {
    type: "doughnut",
    data: {
      labels: ["Brasil(total)","Norte","Nordeste","Sudeste","Sul","Centro-Oeste"],
      datasets: [
        {
          label: "Desemprego por região",
          data: [11,10.6,13.6,11.4,6.8,9.3],
          backgroundColor: ["#4C14FA","#02E6E1","#70FA00","#E6A722","#FF3630","#B104D6" ],
          hoverBorderWidth: "80px",
          borderColor: ["#4C14FA","#02E6E1","#70FA00","#E6A722","#FF3630","#B104D6" ],
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      cutout: "40%",
  }
}

  var myChartLine = new Chart(document.getElementById("myChart"), config); 
 var myChartGender = new Chart(document.getElementById("myChartGender"),configGender);
 var myChartAge = new Chart(document.getElementById("myChartAge"),configAge);
 var myChartMixed = new Chart(document.getElementById("myChartMixed"), configMixed); 
