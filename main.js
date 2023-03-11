function hitungLuas() {
    // Ambil nilai jari-jari dari input
    var jari_jari = document.getElementById("jari-jari").value;
    
    // Hitung luas lingkaran
    var luas = Math.PI * Math.pow(jari_jari, 2);
    
    // Tampilkan hasil luas lingkaran
    document.getElementById("hasil-luas").innerHTML = "Luas lingkaran dengan jari-jari " + jari_jari + " adalah " + luas.toFixed(2);
}

function hitungKeliling() {
    // Ambil nilai jari-jari dari input
    var jari_jari = document.getElementById("jari-jari").value;
    
    // Hitung keliling lingkaran
    var keliling = 2 * Math.PI * jari_jari;
    
    // Tampilkan hasil keliling lingkaran
    document.getElementById("hasil-keliling").innerHTML = "Keliling lingkaran dengan jari-jari " + jari_jari + " adalah " + keliling.toFixed(2);
}