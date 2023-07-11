/* Primera consigna JS NUCBA*/

//** 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const even = (int) => {
  const result =
    int % 2 === 0
      ? console.log(`${int} es un munero par`)
      : console.log(`${int} es un nunero impar`);
  return result;
};

//even(1);

//** 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const getNumber = (int_1 = 0, int_2 = 0) => {
  const result =
    int_1 > int_2
      ? console.log(`El numero ${int_1} es mayor que ${int_2}`)
      : int_1 === int_2
      ? console.log(`${int_1} y ${int_2} son numeros iguales`)
      : console.log(`${int_2} es mayor que ${int_1}`);

  return result;
};

//getNumber(1, 1);

//** 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const getMultipleNumber = (int = 0) => {
  const result =
    int % 5 === 0
      ? console.log(` el numero ${int} es multiplo de 5 `)
      : console.log(`el numero ${int} no es multiplo de 5`);

  return result;
};

//getMultipleNumber(1);

//** 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const counter = (int = 0) => {
  let i = 0;
  for (i; i <= int; i++) {
    console.log(i);
  }
};

//counter(1);

//** 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

const words = function (string, int) {
  let i = 0;
  for (i; i < int; i++) {
    console.log(`${string}`);
  }
};

//words("repitiendo", 10);

//** 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = (array = []) => {
  array.forEach((item) => console.log(item));
};

//newArray(arrayNumber);

//** 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const arrayModified = (array) => {
  let i = 0;
  for (i; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
};
//arrayModified(arrayNumber);

//** 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const multiply = (array, int) => {
  array.forEach((item) => {
    const result = `${item} * ${int}: ${item * int}`;
    console.log(result);
  });
};

//multiply(arrayNumber, 10);
