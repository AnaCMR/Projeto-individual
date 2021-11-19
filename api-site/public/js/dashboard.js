
var generoF = 0;
var generoM = 0;


function atualizarGraficoGenero() {

  fetch("/usuarios/usuariosGeneroM").then(function (resposta) {
    if (resposta.ok) {
      if (resposta.status == 204) {
        generoM = 0
      }

      resposta.json().then(function (json) {
        console.log(`Dados recebidos: ${JSON.stringify(json)}`);
        generoM = json[0].genero
      });

      fetch("/usuarios/usuariosGeneroF").then(function (reposta1) {
        if (reposta1.ok) {
          if (reposta1.status == 204) {
            generoF = 0;
          }

          // console.log(reposta1.json())
          reposta1.json().then(function (json1) {
            console.log("Dados recebidos: ", JSON.stringify(json1));
            generoF = json1[0].genero;
            plotarGrafico()
          });



        } else {
          throw ('Houve um erro na API!(generoF)');
        }
      }).catch(function (erro1) {
        console.error(erro1);
      });

    } else {
      throw ('Houve um erro na API! (GeneroM)');
    }
  }).catch(function (erro) {
    console.error(erro);
  })
}

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
      data: [10, 10, 20, 30, 15, 25, 35],
      borderColor: 'rgb(125, 161, 108, 0.8);',
      backgroundColor: 'rgb(125, 161, 108, 0.6)'
    }, {
      type: 'line',
      label: 'Assinantes',
      data: [8, 5, 10, 15, 9, 20, 30],
      fill: false,
      borderColor: '#9b5134',
      backgroundColor: '#9b5134',
    }]
  },
  options: {
    maintainAspectRatio: false
  }
};



const config = {
  type: "line",
  data: {
    labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
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


function plotarGrafico() {

  console.log(generoM, generoF);

  const configGender = {
    type: "doughnut",
    data: {
      labels: ["Feminino", "Masculino"],
      datasets: [
        {
          label: "Perfil: Gênero",
          data: [generoF, generoM],
          backgroundColor: ["#df5382", "#44afaf"],
          hoverBorderWidth: "100px",
          borderColor: ["#df5382", "#44afaf"],
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      cutout: "0",
    }
  }

  var myChartGender = new Chart(document.getElementById("myChartGender"), configGender);

}

const configAge = {
  type: "doughnut",
  data: {
    labels: ["Menos de 30", "30-40 Anos", "40-50 Anos", "50-60 Anos", "Mais de 60"],
    datasets: [
      {
        label: "Idade",
        data: [30, 45, 50, 65, 20],
        backgroundColor: ["#5A3B94", "#CDC3E0", "#46E043", "#94451E", "#E09E7E"],
        hoverBorderWidth: "100px",
        borderColor: ["#5A3B94", "#CDC3E0", "#46E043", "#94451E", "#E09E7E"],
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    cutout: "0",
  }
}

var myChartLine = new Chart(document.getElementById("myChart"), config);
// var myChartGender = new Chart(document.getElementById("myChartGender"), configGender);
var myChartAge = new Chart(document.getElementById("myChartAge"), configAge);
var myChartMixed = new Chart(document.getElementById("myChartMixed"), configMixed);

