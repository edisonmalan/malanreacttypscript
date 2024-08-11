interface Alumno {
    name: string;
    edad: number;
    calificacion: number;
  }
  
  const alumnos: Alumno[] = [
    { name: 'Viviana', edad: 19, calificacion: 10 },
    { name: 'Wendy', edad: 20, calificacion: 8 },
    { name: 'Gerson', edad: 18, calificacion: 9 }
  ];
  
  export function calcularPromedioCalificaciones(alumnos: Alumno[]): number {
    const totalCalificaciones = alumnos.reduce((total, alumno) => total + alumno.calificacion, 0);
    return totalCalificaciones / alumnos.length;
  }
  
  // Ejemplo de uso
  const promedio = calcularPromedioCalificaciones(alumnos); // Devuelve 9
  console.log(promedio);
  