function change_email() {
    show_email.style.display = "block"
    show_password.style.display = "none"
}

function confirm_email(){
    show_email.style.display = "none"
}

function change_password() {
    show_email.style.display = "none"
    show_password.style.display = "block"
}

function confirm_password(){
    show_password.style.display = "none"   
}

function change_photo(){
    var plant = favorite_plant.value;


    photo_1.innerHTML = `<img src="${plant}" width="100%">`
}

