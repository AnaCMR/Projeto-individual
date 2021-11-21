var generoF = 0;
var generoM = 0;
var menos30 = 0;
var entre30_40 = 0;
var entre40_50 = 0;
var entre50_60 = 0;
var mais60 = 0;
var resultado = 0
var hoje = new Date(),
        ano_atual = hoje.getFullYear(),
        mes_atual = hoje.getMonth()+1,
        dia_atual = hoje.getDate();


function atualizarGraficoGenero() {
  fetch("/usuarios/usuariosGeneroM")
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          generoM = 0;
        }

        resposta.json().then(function (json) {
          console.log(`Dados recebidos: ${JSON.stringify(json)}`);
          generoM = json[0].genero;
        });

        fetch("/usuarios/usuariosGeneroF")
          .then(function (reposta1) {
            if (reposta1.ok) {
              if (reposta1.status == 204) {
                generoF = 0;
              }

              // console.log(reposta1.json())
              reposta1.json().then(function (json1) {
                console.log("Dados recebidos: ", JSON.stringify(json1));
                generoF = json1[0].genero;
                plotarGraficoGenero();
              });
            } else {
              throw "Houve um erro na API!(generoF)";
            }
          })
          .catch(function (erro1) {
            console.error(erro1);
          });
      } else {
        throw "Houve um erro na API! (GeneroM)";
      }
    })
    .catch(function (erro) {
      console.error(erro);
    });
}

var idades = [];
function atualizarGraficoIdade() {
  fetch("/usuarios/usuariosIdade")
    .then(function (resposta2) {
      if (resposta2.ok) {

        resposta2.json().then(function (json2) {
          console.log(`Dados recebidos: ${JSON.stringify(json2)}`);
          for (var posicao = 0; posicao < json2.length; posicao++) {
            idades.push(new Date(json2[posicao].data_nascimento));
          }
    
          for (var contador = 0; contador < idades.length; contador++) {
            
            resultado = hoje.getFullYear() - idades[contador].getFullYear();
    
            // '1996-09-29T03:00:00.000Z';
          
            if (resultado < 30) {
              menos30++;
            } else if (resultado >= 30 && resultado < 40) {
              entre30_40++;
            } else if (resultado >= 40 && resultado < 50) {
              entre40_50++;
            } else if (resultado >= 50 && resultado < 60) {
              entre50_60++;
            } else if (resultado >= 60) {
              mais60++;
            }
          }

          plotarGraficoIdade();
        });
      } else {
        throw "Houve um erro na API!(generoIdade)";
      }
    })
    .catch(function (erro2) {
      console.error(erro2);
    });
}

const configMixed = {
  type: "scatter",
  data: {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
    datasets: [
      {
        type: "bar",
        label: "Visitantes",
        data: [10, 10, 20, 30, 15, 25, 35],
        borderColor: "rgb(125, 161, 108, 0.8);",
        backgroundColor: "rgb(125, 161, 108, 0.6)",
      },
      {
        type: "line",
        label: "Assinantes",
        data: [8, 5, 10, 15, 9, 20, 30],
        fill: false,
        borderColor: "#9b5134",
        backgroundColor: "#9b5134",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
  },
};

function plotarGraficoGenero() {
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
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      cutout: "0",
    },
  };

  var myChartGender = new Chart(
    document.getElementById("myChartGender"),
    configGender
  );
}

function plotarGraficoIdade() {
  const configAge = {
    type: "doughnut",
    data: {
      labels: [
        "Menos de 30",
        "30-40 Anos",
        "40-50 Anos",
        "50-60 Anos",
        "Mais de 60",
      ],
      datasets: [
        {
          label: "Idade",
          data: [menos30, entre30_40, entre40_50, entre50_60, mais60],
          backgroundColor: [
            "#5A3B94",
            "#CDC3E0",
            "#46E043",
            "#94451E",
            "#E09E7E",
          ],
          hoverBorderWidth: "100px",
          borderColor: ["#5A3B94", "#CDC3E0", "#46E043", "#94451E", "#E09E7E"],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      cutout: "0",
    },
  };
  var myChartAge = new Chart(document.getElementById("myChartAge"), configAge);
}

var myChartMixed = new Chart(
  document.getElementById("myChartMixed"),
  configMixed
);
