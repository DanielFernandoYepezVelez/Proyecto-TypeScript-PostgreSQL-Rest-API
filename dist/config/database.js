"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const pg_1 = require("pg");
/* La Configuración De La Base De Datos La Guardo En El Atributo Global Pool Para Ejecutar Las Sentencias De Las Bases De Datos En Los Controladores */
class Connection {
    constructor() {
        this.connected();
    }
    connected() {
        this.pool = new pg_1.Pool({
            user: "postgres",
            host: "localhost",
            password: process.env.DB_PASSWORD,
            database: "typescriptdatabase",
            port: 5432,
        });
        if (this.pool)
            console.log(`>>> Database Is Connected`);
        else
            console.log(`Fallo La Conexión Con Postgres`);
    }
}
exports.connection = new Connection();
