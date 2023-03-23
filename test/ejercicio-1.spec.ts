import "mocha";
import { expect } from "chai";
import { ImperialLength, ImperialMass } from "../src/ejercicio-1";

describe("ImperialLength", function () {
  describe("#constructor", function () {
    it("should create an ImperialLength object with correct inches value", function () {
      const length = new ImperialLength(12, "inches");
      expect(length.inches).to.equal(12);
    });

    it("should create an ImperialLength object with correct feet value", function () {
      const length = new ImperialLength(1, "feet");
      expect(length.feet).to.equal(1);
    });

    it("should create an ImperialLength object with correct yards value", function () {
      const length = new ImperialLength(1, "yards");
      expect(length.yards).to.equal(1);
    });

    it("should create an ImperialLength object with correct miles value", function () {
      const length = new ImperialLength(1, "miles");
      expect(length.miles).to.equal(1);
    });

    it("should throw an error when given an invalid unit", function () {
      expect(() => new ImperialLength(1, "invalid")).to.throw(
        Error,
        "Invalid unit"
      );
    });
  });

  describe("#getters", function () {
    it("should return the correct inches value", function () {
      const length = new ImperialLength(12, "inches");
      expect(length.inches).to.equal(12);
    });

    it("should return the correct feet value", function () {
      const length = new ImperialLength(1, "feet");
      expect(length.feet).to.equal(1);
    });

    it("should return the correct yards value", function () {
      const length = new ImperialLength(1, "yards");
      expect(length.yards).to.equal(1);
    });

    it("should return the correct miles value", function () {
      const length = new ImperialLength(1, "miles");
      expect(length.miles).to.equal(1);
    });
  });

  describe("#setters", function () {
    it("should set the inches value correctly", function () {
      const length = new ImperialLength(12, "inches");
      length.inches = 24;
      expect(length.inches).to.equal(24);
      expect(length.feet).to.equal(2);
    });

    it("should set the feet value correctly", function () {
      const length = new ImperialLength(1, "feet");
      length.feet = 2;
      expect(length.feet).to.equal(2);
      expect(length.inches).to.equal(24);
    });

    it("should set the yards value correctly", function () {
      const length = new ImperialLength(1, "yards");
      length.yards = 2;
      expect(length.yards).to.equal(2);
      expect(length.feet).to.equal(6);
    });

    it("should set the miles value correctly", function () {
      const length = new ImperialLength(1, "miles");
      length.miles = 2;
      expect(length.miles).to.equal(2);
      expect(length.feet).to.equal(10560);
    });
  });
});

describe("ImperialMass", function () {
  describe("#constructor", function () {
    it("should create an ImperialMass object with correct ounces value", function () {
      const mass = new ImperialMass(16, "ounces");
      expect(mass.ounces).to.equal(256);
    });

    it("should create an ImperialMass object with correct pounds value", function () {
      const mass = new ImperialMass(1, "pounds");
      expect(mass.pounds).to.equal(16);
    });

    it("should create an ImperialMass object with correct stones value", function () {
      const mass = new ImperialMass(1, "stones");
      expect(mass.stones).to.equal(16);
    });

    it("should create an ImperialMass object with correct hundredweights value", function () {
      const mass = new ImperialMass(1, "hundredweights");
      expect(mass.hundredweights).to.equal(320);
    });

    it("should create an ImperialMass object with correct tons value", function () {
      const mass = new ImperialMass(1, "tons");
      expect(mass.tons).to.equal(160);
    });

    it("should throw an error when given an invalid unit", function () {
      expect(() => new ImperialMass(1, "invalid")).to.throw(
        Error,
        "Invalid unit"
      );
    });
  });

  describe("#getters", function () {
    it("should return the correct ounces value", function () {
      const mass = new ImperialMass(16, "ounces");
      expect(mass.ounces).to.equal(256);
    });

    it("should return the correct pounds value", function () {
      const mass = new ImperialMass(1, "pounds");
      expect(mass.pounds).to.equal(16);
    });

    it("should return the correct stones value", function () {
      const mass = new ImperialMass(14, "pounds");
      expect(mass.stones).to.equal(16);
    });

    it("should return the correct hundredweights value", function () {
      const mass = new ImperialMass(112, "pounds");
      expect(mass.hundredweights).to.equal(16);
    });

    it("should return the correct tons value", function () {
      const mass = new ImperialMass(2240, "pounds");
      expect(mass.tons).to.equal(16);
    });
  });

  describe("#setters", function () {
    it("should set the ounces value correctly", function () {
      const mass = new ImperialMass(16, "ounces");
      mass.ounces = 32;
      expect(mass.ounces).to.equal(32);
      expect(mass.pounds).to.equal(2);
    });

    it("should set the pounds value correctly", function () {
      const mass = new ImperialMass(1, "pounds");
      mass.pounds = 2;
      expect(mass.pounds).to.equal(2);
      expect(mass.ounces).to.equal(32);
    });

    it("should set the stones value correctly", function () {
      const mass = new ImperialMass(1, "stones");
      mass.stones = 2;
      expect(mass.stones).to.equal(2);
      expect(mass.pounds).to.equal(28);
    });
  });
});
