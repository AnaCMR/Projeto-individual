var generoF = 0;
var generoM = 0;
var menos30 = 0;
var entre30_40 = 0;
var entre40_50 = 0;
var entre50_60 = 0;
var mais60 = 0;
var hoje = new Date();
var ano_atual = hoje.getFullYear();
var mes_atual = hoje.getMonth()+1;
var dia_atual = hoje.getDate();
var dia1 = 0;
var dia2 = 0;
var dia3 = 0;
var dia4 = 0;
var dia5 = 0;
var dia6 = 0;
var dia7 = 0;
var atualizacaodia = 0;


function atualizarGraficoGenero() {
  fetch("/dashboard/usuariosGeneroM")
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          generoM = 0;
        }

        resposta.json().then(function (json) {
          console.log(`Dados recebidos: ${JSON.stringify(json)}`);
          generoM = json[0].genero;
        });

        fetch("/dashboard/usuariosGeneroF")
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
  fetch("/dashboard/usuariosIdade")
    .then(function (resposta2) {
      if (resposta2.ok) {

        resposta2.json().then(function (json2) {
          console.log(`Dados recebidos: ${JSON.stringify(json2)}`);
          
          for (var posicao = 0; posicao < json2.length; posicao++) {
            idades.push(new Date(json2[posicao].data_nascimento));
          }
    
          for (var contador = 0; contador < idades.length; contador++) {
            
            var resultado = ano_atual - idades[contador].getFullYear();

            if (mes_atual < idades[contador].getMonth || mes_atual == idades[contador].getMonth && dia_atual < idades[contador].getDate) {
              resultado--;
            }

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
var dias = []
function atualizarGraficoCadastro() {
  fetch("/dashboard/usuariosCadastrados")
    .then(function (resposta3) {
      if (resposta3.ok) {
        if (resposta3.status == 204) {
          atualizacaodia = 0;
        }

        resposta3.json().then(function (json3) {
          console.log(`Dados recebidos: ${JSON.stringify(json3)}`);
          for (var posicao = 0; posicao < json3.length; posicao++) {
            dias.push(new Date(json3[posicao].data_nascimento));
          }
        });
        plotarGraficoCadastro()
        // fetch("/dashboard/usuariosGeneroF")
        //   .then(function (reposta1) {
        //     if (reposta1.ok) {
        //       if (reposta1.status == 204) {
        //         generoF = 0;
        //       }

        //       // console.log(reposta1.json())
        //       reposta1.json().then(function (json1) {
        //         console.log("Dados recebidos: ", JSON.stringify(json1));
        //         generoF = json1[0].genero;
        //         ;
        //       });
        //     } else {
        //       throw "Houve um erro na API!(generoF)";
        //     }
          // })
          // .catch(function (erro1) {
            // console.error(erro1);
          // });
      } else {
        throw "Houve um erro na API! (GeneroM)";
      }
    })
    .catch(function (erro3) {
      console.error(erro3);
    });
}

function plotarGraficoCadastro() {
const configMixed = {
  type: "scatter",
  data: {
    labels: [dia1,dia2,dia3,dia4,dia5,dia6,dia7],
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
        data: [],
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
var myChartMixed = new Chart(
  document.getElementById("myChartMixed"),
  configMixed
);
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


