"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
class IndexRoutes {
    constructor(router) {
        this.router = router;
        this.router.get("/users", index_controller_1.indexController.getUsers);
        this.router.get("/user/:id", index_controller_1.indexController.getUser);
        this.router.post("/user", index_controller_1.indexController.createUser);
        this.router.patch("/user/:id", index_controller_1.indexController.updateUser);
        this.router.delete("/user/:id", index_controller_1.indexController.deleteUser);
    }
}
const indexRoutes = new IndexRoutes(express_1.Router());
exports.default = indexRoutes.router;
