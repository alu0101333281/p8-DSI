import { Observer } from './observer';

export class Revista {
  private observadores: Observer[] = [];
  private numero: number = 0;

  public agregarObservador(obs: Observer): void {
    this.observadores.push(obs);
  }

  public quitarObservador(obs: Observer): void {
    const index = this.observadores.indexOf(obs);
    if (index !== -1) {
      this.observadores.splice(index, 1);
    }
  }

  public lanzarNuevoNumero(numero: number): void {
    this.numero = numero;
    this.notificarObservadores();
  }

  private notificarObservadores(): void {
    this.observadores.forEach(obs => obs.actualizar(this.numero));
  }
}
