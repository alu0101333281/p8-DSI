import { Observer } from './observer';
import { Revista } from './revista';
/**

    Clase Suscriptor que implementa la interfaz Observer y representa a un suscriptor de una revista.
    @implements {Observer}
    */
export class Suscriptor implements Observer {
  /**

    Nombre del suscriptor.
    @private
    @type {string}
    */
  private nombre: string;
  /**

    Número de la revista más reciente recibida por el suscriptor.
    @public
    @type {number}
    */
  public numeroRevista: number = 0;
/**

    Crea una instancia de Suscriptor.
    @constructor
    @param {string} nombre - Nombre del suscriptor.
    */
  constructor(nombre: string) {
    this.nombre = nombre;
  }
/**

    Actualiza al suscriptor con el número de la nueva revista disponible.
    @public
    @param {number} numero - Número de la nueva revista disponible.
    @returns {void}
    */
  public actualizar(numero: number): void {
    console.log(`${this.nombre}, la nueva revista está disponible. Número: ${numero}`);
    this.numeroRevista = numero;
  }
/**

    Suscribe al suscriptor a una revista.
    @public
    @param {Revista} revista - Revista a la que se desea suscribir el suscriptor.
    @returns {void}
    */
  public suscribirseARevista(revista: Revista): void {
    revista.agregarObservador(this);
  }

  public cancelarSuscripcion(revista: Revista): void {
    revista.quitarObservador(this);
  }
}

