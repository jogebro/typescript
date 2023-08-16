//Object (array)
let goleadores:string[] = ["Joel", "Phidolly", "Maicol"]

let goles:number[] = [10, -5, 7]

console.log(`Goleadores: ${goleadores}`);
console.log(`Goles: ${goleadores}`);

let corners:Number[] = []

//Metodo alternativo para definir arrays en Typescript
let penaltis: Array<boolean> = [true]
console.log(`Joel desperdicio 2 penaltis: ${penaltis}`);

//Autocompletar con metodos aplicables segun tipo de dato del array
console.log( goleadores.map(ele=>ele.toString()))

//Object
let goleadoresId:Number[] = [7, 10, 17, 9, 11]

goleadoresId.push(+'1')
console.log(goleadoresId);

//Objetos
const songs = {
    id: 1,
    name: "Exceeding Joy"
}

console.log(songs);

const singer:{
    readonly id:Number,
    nombre: String,
    edad?: Number
} = {
    id: 1,
    nombre: "Joel"
}

//singer.id = 2
console.log(singer.id);
