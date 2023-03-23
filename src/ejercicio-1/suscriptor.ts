import { Observer } from './observer';
import { Revista } from './revista';

export class Suscriptor implements Observer {
  private nombre: string;
  public numeroRevista: number = 0;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public actualizar(numero: number): void {
    console.log(`${this.nombre}, la nueva revista está disponible. Número: ${numero}`);
    this.numeroRevista = numero;
  }

  public suscribirseARevista(revista: Revista): void {
    revista.agregarObservador(this);
  }

  public cancelarSuscripcion(revista: Revista): void {
    revista.quitarObservador(this);
  }
}

