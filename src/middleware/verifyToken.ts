import { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import { verify } from "jsonwebtoken";
import { ITokenResponse } from "../interfaces/tokenResponse";

config();

const { SECRET } = process.env;
if (!SECRET) throw new Error("SECRET não encontrado nas variáveis de ambiente");

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const bearerHeader = req.headers.authorization;

  if (!bearerHeader || typeof bearerHeader !== "string") {
    return res.status(401).send("Token inválido!");
  }

  const token = bearerHeader.replace("Bearer", "");

  try {
    const data = verify(token, String(SECRET)) as ITokenResponse;

    res.locals.email = data.email;
    res.locals.id = data.id;
    res.locals.name = data.name;

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send("Token inválido!");
  }
}
