import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils";

const datos: number[] = [4, 8, 15, 16, 23, 42, 100, 7, 3, 55];

console.log("Datos originales:", datos);
console.log("Media:", calcularMedia(datos));
console.log("Mediana:", calcularMediana(datos));
console.log("Sin atípicos (límite 30):", filtrarAtipicos(datos, 30));

// Caso límite: array vacío
const vacio: number[] = [];
console.log("\nArray vacío:");
console.log("Media:", calcularMedia(vacio));
console.log("Mediana:", calcularMediana(vacio));