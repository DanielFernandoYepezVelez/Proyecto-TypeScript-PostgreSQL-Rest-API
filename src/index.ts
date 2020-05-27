import { app } from "./app";

class Main {
  constructor() {
    this.init();
  }

  public init(): void {
    app.settings();
    app.middlewares();
    app.routes();
    app.start();
  }
}

new Main();
