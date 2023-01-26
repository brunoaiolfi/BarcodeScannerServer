import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();
export const ProductService = {
  create: async ({ name, value }: Product) => {
    const product = await prisma.product.create({
      data: {
        name,
        value,
      },
    });

    return product;
  },
};
