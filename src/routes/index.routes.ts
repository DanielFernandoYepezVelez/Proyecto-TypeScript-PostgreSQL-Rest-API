import { Router } from "express";

import { indexController } from "../controllers/index.controller";

class IndexRoutes {
  constructor(public router: Router) {
    this.router.get("/users", indexController.getUsers);
    this.router.get("/user/:id", indexController.getUser);
    this.router.post("/user", indexController.createUser);
    this.router.patch("/user/:id", indexController.updateUser);
    this.router.delete("/user/:id", indexController.deleteUser);
  }
}

const indexRoutes = new IndexRoutes(Router());
export default indexRoutes.router;
