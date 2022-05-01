"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

const dni = prompt(
  "Dime el numero del DNI 36111355(letra sparada por  - y en mayuscula: )"
);

const DNI = parseInt(dni);
const resto = DNI % 23;
console.log(resto);

const letradni = dni.split("-");

// for(let letras in letradni)
