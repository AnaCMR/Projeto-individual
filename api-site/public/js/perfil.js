function change_email() {
  show_email.style.display = "block";
  show_password.style.display = "none";
}

function confirm_email() {
  show_email.style.display = "none";
}

function change_password() {
  show_email.style.display = "none";
  show_password.style.display = "block";
}

function confirm_password() {
  show_password.style.display = "none";
}

function change_photo_1() {
  var plant = favorite_plant_1.value;

  photo_1.innerHTML = `<img src="${plant}" width="100%">`;
}
function change_photo_2() {
  var plant = favorite_plant_2.value;

  photo_2.innerHTML = `<img src="${plant}" width="100%">`;
}
function change_photo_3() {
  var plant = favorite_plant_3.value;

  photo_3.innerHTML = `<img src="${plant}" width="100%">`;
}

function options_cancel() {
  var motive = motive_cancel.value;

  if (motive == "outro") {
    other.style.visibility = "visible";
    show_button.style.visibility = "visible";
    confirm_title.style.visibility = "visible"
    confirm_cancel_input.style.visibility = "visible"
  } else if (motive == "") {
    other.style.visibility = "hidden";
    show_button.style.visibility = "hidden";
    confirm_cancel.style.visibility = "hidden"
    confirm_cancel_input.style.visibility = "hidden"
  } else {
    show_button.style.visibility = "visible";
    confirm_title.style.visibility = "visible"
    confirm_cancel_input.style.visibility = "visible"
    other.style.visibility = "hidden";
  }
}

function send_cancel() {
  

  var senhaCancelamentVar = confirm_cancel_input.value;

    if (senhaCancelamentVar == "") {

window.alert("Preencha todos os campos para prosseguir!");
    } else {
      blur_div_cadastro.style.display = "block";
  cadastro_div.style.display = "block";
    }
}

function back_cadastro() {
  blur_div_cadastro.style.display = "none";
  cadastro_div.style.display = "none";
}

var quiz = [hera, dolar, peperomia, jiboia, samambaia];

function quizRandom(quizArr) {
  var content_quiz = quizArr[Math.floor(Math.random() * quizArr.length)];
  return (content_quiz.style.display = "block");
}

console.log(quizRandom(quiz));



function plant_samambaia() {
  var name = input_samambaia.value;

  if (name == "samambaia" || name == "Samambaia") {
    content_samambaia.style.display = "block";
    certo_samambaia.style.display = "block";
    errado_samambaia.style.display = "none";
  } else if (name == "") {
    content_samambaia.style.display = "none";
  } else {
    content_samambaia.style.display = "block";
    errado_samambaia.style.display = "block";
    certo_samambaia.style.display = "none";
  }
}
function plant_jiboia() {
  var name = input_jiboia.value;

  if (name == "jiboia" || name == "Jiboia") {
    content_jiboia.style.display = "block";
    certo_jiboia.style.display = "block";
    errado_jiboia.style.display = "none";
  } else if (name == "") {
    content_jiboia.style.display = "none";
  } else {
    content_jiboia.style.display = "block";
    errado_jiboia.style.display = "block";
    certo_jiboia.style.display = "none";
  }
}
function plant_peperomia() {
  var name = input_peperomia.value;

  if (name == "peperomia" || name == "Pereromia") {
    content_peperomia.style.display = "block";
    certo_pepemoria.style.display = "block";
    errado_peperomia.style.display = "none";
  } else if (name == "") {
    content_peperomia.style.display = "none";
  } else {
    content_peperomia.style.display = "block";
    errado_peperomia.style.display = "block";
    certo_peperomia.style.display = "none";
  }
}
function plant_hera() {
  var name = input_hera.value;

  if (name == "hera" || name == "Hera") {
    content_hera.style.display = "block";
    certo_hera.style.display = "block";
    errado_hera.style.display = "none";
  } else if (name == "") {
    content_hera.style.display = "none";
  } else {
    content_hera.style.display = "block";
    errado_hera.style.display = "block";
    certo_hera.style.display = "none";
  }
}
function plant_dolar() {
  var name = input_dolar.value;

  if (name == "dolar" || name == "Dolar") {
    content_dolar.style.display = "block";
    certo_dolar.style.display = "block";
    errado_dolar.style.display = "none";
  } else if (name == "") {
    content_dolar.style.display = "none";
  } else {
    content_dolar.style.display = "block";
    errado_dolar.style.display = "block";
    certo_dolar.style.display = "none";
  }
}

function changeImage() {

    novaSenha_input.type = "text";
    senhaAntiga_input.type = "text";
    confirmPassword.type = "text";
  olho_aberto_antiga.style.visibility = "hidden";
  olho_fechado_antiga.style.visibility = "visible";
  olho_aberto_nova.style.visibility = "hidden";
  olho_fechado_nova.style.visibility = "visible";
  olho_aberto_confirmar.style.visibility = "hidden";
  olho_fechado_confirmar.style.visibility = "visible";
}
function ver() {
  novaSenha_input.type = "password";
    senhaAntiga_input.type = "password";
    confirmPassword.type = "password";
  olho_aberto_antiga.style.visibility = "visible";
  olho_fechado_antiga.style.visibility = "hidden";
  olho_aberto_nova.style.visibility = "visible";
  olho_fechado_nova.style.visibility = "hidden";
  olho_aberto_confirmar.style.visibility = "visible";
  olho_fechado_confirmar.style.visibility = "hidden";
}
