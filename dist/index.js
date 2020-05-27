"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
class Main {
    constructor() {
        this.init();
    }
    init() {
        app_1.app.settings();
        app_1.app.middlewares();
        app_1.app.routes();
        app_1.app.start();
    }
}
new Main();
