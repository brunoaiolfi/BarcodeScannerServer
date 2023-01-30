import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";

const prisma = new PrismaClient();

export const UserService = {
  listAll: async () => {
    const users = await prisma.user.findMany();
    return users.map((user) => ({ ...user, password: "" }));
  },

  findByEmailAndPassword: async (email: string, password: string) => {
    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });

    return user;
  },

  findByEmail: async (email: string) => {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  },

  findById: async (id: number) => {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  },

  create: async ({ email, name, password }: User) => {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    return user;
  },

  update: async ({ email, id, name, password }: User) => {
    const user = await prisma.user.update({
      data: {
        email,
        name,
        password,
      },
      where: {
        id,
      },
    });

    return user;
  },
};
