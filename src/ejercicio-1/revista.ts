import { Observer } from './observer';
/**

    Clase que representa una revista.
    */
export class Revista {
  /*

    Lista de observadores de la revista.
    */
  private observadores: Observer[] = [];
  /**

    Número actual de la revista.
    */
  private numero: number = 0;
/**

    Agrega un nuevo observador a la lista de observadores de la revista.
    @param obs - El observador a agregar.
    */
  public agregarObservador(obs: Observer): void {
    this.observadores.push(obs);
  }
/**

    Quita un observador de la lista de observadores de la revista.
    @param obs - El observador a quitar.
    */
  public quitarObservador(obs: Observer): void {
    const index = this.observadores.indexOf(obs);
    if (index !== -1) {
      this.observadores.splice(index, 1);
    }
  }
/**

    Lanza un nuevo número de la revista y notifica a los observadores.
    @param numero - El nuevo número de la revista.
    */
  public lanzarNuevoNumero(numero: number): void {
    this.numero = numero;
    this.notificarObservadores();
  }
/**

    Notifica a todos los observadores de la revista sobre el nuevo número.
    */
  private notificarObservadores(): void {
    this.observadores.forEach(obs => obs.actualizar(this.numero));
  }
}
