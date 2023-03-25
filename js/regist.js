const tombol = document.getElementById("register");
tombol.onclick = regist;
localStorage.clear();

function regist(e){
    e.preventDefault();

const email = document.getElementById("emaildaftar");
const nama = document.getElementById("namadaftar");
const pass = document.getElementById("passdaftar");

const tempat_email = JSON.parse(localStorage.getItem("email")) || [];
const tempat_nama = JSON.parse(localStorage.getItem("nama")) || [];
const tempat_password = JSON.parse(localStorage.getItem("password")) || [];

        tempat_email.push(email.value);
        localStorage.setItem("email", JSON.stringify(tempat_email));
        tempat_nama.push(nama.value);
        localStorage.setItem("nama", JSON.stringify(tempat_nama));
        tempat_password.push(pass.value);
        localStorage.setItem("password", JSON.stringify(tempat_password));

// localStorage.setItem("Email", email.value);
// localStorage.setItem("Nama", nama.value);
// localStorage.setItem("Password", pass.value);

alert("Selamat Anda Berhasil Mendaftarkan Akun");
}
