//1.
cetakSimbol('*', 5); // bisa dibawah bisa diatas
function cetakSimbol(simbol, jumlah) {
    for (var i = 0; i < jumlah; i++) {
        console.log(simbol)
    }
}
//2
cetakSimbol('*', 5); // bisa dibawah bisa diatas
function cetakSimbol(simbol, jumlah) {
    for (var i = 0; i <= jumlah; i--) {
    }
}
//3
var rows3 = 6;
for (var i = 0; i < rows3; i++) {
    var string = "";
    for (let j = 0; j < i; j++) {
        string = string + "*"
    }
    console.log(string);
}