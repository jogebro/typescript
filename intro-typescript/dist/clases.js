"use strict";
class Astronauta {
    constructor(id, nombre, _record, recompensa) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this.recompensa = recompensa;
    }
    recompensas(record) {
        if (record === "Artemis") {
            this.recompensa = "Felicidades ganaste un panzerotti";
            return this.recompensa;
        }
    }
    set record(record) {
        this._record = record;
    }
    get record() {
        return this._record;
    }
}
//Via constructor
const astronautaPhidolly = new Astronauta(1, "Phidolly Ojeda", "Santa Marta", "NINGUNA");
// GANADOR
astronautaPhidolly.recompensas("Artemis");
//setter
astronautaPhidolly.record = "Artemis";
console.log(`Record via setter de Phidolly: '${astronautaPhidolly.record}'`);
console.log(`Recompensa por el record: ${astronautaPhidolly.recompensa}`);
