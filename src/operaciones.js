import promptSync from 'prompt-sync';
import fs from "fs";

    let prompt;
    let numero1;
    let numero2;

    let operacion;

    let resultado;

// const operaciones = {
//   suma: function (a, b) {
//     return a + b;
//   },
//   resta: function (a, b) {
//     return a - b;
//   },
//   multiplicacion: function (a, b) {
//     return a * b;
//   },
//   division: function (a, b) {
//     return a / b;
//   },
//   residuo: function (a, b) {
//     return a % b;
//   },
// };

const suma = (a,b) => {
    return console.log("El resultado es: " + a + b);
}


const resta = (a,b) => {
    return resultado = "El resultado es: " + a - b;
}

const multiplicacion = (a,b) => {
    return resultado = "El resultado es: " + a * b;
}

const division = (a,b) => {
    return resultado = "El resultado es: " + a / b;
}

const residuo = (a,b) => {
    return resultado = "El resultado es: " + a % b;
}



export function calculadora() {
    prompt = promptSync();
    numero1 = parseInt(prompt("Ingresa el primer número: "));
    numero2 = parseInt(prompt("Ingresa el segundo número: "));

    operacion = prompt("Elige una operación: ");

    switch (operacion) {
        case "suma":
            suma();
            break;
        case "resta":
            resta();
            break;
        case "multiplicacion":
            multiplicacion();
            break;
        case "division":
            division();
            break;
        case "residuo":
            residuo();
            break;
        default:
            break;
    }

    //resultado = operaciones[operacion](numero1, numero2);

    //console.log(`El resultado es ${resultado}`);
}
