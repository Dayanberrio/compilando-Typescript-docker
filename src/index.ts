
const Name: String = "Dayan Berrio";
const Gato: String = "";
console.log(Name);

if (Name == "Dayan Berrio") {
    console.log(Name);
}

let array: String[] = ["Dayan", "Berrio", "kathe", "pavas"];

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
// Hacer un Objeto y le tenemos que aplicar las normas , elementos privados , publicos , estaticos y caracteristicas de un objeto , polimorfismo , herencia , abstraccion y encapsulamiento.
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
        super("vale");
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
class Rata extends Carniceria {
    private nombre: string;
    public peso: number;
    static cantidad: number = 0;
    static info_rata: string = "";
    constructor(nombre: string, peso: number) {
        super();
        this.nombre = nombre;
        this.peso = peso;
        Rata.cantidad++;
        Rata.info_rata = "Nombre Rata: " + this.nombre + " Peso de la rata: " + this.peso + " Cantidad de ratas: " + Rata.cantidad;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public static getCantidad(): number {
        return Rata.cantidad;
    }
    public static setCantidad(cantidad: number): void {
        Rata.cantidad = cantidad;
    }
    public hacerSonido(): void {
        console.log("squirt squirt");
    }
}
const rata1 = new Rata("Rata_Uno", 2);
console.log(rata1.getNombre());
rata1.setNombre("Dayan");
console.log(rata1.getNombre());
console.log(Rata.getCantidad());
console.log(Rata.info_rata);
rata1.hacerSonido();



