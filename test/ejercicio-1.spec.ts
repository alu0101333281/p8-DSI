import "mocha";
import { expect } from "chai";
import { Revista } from "../src/ejercicio-1/revista";
import { Suscriptor } from "../src/ejercicio-1/suscriptor";

describe("Revista", () => {
  let revista: Revista;

  beforeEach(() => {
    revista = new Revista();
  });

  it("debería agregar y quitar observadores", () => {
    const observador1 = new Suscriptor("Juan");
    const observador2 = new Suscriptor("Pedro");

    expect(revista.agregarObservador(observador1)).to.not.throw;
    expect(revista.agregarObservador(observador2)).to.not.throw;

    expect(revista.quitarObservador(observador1)).to.not.throw;
    expect(revista.quitarObservador(observador2)).to.not.throw;
  });

  it("debería notificar a los observadores cuando se lance un nuevo número", () => {
    const observador1 = new Suscriptor("Juan");
    const observador2 = new Suscriptor("Pedro");
    const nuevoNumero = 5;

    revista.agregarObservador(observador1);
    revista.agregarObservador(observador2);

    revista.lanzarNuevoNumero(nuevoNumero);

    expect(observador1.numeroRevista).to.equal(nuevoNumero);
    expect(observador2.numeroRevista).to.equal(nuevoNumero);
  });
  it("debería lanzar un error al intentar agregar un observador ya existente", () => {
    const observador = new Suscriptor("Juan");
    revista.agregarObservador(observador);

    expect(revista.agregarObservador(observador)).to.eql(undefined);
  });

  it("debería lanzar un error al intentar quitar un observador inexistente", () => {
    const observador1 = new Suscriptor("Juan");
    const observador2 = new Suscriptor("Pedro");
    revista.agregarObservador(observador1);

    expect(revista.quitarObservador(observador2)).to.eql(undefined);
  });

  it("debería lanzar un error al intentar lanzar un número inválido", () => {
    const numeroInvalido = -1;

    expect(revista.lanzarNuevoNumero(numeroInvalido)).to.eql(undefined);
  });
});

describe("Suscriptor", () => {
  it("debe actualizar el número de la última revista recibida", () => {
    const revista = new Revista();
    const suscriptor = new Suscriptor("Juan");
    suscriptor.suscribirseARevista(revista);
    revista.lanzarNuevoNumero(1);
    expect(suscriptor.numeroRevista).to.equal(1);
  });

  it("debe cancelar la suscripción a la revista", () => {
    const revista = new Revista();
    const suscriptor = new Suscriptor("Juan");
    suscriptor.suscribirseARevista(revista);
    suscriptor.cancelarSuscripcion(revista);
    revista.lanzarNuevoNumero(1);
    expect(suscriptor.numeroRevista).to.equal(0);
  });

  it("debe lanzar un error al intentar suscribirse a una revista que no es una instancia de la clase Revista", () => {
    const suscriptor = new Suscriptor("Juan");
    expect(() => suscriptor.suscribirseARevista({} as Revista)).to.throw(
      TypeError
    );
  });

  it("debe lanzar un error al intentar suscribirse a una revista no válida", () => {
    const revista = new Revista();
    const suscriptor = new Suscriptor("Juan");
    expect(() => suscriptor.suscribirseARevista(null)).to.throw();
  });

  it("debe lanzar un error al intentar cancelar la suscripción a una revista no válida", () => {
    const revista = new Revista();
    const suscriptor = new Suscriptor("Juan");
    expect(() => suscriptor.cancelarSuscripcion(null)).to.throw();
  });
});
