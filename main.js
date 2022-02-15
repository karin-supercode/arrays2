// forEach()

let getraenke = ["Coca-Cola", "Apfelsaft", "Pepsi", "Traubensaft", "Sprite", "Orangensaft", "Red Bull Energy Drink", "Fanta"];
let ausgabe = document.getElementById("ausgabe");

let getraenkeSortiert = getraenke.sort();
getraenkeSortiert.forEach((drink) => (ausgabe.innerHTML += `<h1>${drink}<h1>`));

// map()

let upperGetraenke = getraenkeSortiert.map((drink2) => {
  console.log("test");
  return drink2.toUpperCase();
});
console.log(upperGetraenke);
upperGetraenke.forEach((drink3) => (ausgabe.innerHTML += `<h1>${drink3}<h1>`));

// map() Zahlen mit 2 multiplizieren

let array = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];

let neuesArray = array.map((zahl) => {
  console.log("so oft wird das array durchgegangen");
  return zahl * 2;
});
console.log(neuesArray);

// forEach() teilen durch 3

let checkNumber = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];

checkNumber.forEach((zahl2) => {
  if (zahl2 % 3 == 0) {
    let plushundertzahl = zahl2 + 100;
    console.log(plushundertzahl);
  } else {
    console.log(zahl2);
  }
});
