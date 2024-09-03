"use strict";
const Name = "Dayan Berrio";
const Gato = "";
console.log(Name);
if (Name == "Dayan Berrio") {
    console.log(Name);
}
let array = ["Dayan", "Berrio", "kathe", "pavas"];
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
// Hacer un Objeto y le tenemos que aplicar las normas , elementos privados , publicos , estaticos y caracteristicas de un objeto , polimorfismo , herencia , abstraccion y encapsulamiento.
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
        super("vale");
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
class Rata extends Carniceria {
    constructor(nombre, peso) {
        super();
        this.nombre = nombre;
        this.peso = peso;
        Rata.cantidad++;
        Rata.info_rata = "Nombre Rata: " + this.nombre + " Peso de la rata: " + this.peso + " Cantidad de ratas: " + Rata.cantidad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    static getCantidad() {
        return Rata.cantidad;
    }
    static setCantidad(cantidad) {
        Rata.cantidad = cantidad;
    }
    hacerSonido() {
        console.log("squirt squirt");
    }
}
Rata.cantidad = 0;
Rata.info_rata = "";
const rata1 = new Rata("Rata_Uno", 2);
console.log(rata1.getNombre());
rata1.setNombre("Dayan");
console.log(rata1.getNombre());
console.log(Rata.getCantidad());
console.log(Rata.info_rata);
rata1.hacerSonido();
