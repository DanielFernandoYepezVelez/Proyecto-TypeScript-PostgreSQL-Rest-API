import { Pool } from "pg";

/* La Configuración De La Base De Datos La Guardo En El Atributo Global Pool Para Ejecutar Las Sentencias De Las Bases De Datos En Los Controladores */
class Connection {
  public pool: any;

  constructor() {
    this.connected();
  }

  public connected(): any {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      password: process.env.DB_PASSWORD,
      database: "typescriptdatabase",
      port: 5432,
    });

    if (this.pool) console.log(`>>> Database Is Connected`);
    else console.log(`Fallo La Conexión Con Postgres`);
  }
}

export const connection = new Connection();
