"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

const pizza = (ingredientes) => {
  for (let i = 0; i < catalogo.length; i++) {
    for (let j = 1; j < catalogo.length; j++) {
      // let catalogo2 = [catalogo.shift()];

      // const pizzaSinDuplicados = [...new Set(catalogo)];
      // // console.log(pizzaSinDuplicados);

      ingredientes(catalogo[i], catalogo[j]);
    }
  }
};

pizza((catalogo, catalogo2) => {
  console.log(` ${catalogo} y ${catalogo2}`);
});
