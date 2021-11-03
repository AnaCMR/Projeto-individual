function subscribe() {

    return false;
}

function back_cadastro(){
    blur_div_cadastro.style.display = "none";
    cadastro_div.style.display = "none";
}
function back_login() {
    blur_div.style.display = "none";
    login_div.style.display = "none";
}

function cadastro(){
    blur_div_cadastro.style.display = "block";
    cadastro_div.style.display = "block";
}
function login() {
    blur_div.style.display = "block";
    login_div.style.display = "block";
}

 function welcome(){
     var name = name_user.value;
     var email =  user_email.value;
     var age = age_input.value;
     var gender = gender_select.value;
     var password = password_user.value;
     var confPassword = confirm_password.value;


     if (email == "ana.silva@bandtec.com.br") {
        
     } else if (email.trim() == "" || name.trim() == "" || age.trim() == "" || password.trim() == "" ){
     alert ("Por favor, preencha os campos")
 } else if (email.indexOf("@")  < 0 || email.trim() == "@.com"){
     alert ("Por favor, insira um e-mail valido")
 } else if (name.trim().length < 3){
     alert ("Por favor, insira um nome válido")
 }  else if (password != confPassword) {
     alert("Senhas não conferem")}
     else if (password.trim().length < 6){
         alert("Por favor, insira uma senha de pelo menos 6 caracteres")
     }
      else {
     alert (`Seja bem vindo(a) ${name}! Faça seu login para acessar nosso conteúdo.` )
     }
    }

    function welcome_login(){
        var email = user_email_login.value
        var senha = password_user_login.value

        if (email == "" || senha == ""){
            alert("Por favor, preencher os campos")
        }
    }
// function limparFormulario() {
//     document.getElementById("subscribe_form").reset();
// }

// function cadastrar() {
//     aguardar();

//     var formulario = new URLSearchParams(new FormData(document.getElementById("subscribe_form")));

//     var name = name_user.value;
//     var email =  user_email.value;
//     var choise = time_update.value
//     var age = age_input.value;
//     var gender = gender_select.value;


//     if (email == "ana.silva@bandtec.com.br") {
        
//     } else if (email.trim() == "" || name.trim() == "" || age.trim() == ""){
//         alert ("Por favor, preencha os campos")
//     } else if (email.indexOf("@")  < 0 ){
//         alert ("Por favor, insira um e-mail valido")
//     } else if (name.trim().length < 3){
//         alert ("Por favor, insira um nome válido")
//     } else {
//         alert (`Seja bem vindo(a) ${name}! A partir de amanhã, você receberá nosso conteúdo ${choise}!` )
//     }

//         finalizarAguardar();
//         return false;
//     }

    
//     fetch("/usuarios/cadastrar", {
//         method: "POST",
//         body: formulario
//     }).then(function (resposta) {

//         console.log("resposta: ", resposta);

//         if (resposta.ok) {
//             window.alert("Cadastro realizado com sucesso!");
//             window.location = "login.html";
//             limparFormulario();
//             finalizarAguardar();
//         } else {
//             throw ("Houve um erro ao tentar realizar o cadastro!");
//         }
//     }).catch(function (resposta) {
//         console.log(`#ERRO: ${resposta}`);
//         finalizarAguardar();
//     });

//     return false;


function like() {
    var numeros = numbers_like.innerHTML;
    numbers_like.innerHTML = Number(numeros) + 1;
    change_like.style.display = "block";
    like_heart.style.display = "none";
}

function deslike() {
    var numeros = numbers_like.innerHTML;
    numbers_like.innerHTML = Number(numeros) - 1;
    change_like.style.display = "none";
    like_heart.style.display = "block";
}

var contador = 0;

function answer_1() {
    var answer = answer_1_input.value;


    if (answer.trim() == "") {
        alert("Por favor, insira uma resposta");
    } else if (answer >= 50) {
        alert("Acho que você digitou errado, tente de novo");
    } else if (answer == 0) {
        answer1_div.innerHTML = " ";
        answer1_div.innerHTML = `Você não rega sua planta? <br> Assim ela vai morrer rapidinho <br> Regue a cada 2 dias <br>
            <img class="plant_mood_help" src="https://2.bp.blogspot.com/-wn6bewnK6IY/XgAEW8I2ZII/AAAAAAAWcrw/52-rBChiLyMJm7Q9KXOrSzUyjbGlhmvYwCLcBGAsYHQ/s1600/AW4119480_12.gif">`;
    } else if (answer > 0 && answer < 3) {
        while (contador < answer) {
            contador += 1;
            if (contador == 1) {
                answer1_div.innerHTML = " ";
                answer1_div.innerHTML += `Você regou apenas ${contador} vez <br> Parabéns sua planta está muito feliz <br> <img class="plant_mood"  id="happy_plant" src="https://i.giphy.com/media/TexEyqmPoz6dDHBCDA/giphy.webp" alt="">`;
            } else if (contador == 2) {
                answer1_div.innerHTML = `Você regou pela 1ª vez e depois <br> você regou pela ${contador}ª vez <br> Parabéns sua planta está muito feliz <br> <img class="plant_mood"  id="happy_plant" src="https://i.giphy.com/media/TexEyqmPoz6dDHBCDA/giphy.webp" alt="">`;
            }
        }
    } else if (answer >= 3) {
        contador = 1
        answer1_div.innerHTML = `Você regou pela 1ª vez e depois pela `;
        while (contador < 5) {
            contador += 1;
            answer1_div.innerHTML += `${contador}ª,`;
        }
        answer1_div.innerHTML += `vez <br><br>` ;
        answer1_div.innerHTML += `E continuou regando... <br><br> Sua planta vai morrer se continuar assim. Regue apenas a cada 2 dias <br> <img class="plant_mood" id="sad_plant" src="https://media0.giphy.com/media/Yoi7H75JB38dHERFVB/giphy.gif?cid=790b76110bd2589284651c6fb384c00549ba8f5d650f8da6&rid=giphy.gif&ct=s" alt="">`;
    }
}

function change_1() {
    question_1.style.display = "none";
    question_2.style.display = "block";
}

function answer_2() {
    var answer = answer_2_input.value;
    contador = 1;


    if (answer.trim() == "") {
        alert("Por favor, insira uma resposta");
    } else if (answer >= 12) {
        alert("Acho que você digitou errado, tente de novo");
    } else if (answer == 0) {
        answer2_div.innerHTML = " ";
        answer2_div.innerHTML = `Oh Não! <br> Adubo em excesso vira veneno!! <br> Espere no mínimo 3 meses <br>
            <img class="plant_mood_help" src="https://2.bp.blogspot.com/-wn6bewnK6IY/XgAEW8I2ZII/AAAAAAAWcrw/52-rBChiLyMJm7Q9KXOrSzUyjbGlhmvYwCLcBGAsYHQ/s1600/AW4119480_12.gif">`;
    } else if (answer > 0 && answer <= 5) {

        if (answer == 1) {
            answer2_div.innerHTML = " ";
            answer2_div.innerHTML += `Você aduba a cada ${answer} mês <br> Ela não vai durar muito assim, precisa de no mínimo 3 meses <br> <img class="plant_mood" id="sad_plant" src="https://media0.giphy.com/media/Yoi7H75JB38dHERFVB/giphy.gif?cid=790b76110bd2589284651c6fb384c00549ba8f5d650f8da6&rid=giphy.gif&ct=s" alt="">`;
        }
        else if (answer >= 2 && answer < 5) {
            answer2_div.innerHTML = " ";
            answer2_div.innerHTML += `Muito bem, você aduba a cada ${answer} meses, que é o período ideal! <br> <img class="plant_mood"  id="happy_plant" src="https://i.giphy.com/media/TexEyqmPoz6dDHBCDA/giphy.webp" alt="">`;
        }
    }
    else if (answer >= 5) {
        answer2_div.innerHTML = `Você não adubou em 1 mês e nem em `;
        while (contador < 5) {

            contador += 1
            answer2_div.innerHTML += `${contador},`
        }
        answer2_div.innerHTML += ` meses <br><br>`;
        answer2_div.innerHTML += `Cuidado! Sua planta pode não estar se desenvolvendo adequadamente, adube a cada 3 meses <br> <img class="plant_mood" id="strong_plant" src="https://i.pinimg.com/originals/e8/88/d4/e888d4feff8fd5ff63a965471a94b874.gif" alt="">`;
    }


   
}

function change_2() {

    question_2.style.display = "none";
    question_3.style.display = "block";

}
function answer_3() {
    var answer = answer_3_input.value;
    contador = 1;


    if (answer.trim() == "") {
        alert("Por favor, insira uma resposta");
    } else if (answer >= 24) {
        alert("Acho que você digitou errado, tente de novo");
    } else if (answer == 0) {
        answer3_div.innerHTML = " ";
        answer3_div.innerHTML = `Plantas de meia sombra precisam de no mínimo 2 horas de sol<br> Sua plantinha irá murchar <br>
            <img class="plant_mood_help" src="https://amz.nwstatic.co.uk/monthly_2021_04/source-1.gif.1ef5fb2a2abd7f2ebee7abecea59ca26.gif">`;
    } else if (answer > 0 && answer <= 5) {

        if (answer == 1) {
            answer3_div.innerHTML = " ";
            answer2_div.innerHTML += `Ela fica no sol por apenas ${answer} hora? <br> Não é o suficiente, precisa de pelo menos 2! <br> <img class="plant_mood" id="sad_plant" src="https://media0.giphy.com/media/Yoi7H75JB38dHERFVB/giphy.gif?cid=790b76110bd2589284651c6fb384c00549ba8f5d650f8da6&rid=giphy.gif&ct=s" alt="">`;
        }
        else if (answer >= 2 && answer < 5) {
            answer3_div.innerHTML = " ";
            answer3_div.innerHTML += `Muito bem, ${answer} horas é o período ideal! <br> <img class="plant_mood"  id="happy_plant" src="https://i.giphy.com/media/TexEyqmPoz6dDHBCDA/giphy.webp" alt="">`;
        }
    }
    else if (answer >= 5) {
        answer3_div.innerHTML = `Você deixou por 1 hora e continuou deixando por `;
        while (contador < 5) {
            contador += 1;
            answer3_div.innerHTML += `${contador},`;
        }
        answer3_div.innerHTML += `horas <br><br>`;
        answer3_div.innerHTML += `E continuou deixando... <br><br> Ela vai queimar todas as folhas assim, deixe por no máximo 4 horas <br> <img class="plant_mood" id="sad_plant" src="https://media0.giphy.com/media/Yoi7H75JB38dHERFVB/giphy.gif?cid=790b76110bd2589284651c6fb384c00549ba8f5d650f8da6&rid=giphy.gif&ct=s" alt="">`;
    }
}

function change_3() {
    

        question_3.style.display = "none";
        finish.style.display = "block";
    
}

function options_contact() {
    var contact = motive_contact.value;
    var motive = motive_cancel.value;

    if (contact == "cancelamento"){
        cancel.style.display = "block";
        if (motive == "outro"){
            other.style.display = "block"
        }
    } else if (contact == "experiencia") {
        history_div.style.display ="block"
    } else if (contact == "atualizacao"){
        change_update.style.display = "block"
    }
}