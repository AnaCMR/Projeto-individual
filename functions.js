function subscribe(){

return false;
}

function like() {
    var numeros = numbers_like.innerHTML
    numbers_like.innerHTML = Number(numeros)+1;
    change_like.style.display = "block"
    like_heart.style.display = "none"
}

function deslike(){
    var numeros = numbers_like.innerHTML
    numbers_like.innerHTML = Number(numeros)-1;
    change_like.style.display = "none"
    like_heart.style.display = "block"
}
