// prompt hello user start
function replaceName(){
    let name = prompt("siapakah nama anda?", "");
    document.getElementById("name").innerHTML = name
}

replaceName()

let nameInput = document.getElementById('name-input')

document.getElementById('kirim').addEventListener("click", function(){
    const nama = nameInput.value
    document.getElementById('name').innerHTML = nama
})
// prompt hello user end

// validate form start
function validateForm(){
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == ""){
        alert("tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}
// validate form end

// slide banner start
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs ((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("banner-container");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

// slide banner autoslide /3s start
setInterval(() => {
    plusDivs(1);
}, 3000); 
// slide banner autoslide /3s end

// slide banner end