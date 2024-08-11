export function sumarElementos(arreglo: number[]): number {
  return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}
