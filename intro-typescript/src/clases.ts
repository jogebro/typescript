import axios from "axios"
import { APISpacesX } from "./interfaces/apispacex-response.interface";

export class Astronauta {

    constructor(
        public id:Number, 
        public nombre:String,
        private _record:String,
        public recompensa:String,
        public mission:String[] = []
        )
        {}

        async getLaunches(){
            const url = "https://api.spacexdata.com/v3/launches"
            const {data} = await axios.get<APISpacesX[]>(url)
            let conta = 0
            data.forEach((elem:any) => {
                const {mission_name} = elem
                this.mission[conta] = mission_name
                conta++
            });
            console.log(this.mission);
            return this.mission
        }

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

astronautaPhidolly.getLaunches()