const nome = "vinnycius";
const nome2 = "vinnycius";
const nome3 = "vinnycius";
const nome4 = "vinnycius";

// ===== Metódos String =====

// Length
let comprimentoString = nome.length;
console.log(
  `A string possui ${comprimentoString} caracteres (incluindo espaços em branco)`
);

// toUpperCase (letras maiúsculas)
let nomeUpper = nome2.toUpperCase();
console.log(nomeUpper);

// toLowerCase
let nomeLower = nome3.toLowerCase();
console.log(nomeLower);

// replace
let nomeReplace = nome4.replace("vinny", "Zezinho");
console.log(nomeReplace);

// Substring
let nomeSubString = nome.substring(5, 10);
console.log(nomeSubString);

// Split
let nomeSplit = nome.split(" ");
console.log(nomeSplit);
nomeSplit.map((elementoAtual) => {
  console.log(elementoAtual);
});
