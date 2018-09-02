//1.
var a = 'looping pertama';
var upper = a.toUpperCase();
console.log(upper);

//start
var i = 2;

//proses
while(i < 20) {
   console.log(i + " - " +  "I love coding");
    i = i+2;
}
console.log("LOOPING KEDUA")

while(i > 0) {
    console.log(i + " - " +  "I will become fullstack developer");
     i = i-2;
 }

 console.log('----------------------------------------------------------------')
 
 //2.
 console.log("LOOPING PERTAMA")
 for(var angka = 1; angka < 21; angka++) {
    console.log(angka + ' - ' + "I love coding");
  }
  console.log("LOOPING KEDUA")
 for(var angka = 20; angka > 0; angka--) {
    console.log(angka + ' - ' + "I will become fullstack developer");
  }

//3.
console.log("GANJIL GENAP");
for (var counter = 1; counter <= 100; counter++) {
  var angka;
  if (counter % 2 == 0) {
    angka = "GENAP";
  } else {
    angka = "GANJIL";
  }
  console.log(counter + " : " + angka);
}

console.log("pertambahan counter 2");
for (var counter = 1; counter <= 100; counter += 2) {
  if (counter % 3 == 0) {
    console.log(counter + " KELIPATAN 3");
  }
}

console.log("pertambahan counter 5");
for (var counter = 1; counter <= 100; counter += 5) {
  if (counter % 6 == 0) {
    console.log(counter + " KELIPATAN 6");
  }
}

console.log("pertambahan counter 9");
for (var counter = 1; counter <= 100; counter += 9) {
  if (counter % 10 == 0) {
    console.log(counter + " KELIPATAN 10");
  }
}