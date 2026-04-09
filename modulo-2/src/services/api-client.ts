export interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}

export async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!endpoint || endpoint.trim() === "") {
        reject({ codigoEstado: 400, exito: false, datos: null, errores: ["Endpoint inválido"] });
        return;
      }

      resolve({
        codigoEstado: 200,
        exito: true,
        datos: { mensaje: `Datos obtenidos de ${endpoint}` } as T,
      });
    }, 500);
  });
}