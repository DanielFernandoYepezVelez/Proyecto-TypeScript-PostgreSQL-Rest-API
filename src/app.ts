import dotenv from "dotenv";
dotenv.config();
import "./config/database";

import express, { Application } from "express";
import morgan from "morgan";

import indexRouter from "./routes/index.routes";

class App {
  constructor(public app: Application) {}

  public settings(): void {
    this.app.set("port", process.env.PORT || 3000);
  }

  public middlewares(): void {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  public routes(): void {
    this.app.use("/api", indexRouter);
  }

  public async start(): Promise<void> {
    try {
      await this.app.listen(this.app.get("port"));
      console.log(`Sever On Port ${this.app.get("port")}`);
    } catch {
      console.log("Server Isn´t Starting");
    }
  }
}

export const app = new App(express());
