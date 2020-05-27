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
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const database_1 = require("../config/database");
class IndexController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consulta = yield database_1.connection.pool.query("SELECT * FROM users");
            const users = consulta.rows;
            return res.json(users);
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consulta = yield database_1.connection.pool.query("SELECT * FROM users WHERE id = $1", [id]);
            const user = consulta.rows;
            return res.json(user);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email } = req.body;
            yield database_1.connection.pool.query("INSERT INTO users (name, email) VALUES($1, $2)", [name, email]);
            return res.json({
                message: "User Saved Successfuly!",
            });
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, email } = req.body;
            yield database_1.connection.pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name, email, id]);
            return res.json({
                message: "User Updated Successfuly!",
            });
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.connection.pool.query("DELETE FROM users WHERE id = $1", [id]);
            return res.json({
                mesage: "User Deleted Successfuly!",
            });
        });
    }
}
exports.indexController = new IndexController();
