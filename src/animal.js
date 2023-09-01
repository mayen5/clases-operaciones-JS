class Animal {
    constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
    }
  
    hacerSonido() {
      console.log(`${this.tipo}: ${this.nombre} hace un sonido.`);
    }
  }
  
class Gato extends Animal {
    constructor(nombre, tipo) {
      super(nombre, tipo);
    }
  
    hacerSonido() {
      console.log(`Meow!`);
    }
  }
  
class Perro extends Animal {
    constructor(nombre, tipo) {
      super(nombre, tipo);
    }
  
    hacerSonido() {
      console.log(`Woof!`);
    }
  }
  

 export const sonidoAnimales = () => {
    
    const animal = new Animal("Rex", "animal");
    const gato = new Gato("Kitty", "gato");
    const perro = new Perro("Spot", "perro");
      
    animal.hacerSonido(); // Salida: tipo: nombre hace un sonido!
    gato.hacerSonido();    // Salida: Meow!
    perro.hacerSonido();    // Salida: Woof!
}