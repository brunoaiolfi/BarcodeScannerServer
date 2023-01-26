import { User } from "@prisma/client";
import { Request, Response } from "express";
import { UserService } from "../service/user";
import { generateHash } from "../utils/generateHash";
import { generateToken } from "../utils/generateToken";

export const UserController = {
  create: async (req: Request, res: Response) => {
    try {
      const { name, email, password }: User = req.body;

      if (!email || !name || !password) {
        return res.status(400).send("Preencha todos os campos corretamente!");
      }

      const existentUser = await UserService.getByEmail(email);

      if (existentUser?.id) {
        return res.status(409).send("Usuário já cadastrado!");
      }

      const hashedPassword = generateHash(password);

      const response = await UserService.create({
        email,
        name,
        password: hashedPassword,
        id: -1,
      });

      return res.json({ ...response, password: "" });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro interno!");
    }
  },
  login: async (req: Request, res: Response) => {
    try {
      const { email, password }: User = req.body;

      if (!email || !password) {
        return res.status(400).send("Preencha todos os campos corretamente!");
      }

      const hashedPassword = generateHash(password);

      const existentUser = await UserService.getByEmailAndPassword(
        email,
        hashedPassword
      );

      if (!existentUser?.id) {
        return res.status(404).send("Usuário não encontrado!");
      }

      const token = generateToken(existentUser);

      return res.status(200).send({
        ...existentUser,
        password: "",
        token,
        loggedAt: new Date().toISOString(),
      });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro interno");
    }
  },
};
