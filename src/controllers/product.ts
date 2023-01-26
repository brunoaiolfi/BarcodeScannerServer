import { Product } from "@prisma/client";
import { Request, Response } from "express";
import { ProductService } from "../service/product";

export const ProductController = {
  create: async (req: Request, res: Response) => {
    try {
      const { name, value }: Product = req.body;

      if (!name || !value) {
        return res.status(400).send("Preencha todos os campos corretamente!");
      }

      const response = await ProductService.create({
        name,
        value,
        id: -1,
      });

      return res.status(200).send({ ...response });
    } catch (error) {
      return res.status(500).send("Ocorreu um erro interno!");
    }
  },
};
