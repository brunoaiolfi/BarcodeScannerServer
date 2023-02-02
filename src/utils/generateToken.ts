import { User } from "@prisma/client";
import { config } from "dotenv";
import { sign } from "jsonwebtoken";
import { ITokenResponse } from "../interfaces/tokenResponse";

config();

const { SECRET } = process.env;
if (!SECRET) throw new Error("SECRET not found!");

export function generateToken(user: User) {
  const { email, id, name } = user;

  const tokenData: ITokenResponse = {
    email,
    name,
    id,
  };

  const token = sign(tokenData, String(SECRET), { expiresIn: "12h" });
  return token;
}
