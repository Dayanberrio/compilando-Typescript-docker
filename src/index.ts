
const Name: String = "John Doe";
const Gato: String = "";
console.log(Name);

if (Name == "John Doe") {
    console.log(Name);
}

let array: String[] = ["John", "Doe", "Jane", "Doe"];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let data of array) {

    console.log(data);
}


const suma: (a: Number, b: number) => void = () => {
    return [];
}
// const z: (a: number, b: number) => string = (a: number = 0, b: number = 10): string => {
//     let result: number = a + b;
//     return `${a}`;
// }
let x: Function = function (b: number): String {
    return "";
};

function w(): string {
    return "";
}

interface Personas {
    name: String;
    data: () => {
    };
    info: Function;
}

class Estudiante {

    name: String;

    constructor(name: String) {
        this.name = name;
    }
    public get(): String {
        return this.name;
    }

    static set(): void {

    }

    private rm(): void {
    }
    // 
}

class Notas extends Estudiante {
    nota: Number | null;
    constructor(nota: Number) {
        super("Camilo");
        this.nota = nota;
    }

    public set(): void {
        this.nota = null;
    }
}

abstract class mr {
    public rm() {

    }
}

class po extends mr {
    public rm() {

    }
}
abstract class Carniceria {
    abstract hacerSonido(): void;
}
class Pollo extends Carniceria {
    private nombre: string;
    public peso: number;
    static cantidad: number = 0;
    static info_pollo: string = "";
    constructor(nombre: string, peso: number) {
        super();
        this.nombre = nombre;
        this.peso = peso;
        Pollo.cantidad++;
        Pollo.info_pollo = "Nombre Pollo: " + this.nombre + " Peso del Pollo: " + this.peso + " Cantidad de Pollos: " + Pollo.cantidad;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public static getCantidad(): number {
        return Pollo.cantidad;
    }
    public static setCantidad(cantidad: number): void {
        Pollo.cantidad = cantidad;
    }
    public hacerSonido(): void {
        console.log("Pio Pio");
    }
}
const pollo1 = new Pollo("Pollo_Uno", 2);
console.log(pollo1.getNombre());
pollo1.setNombre("Cristian");
console.log(pollo1.getNombre());
console.log(Pollo.getCantidad());
console.log(Pollo.info_pollo);
pollo1.hacerSonido();


