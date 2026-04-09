# Módulo 1 – Tipos primitivos y funciones matemáticas

## Descripción
Este módulo implementa un conjunto de funciones de análisis estadístico
usando TypeScript con tipado estricto.

## Funciones implementadas

### `calcularMedia(datos: number[]): number | null`
Calcula la media aritmética de un array de números.
Devuelve `null` si el array está vacío para evitar divisiones por cero.

### `calcularMediana(datos: number[]): number | null`
Ordena el array y calcula el valor central.
Si el array tiene un número par de elementos, promedia los dos centrales.
Devuelve `null` si el array está vacío.

### `filtrarAtipicos(datos: number[], limite: number): number[]`
Filtra los valores que se alejan más de `limite` unidades de la media.
Devuelve un array vacío si no hay datos.

## Decisiones de diseño

### Tipo de retorno `number | null`
Se ha usado una unión de tipos en lugar de lanzar una excepción
porque un array vacío no es un error, sino un caso válido que el
código que llama a la función debe poder manejar.

### Modo strict
El `tsconfig.json` tiene `"strict": true` activado, lo que obliga a
manejar explícitamente los valores `null` y evita el uso implícito
de `any`, haciendo el código más seguro y predecible.