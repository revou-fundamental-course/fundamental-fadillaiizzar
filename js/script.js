// hello user
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

// form
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