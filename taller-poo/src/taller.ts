import * as readlineSync from 'readline-sync';

//////////////////////// CLASES ////////////////////////////////
class Centro {
    constructor(
        public readonly id: Number,
        public nombre: String,
        public campers: Number
    ){}
}

class Rutas {
    constructor(
        public readonly id: Number,
        public nombre: String
    ){}
}

class Nivel {
    constructor(
        public readonly id: Number,
        public nombre: String
    ){}
}

class Camper {
    constructor(
        public readonly id: Number,
        public nombre: String,
        public finalizado: Boolean,
        public contrato: String
    ){}
}

//////////////////////// DATOS PREDEFINIDOS ////////////////////////////////

const campus = new Centro (1,'Campus',0)
const trimer = new Centro (2,'Trimer',0)
const fertor = new Centro (3,'fertor',0)
const artemis = new Centro (4,'Artemis',0)
const apolo = new Centro (5,'Apolo',0)


const java = new Rutas (1,'java')
const pyton = new Rutas (2,'pyton')
const javaScript = new Rutas (3,'javaScript')
const Cchart = new Rutas (4,'Cchart')
const net = new Rutas (5,'net')


const html = new Nivel(1,'HTML')
const css = new Nivel(1,'CSS')
const JS = new Nivel(1,'JS')
const Boostrap = new Nivel(1,'Boostrap')

//////////////////////// CONSOLA ////////////////////////////////
let campersArray = []


//////////////////////// CONSOLA ////////////////////////////////

let opcion = -1

while (opcion !== 0) {
    /* COLORES */
    //Resetear color
    const reset = "\x1b[0m";
    //Colores de texto
    const rojo = "\x1b[31m"
    //Backgroun de texto
    const backgroundRojo = "\x1b[41m";
    const backgroundVerde = "\x1b[42m";
    //Diseños de letra
    const bold = "\x1b[1m";
    const italic = "\x1b[3m";
    

    console.log(`
        ${italic + bold + backgroundRojo} SISTEMA DE INFORMACION ${reset}
        1. Registrar Camper
        2. Actualizar Camper
        3. Contratacion
        4. Campers contratados
        5. Centros
        ${rojo + bold}0. SALIR${reset}
    `);
    opcion = Number(readlineSync.question('Ingrese su opcion: '))

    switch (opcion) {
        case 1:
            console.log(`\n${backgroundVerde + bold}-------[REGISTRAR CAMPER]-------${reset}\n`);

            let nombre = readlineSync.question('Nombre del Camper: ')
            campersArray.push(nombre)
            console.log(campersArray);
            readlineSync.question(`${italic + bold} Presione ENTER para continuar . . . ${reset}`)
            break;
    
        default:
            break;
    }
}