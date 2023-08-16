class Astronauta {

    constructor(
        public id:Number, 
        public nombre:String,
        private _record:String,
        public recompensa:String
        )
        {}

        recompensas(record:String){
            if (record === "Artemis") {
                this.recompensa = "Felicidades ganaste un panzerotti"
                return this.recompensa
            }
        }

        set record(record:String){
            this._record = record
        }

        get record():String{
            return this._record
        }
}

//Via constructor
const astronautaPhidolly = new Astronauta(1, "Phidolly Ojeda", "Santa Marta", "NINGUNA")

// GANADOR
astronautaPhidolly.recompensas("Artemis")

//setter
astronautaPhidolly.record = "Artemis"
console.log(`Record via setter de Phidolly: '${astronautaPhidolly.record}'`);

console.log(`Recompensa por el record: ${astronautaPhidolly.recompensa}`);


