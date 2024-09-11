// import { User } from "@/controllers/user";
// import { userService } from "@/service/user";
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { UserType } from "@/backends/types";

const prisma = new PrismaClient();
// const user = new User();

const hashingPassword = async (password: string) => {
  if (!password) {
    return;
  } else {
    const salt = 8;
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  }
};

const verifyPassword = async (password: string, hashPassword: string) => {
  return await bcrypt.compare(password, hashPassword);
};

const CreateIdRandom = () => {
  const angka = Math.floor(Math.random() * 9999999) + 1;
  return angka;
};

interface user {
  password: string;
  name: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        const users = await prisma.user.findMany();
        res.status(200).json(users);
        if (!users) {
          res.status(404).json({ message: "No users found" });
        }
      case "POST":
        // await user.Create(req, res)
        const { name, password,} = req.body;
        if (!name || !password) {
          return;
        } else {
          const hashedPassword: string = (await hashingPassword(
            password
          )) as never;
          const id = CreateIdRandom();
          const newUser: UserType = {
            id: id,
            name: name,
            password : hashedPassword,
          };
          const sendUser = await prisma.user.create({ data: newUser } as never);
          res.status(200).json(sendUser);
        }
    }
  } catch (err) {
    if (err) throw err;
  }
}
