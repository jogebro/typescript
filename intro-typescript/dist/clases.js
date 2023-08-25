"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Astronauta = void 0;
const axios_1 = __importDefault(require("axios"));
class Astronauta {
    constructor(id, nombre, _record, recompensa, mission = []) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this.recompensa = recompensa;
        this.mission = mission;
    }
    getLaunches() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = "https://api.spacexdata.com/v3/launches";
            const { data } = yield axios_1.default.get(url);
            let conta = 0;
            data.forEach((elem) => {
                const { mission_name } = elem;
                this.mission[conta] = mission_name;
                conta++;
            });
            console.log(this.mission);
            return this.mission;
        });
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
exports.Astronauta = Astronauta;
//Via constructor
const astronautaPhidolly = new Astronauta(1, "Phidolly Ojeda", "Santa Marta", "NINGUNA");
// GANADOR
astronautaPhidolly.recompensas("Artemis");
//setter
astronautaPhidolly.record = "Artemis";
console.log(`Record via setter de Phidolly: '${astronautaPhidolly.record}'`);
console.log(`Recompensa por el record: ${astronautaPhidolly.recompensa}`);
astronautaPhidolly.getLaunches();
