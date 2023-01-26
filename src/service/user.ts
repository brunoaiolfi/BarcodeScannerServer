import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";
import { generateHash } from "../utils/generateHash";

const prisma = new PrismaClient();

export const UserService = {
  getByEmailAndPassword: async (email: string, password: string) => {
    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });

    return user;
  },
  getByEmail: async (email: string) => {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  },

  create: async ({ email, name, password }: User) => {
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    return newUser;
  },
};
