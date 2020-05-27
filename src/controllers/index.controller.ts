import { Request, Response } from "express";
import { QueryResult } from "pg";

import { connection } from "../config/database";

class IndexController {
  public async getUsers(req: Request, res: Response): Promise<Response<JSON>> {
    const consulta: QueryResult = await connection.pool.query(
      "SELECT * FROM users"
    );
    const users = consulta.rows;
    return res.json(users);
  }

  public async getUser(req: Request, res: Response): Promise<Response<JSON>> {
    const { id } = req.params;

    const consulta: QueryResult = await connection.pool.query(
      "SELECT * FROM users WHERE id = $1",
      [id]
    );
    const user = consulta.rows;

    return res.json(user);
  }

  public async createUser(
    req: Request,
    res: Response
  ): Promise<Response<JSON>> {
    const { name, email } = req.body;

    await connection.pool.query(
      "INSERT INTO users (name, email) VALUES($1, $2)",
      [name, email]
    );

    return res.json({
      message: "User Saved Successfuly!",
    });
  }

  public async updateUser(
    req: Request,
    res: Response
  ): Promise<Response<JSON>> {
    const { id } = req.params;
    const { name, email } = req.body;

    await connection.pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3",
      [name, email, id]
    );

    return res.json({
      message: "User Updated Successfuly!",
    });
  }

  public async deleteUser(
    req: Request,
    res: Response
  ): Promise<Response<JSON>> {
    const { id } = req.params;

    await connection.pool.query("DELETE FROM users WHERE id = $1", [id]);

    return res.json({
      mesage: "User Deleted Successfuly!",
    });
  }
}

export const indexController = new IndexController();
