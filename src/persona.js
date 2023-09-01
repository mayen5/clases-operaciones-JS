class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    hablar() {
      console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años de edad.`);
    }
  }

export const hablarPersona = () => {
    const persona = new Persona("Jelsin Saenz", 23);
  
    persona.hablar(); // Output: Mi nombre es Jelsin Saenz y tengo 23 años de edad.
}

  