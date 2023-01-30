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
  update: async ({ name, value, id }: Product) => {
    const product = await prisma.product.update({
      data: {
        name,
        value,
      },
      where: {
        id,
      },
    });

    return product;
  },
  listAll: async () => {
    const products = await prisma.product.findMany();
    return products;
  },
  findById: async (id: number) => {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    return product;
  },
};
