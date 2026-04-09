# Módulo 2 – Arquitectura de acceso a datos

## Descripción
Este módulo modela el dominio de un sistema de gestión universitaria
usando interfaces, uniones discriminadas y servicios genéricos.

## Modelo de datos

### `Estudiante` y `Asignatura`
Se han definido como `interface` en lugar de `type` porque representan
entidades del dominio con estructura jerárquica de objetos.
Los campos `id` son `readonly` para evitar que se modifiquen tras
la creación del objeto, garantizando la integridad de los datos.

### `EstadoMatricula` – Unión Discriminada
Se ha elegido una unión discriminada en lugar de una interfaz con
propiedades opcionales por dos razones:

1. **Seguridad**: TypeScript sabe exactamente qué propiedades existen
   en cada estado. Si accedemos a `asignaturas` solo es posible cuando
   el tipo es `"ACTIVA"`, evitando errores en tiempo de ejecución.

2. **Escalabilidad**: Si en el futuro se añade un nuevo estado,
   el compilador avisará en todos los lugares donde no se haya
   manejado el nuevo caso.

## Servicio genérico `obtenerRecurso<T>`

Se ha usado un genérico `<T>` para que el mismo método pueda devolver
cualquier entidad del dominio con tipado estricto. Por ejemplo:

- `obtenerRecurso<Estudiante>("/estudiantes/1")` devuelve `Promise<RespuestaAPI<Estudiante>>`
- `obtenerRecurso<Asignatura>("/asignaturas/1")` devuelve `Promise<RespuestaAPI<Asignatura>>`

Esto evita duplicar código y mantiene la seguridad de tipos en todas
las llamadas al servicio, algo imposible de conseguir con JavaScript puro.

## `interface` vs `type`
- Se usa `interface` para entidades del dominio: `Estudiante`, `Asignatura`, `RespuestaAPI<T>`
- Se usa `type` para uniones y aliases: `EstadoMatricula`, `UUID`