import { EstadoMatricula } from "./domain/types/tipos";

export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas: ${estado.asignaturas.map(a => a.nombre).join(", ")}`;
    
    case "SUSPENDIDA":
      return `Matrícula suspendida. Motivo: ${estado.motivoSuspension}`;
    
    case "FINALIZADA":
      return `Matrícula finalizada con una nota media de ${estado.mediaFinal}`;
  }
}