"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
//////////////////////// CLASES ////////////////////////////////
class Centro {
    constructor(id, nombre, campers) {
        this.id = id;
        this.nombre = nombre;
        this.campers = campers;
    }
}
class Rutas {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}
class Nivel {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}
class Camper {
    constructor(id, nombre, finalizado, contrato) {
        this.id = id;
        this.nombre = nombre;
        this.finalizado = finalizado;
        this.contrato = contrato;
    }
}
//////////////////////// DATOS PREDEFINIDOS ////////////////////////////////
const campus = new Centro(1, 'Campus', 0);
const trimer = new Centro(2, 'Trimer', 0);
const fertor = new Centro(3, 'fertor', 0);
const artemis = new Centro(4, 'Artemis', 0);
const apolo = new Centro(5, 'Apolo', 0);
const java = new Rutas(1, 'java');
const pyton = new Rutas(2, 'pyton');
const javaScript = new Rutas(3, 'javaScript');
const Cchart = new Rutas(4, 'Cchart');
const net = new Rutas(5, 'net');
const html = new Nivel(1, 'HTML');
const css = new Nivel(1, 'CSS');
const JS = new Nivel(1, 'JS');
const Boostrap = new Nivel(1, 'Boostrap');
//////////////////////// CONSOLA ////////////////////////////////
let campersArray = [];
//////////////////////// CONSOLA ////////////////////////////////
let opcion = -1;
while (opcion !== 0) {
    /* COLORES */
    //Resetear color
    const reset = "\x1b[0m";
    //Colores de texto
    const rojo = "\x1b[31m";
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
    opcion = Number(readlineSync.question('Ingrese su opcion: '));
    switch (opcion) {
        case 1:
            console.log(`\n${backgroundVerde + bold}-------[REGISTRAR CAMPER]-------${reset}\n`);
            let nombre = readlineSync.question('Nombre del Camper: ');
            campersArray.push(nombre);
            console.log(campersArray);
            readlineSync.question(`${italic + bold} Presione ENTER para continuar . . . ${reset}`);
            break;
        default:
            break;
    }
}
