import { Estudiante, Asignatura, EstadoMatricula } from "./domain/types/tipos";
import { generarReporte } from "./reportes";
import { obtenerRecurso, RespuestaAPI } from "./services/api-client";

// Datos de prueba
const asignaturas: Asignatura[] = [
  { id: "AS-001", nombre: "Programación", creditos: 6, profesor: "Juan García" },
  { id: "AS-002", nombre: "Bases de Datos", creditos: 4, profesor: "María López" },
];

const estudiante: Estudiante = {
  id: "EST-001",
  nombreCompleto: "Carlos Pérez",
  email: "carlos@ejemplo.com",
  fechaNacimiento: new Date("2000-05-15"),
  curso: 2,
};

// Prueba de la unión discriminada
const estados: EstadoMatricula[] = [
  { tipo: "ACTIVA", asignaturas },
  { tipo: "SUSPENDIDA", motivoSuspension: "Impago de tasas" },
  { tipo: "FINALIZADA", mediaFinal: 7.8 },
];

console.log("=== Reportes de matrícula ===");
estados.forEach(estado => console.log(generarReporte(estado)));

// Prueba del servicio genérico
console.log("\n=== Servicio de datos ===");
obtenerRecurso<Estudiante>("/estudiantes/EST-001")
  .then((respuesta: RespuestaAPI<Estudiante>) => {
    console.log("Código:", respuesta.codigoEstado);
    console.log("Éxito:", respuesta.exito);
    console.log("Datos:", respuesta.datos);
  })
  .catch(err => console.error("Error:", err));