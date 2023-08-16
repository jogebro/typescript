interface Song{
    id: Number,
    name: String,
    year: Number,
    album?: String
}

const amor:Song = {
    id: 1,
    name: "love",
    year: 1998,
    album: "love for all"
}

const confianza:Song = {
    id: 2,
    name: "trust",
    year: 2016
}

console.log(amor.album);
console.log(confianza.year);
