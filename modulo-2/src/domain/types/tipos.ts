// Entidades del dominio
export interface Estudiante {
  readonly id: string;
  nombreCompleto: string;
  email: string;
  fechaNacimiento: Date;
  curso: number;
}

export interface Asignatura {
  readonly id: string;
  nombre: string;
  creditos: number;
  profesor: string;
}

// Unión Discriminada de estados de matrícula
export interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivoSuspension: string;
}

export interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  mediaFinal: number;
}

export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;