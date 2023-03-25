const form = document.getElementById("form");
const email = document.getElementById("emaillogin");
const pass = document.getElementById("passlogin");
const nama = document.getElementById("namalogin");


form.addEventListener("submit", function(e){
    e.preventDefault()

    const tempat_nama = JSON.parse(localStorage.getItem("nama")) || [];
    const tempat_password = JSON.parse(localStorage.getItem("password")) || [];

    if (tempat_nama.includes(nama.value)){
        if (tempat_nama.indexOf(nama.value) == tempat_password.indexOf(pass.value)){
            alert("Welcome "+ nama.value);
            window.location.href = "beranda.html";
        }
        else {
            alert ("Akun tidak sesuai, silahkan masukkan akun yang benar");
        }
    }
    else{
        alert ("Username tidak ditemukan");
    }
});