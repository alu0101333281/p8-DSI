import "mocha";
import { expect } from "chai";
import { Revista } from "../src/ejercicio-1/revista";
import { Suscriptor } from "../src/ejercicio-1/suscriptor";


describe('Revista', () => {
  let revista: Revista;

  beforeEach(() => {
    revista = new Revista();
  });

  it('debería agregar y quitar observadores', () => {
    const observador1 = new Suscriptor('Juan');
    const observador2 = new Suscriptor('Pedro');
    
    expect(revista.agregarObservador(observador1)).to.not.throw;
    expect(revista.agregarObservador(observador2)).to.not.throw;

    expect(revista.quitarObservador(observador1)).to.not.throw;
    expect(revista.quitarObservador(observador2)).to.not.throw;
  });

  it('debería notificar a los observadores cuando se lance un nuevo número', () => {
    const observador1 = new Suscriptor('Juan');
    const observador2 = new Suscriptor('Pedro');
    const nuevoNumero = 5;

    revista.agregarObservador(observador1);
    revista.agregarObservador(observador2);

    revista.lanzarNuevoNumero(nuevoNumero);

    expect(observador1.numeroRevista).to.equal(nuevoNumero);
    expect(observador2.numeroRevista).to.equal(nuevoNumero);
  });
});



describe('Suscriptor', () => {
  it('debe actualizar el número de la última revista recibida', () => {
    const revista = new Revista();
    const suscriptor = new Suscriptor('Juan');
    suscriptor.suscribirseARevista(revista);
    revista.lanzarNuevoNumero(1);
    expect(suscriptor.numeroRevista).to.equal(1);
  });

  it('debe cancelar la suscripción a la revista', () => {
    const revista = new Revista();
    const suscriptor = new Suscriptor('Juan');
    suscriptor.suscribirseARevista(revista);
    suscriptor.cancelarSuscripcion(revista);
    revista.lanzarNuevoNumero(1);
    expect(suscriptor.numeroRevista).to.equal(0);
  });
});


