function subscribe() {

    return false;
}

function like() {
    var numeros = numbers_like.innerHTML
    numbers_like.innerHTML = Number(numeros) + 1;
    change_like.style.display = "block"
    like_heart.style.display = "none"
}

function deslike() {
    var numeros = numbers_like.innerHTML
    numbers_like.innerHTML = Number(numeros) - 1;
    change_like.style.display = "none"
    like_heart.style.display = "block"
}

var contador = 0

function answer_1() {
    var answer = answer_1_input.value


    if (answer.trim() == "") {
        alert("Por favor, insira uma resposta")
    } else if (answer >= 50) {
        alert("Acho que você digitou errado, tente de novo")
    } else if (answer == 0) {
        answer_div.innerHTML = " "
        answer_div.innerHTML = `Você não rega sua planta? <br> Assim ela vai morrer rapidinho <br>
            <img class="plant_mood" src="https://amz.nwstatic.co.uk/monthly_2021_04/source-1.gif.1ef5fb2a2abd7f2ebee7abecea59ca26.gif">`
    } else if (answer > 0 && answer <= 5) {
        while (contador < answer) {
            contador += 1
            if (contador == 1) {
                answer_div.innerHTML = " "
                answer_div.innerHTML += `Você regou apenas ${contador} vez <br> Parabéns sua planta está muito feliz <br> <img class="plant_mood"  id="happy_plant" src="https://i.giphy.com/media/TexEyqmPoz6dDHBCDA/giphy.webp" alt="">`
            } else if (contador == 2) {
                answer_div.innerHTML = `Você regou pela 1ª vez e depois <br> você regou pela ${contador}ª vez <br> Parabéns sua planta está muito feliz <br> <img class="plant_mood"  id="happy_plant" src="https://i.giphy.com/media/TexEyqmPoz6dDHBCDA/giphy.webp" alt="">`
            } else if (contador > 2 && contador <= 5) {
                answer_div.innerHTML = `Você regou pela 1ª vez`
                answer_div.innerHTML += `e depois você regou pela ${contador}ª vez <br>`
                answer_div.innerHTML += `Sua planta vai morrer se continuar assim <br> <img class="plant_mood" id="sad_plant" src="https://media0.giphy.com/media/Yoi7H75JB38dHERFVB/giphy.gif?cid=790b76110bd2589284651c6fb384c00549ba8f5d650f8da6&rid=giphy.gif&ct=s" alt="">`
            }   
        }  
    } else if (answer > 5) {
        while (contador < 5) {
           contador += 1
           answer_div.innerHTML = `Você regou pela 1ª vez`
            answer_div.innerHTML += `e depois vocÊ regou pela ${contador}ª vez <br>`
            answer_div.innerHTML += `E continuou regando... <br> sua planta vai morrer se continuar assim <br> <img class="plant_mood" id="sad_plant" src="https://media0.giphy.com/media/Yoi7H75JB38dHERFVB/giphy.gif?cid=790b76110bd2589284651c6fb384c00549ba8f5d650f8da6&rid=giphy.gif&ct=s" alt="">`
        }
}
}

// Você regou 1 vez. <br>
// Você regou 2 vez. <br>
// Você regou 3 vez. <br>
// Você regou 4 vez. <br>
// Você regou 5 vez. <br>
// E continuou regando...
// <img class="plant_mood" id="sad_plant" src="https://media0.giphy.com/media/Yoi7H75JB38dHERFVB/giphy.gif?cid=790b76110bd2589284651c6fb384c00549ba8f5d650f8da6&rid=giphy.gif&ct=s" alt="">
// <img class="plant_mood"  id="happy_plant" src="https://i.giphy.com/media/TexEyqmPoz6dDHBCDA/giphy.webp" alt="">
// Provavelmente sua Jibóia morreu, você deve regar no máximo 2 vezes por semana.