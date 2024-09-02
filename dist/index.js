"use strict";
const Name = "John Doe";
const Gato = "";
console.log(Name);
if (Name == "John Doe") {
    console.log(Name);
}
let array = ["John", "Doe", "Jane", "Doe"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for (let data of array) {
    console.log(data);
}
const suma = () => {
    return [];
};
// const z: (a: number, b: number) => string = (a: number = 0, b: number = 10): string => {
//     let result: number = a + b;
//     return `${a}`;
// }
let x = function (b) {
    return "";
};
function w() {
    return "";
}
class Estudiante {
    constructor(name) {
        this.name = name;
    }
    get() {
        return this.name;
    }
    static set() {
    }
    rm() {
    }
}
class Notas extends Estudiante {
    constructor(nota) {
        super("Camilo");
        this.nota = nota;
    }
    set() {
        this.nota = null;
    }
}
class mr {
    rm() {
    }
}
class po extends mr {
    rm() {
    }
}
class Carniceria {
}
class Pollo extends Carniceria {
    constructor(nombre, peso) {
        super();
        this.nombre = nombre;
        this.peso = peso;
        Pollo.cantidad++;
        Pollo.info_pollo = "Nombre Pollo: " + this.nombre + " Peso del Pollo: " + this.peso + " Cantidad de Pollos: " + Pollo.cantidad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    static getCantidad() {
        return Pollo.cantidad;
    }
    static setCantidad(cantidad) {
        Pollo.cantidad = cantidad;
    }
    hacerSonido() {
        console.log("Pio Pio");
    }
}
Pollo.cantidad = 0;
Pollo.info_pollo = "";
const pollo1 = new Pollo("Pollo_Uno", 2);
console.log(pollo1.getNombre());
pollo1.setNombre("Cristian");
console.log(pollo1.getNombre());
console.log(Pollo.getCantidad());
console.log(Pollo.info_pollo);
pollo1.hacerSonido();
