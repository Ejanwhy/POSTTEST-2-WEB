const tempat_nama = JSON.parse(localStorage.getItem("nama")) || [];
const tampilkan = document.getElementById("tampil")
tampilkan.innerHTML = tempat_nama;