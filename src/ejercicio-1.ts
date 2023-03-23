/**

    Tipo para definir las conversiones de unidades
    */
type ConversionTable = {
  [key: string]: number;
};

/**
    
        Tabla de conversiones para unidades de longitud
        */
const LengthConversions: ConversionTable = {
  inches: 1,
  feet: 12,
  yards: 36,
  miles: 63360,
};

/**
    
        Clase que representa una cantidad de medida en unidades imperiales de longitud
        */
export class ImperialLength {
  private _value: number; // valor en unidades base (pulgadas)

  /**
    
        Constructor de la clase
        @param value Valor de la cantidad medida
        @param unit Unidad de medida (inches, feet, yards o miles)
        */
  constructor(value: number, unit: string) {
    if (!(unit.toLowerCase() in LengthConversions)) {
      throw new Error("Invalid unit");
    }
    this._value = value * LengthConversions[unit.toLowerCase()];
  }

  /**
    
        Getter para obtener el valor en pulgadas
        @returns Valor en pulgadas
        */
  get inches(): number {
    return this._value;
  }

  /**
    
        Getter para obtener el valor en pies
        @returns Valor en pies
        */
  get feet(): number {
    return this._value / LengthConversions["feet"];
  }

  /**
    
        Getter para obtener el valor en yardas
        @returns Valor en yardas
        */
  get yards(): number {
    return this._value / LengthConversions["yards"];
  }

  /**
    
        Getter para obtener el valor en millas
        @returns Valor en millas
        */
  get miles(): number {
    return this._value / LengthConversions["miles"];
  }

  /**
    
        Setter para establecer el valor en pulgadas
        @param value Valor en pulgadas
        */
  set inches(value: number) {
    this._value = value * LengthConversions["inches"];
  }

  /**
    
        Setter para establecer el valor en pies
        @param value Valor en pies
        */
  set feet(value: number) {
    this._value = value * LengthConversions["feet"];
  }

  /**
    
        Setter para establecer el valor en yardas
        @param value Valor en yardas
        */
  set yards(value: number) {
    this._value = value * LengthConversions["yards"];
  }

  /**
    
        Setter para establecer el valor en millas
        @param value Valor en millas
        */
  set miles(value: number) {
    this._value = value * LengthConversions["miles"];
  }
}

/**

    Represents an imperial mass value that can be converted between different units.
    /
    export class ImperialMass {
    /*
        Creates a new instance of ImperialMass.
        @param value - The value to be converted.
        @param unit - The unit of the value. Valid options are: ounces, pounds, stones, hundredweights, and tons.
        @throws An error if an invalid unit is provided.
        */
export class ImperialMass {
  private _ounces: number;
  private _value: number;

  constructor(value: number, unit: string) {
    switch (unit.toLowerCase()) {
      case "ounces":
        this._value = value;
        break;
      case "pounds":
        this._value = value * 16;
        break;
      case "stones":
        this._value = value * 224;
        break;
      case "hundredweights":
        this._value = value * 35840;
        break;
      case "tons":
        this._value = value * 358400;
        break;
      default:
        throw new Error("Invalid unit");
    }

    this._ounces = this._value * 16;
  }
  /**

    The value of the ImperialMass instance in ounces.
    */
  get ounces(): number {
    return this._ounces;
  }
  /**

    The value of the ImperialMass instance in stones.
    */
  get pounds(): number {
    return this._value;
  }

  get stones(): number {
    return this._value / 14;
  }
  /**

    The value of the ImperialMass instance in hundredweights.
    */
  get hundredweights(): number {
    return this._value / 112;
  }
  /**

    The value of the ImperialMass instance in tons.
    */
  get tons(): number {
    return this._value / 2240;
  }
  /**

    Sets the value of the ImperialMass instance in ounces.
    @param value - The new value in ounces.
    */
  set ounces(value: number) {
    this._ounces = value;
    this._value = value / 16;
  }
  /**

    Sets the value of the ImperialMass instance in pounds.
    @param value - The new value in pounds.
    */
  set pounds(value: number) {
    this._value = value;
    this._ounces = value * 16;
  }
  /**

    Sets the value of the ImperialMass instance in stones.
    @param value - The new value in stones.
    */
  set stones(value: number) {
    this._value = value * 14;
    this._ounces = this._value * 16;
  }
  /**

    Sets the value of the ImperialMass instance in hundredweights.
    @param value - The new value in hundredweights.
    */
  set hundredweights(value: number) {
    this._value = value * 112;
    this._ounces = this._value * 16;
  }
  /**

    Sets the value of the ImperialMass instance in tons.
    @param value - The new value in tons.
    */
  set tons(value: number) {
    this._value = value * 2240;
    this._ounces = this._value * 16;
  }
}
