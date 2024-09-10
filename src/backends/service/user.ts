/* eslint-disable react-hooks/rules-of-hooks */import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { useRouter } from "next/router";

const prisma = new PrismaClient();

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

export class userService {
   async LoginUser(req: any, res: any) {
    const router = useRouter();
    const { password, name } = req.body;
    const user = await prisma.user.findUnique({
      where: { name: name },
    } as never);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const verify = verifyPassword(password, user.password);
    if (!verify) {
      return res.status(401).json({ message: "Invalid password" });
    } else {
      router.push("/dashboard");
      return res.json(user);
    }
  }

  async createUser(req: any, res: any) {
    const { password, name } = req.body;
    if (!name || !password) {
      return;
    } else {
      const hashedPassword: string = (await hashingPassword(password)) as never;

      const id = CreateIdRandom();

      const userApi: any = {
        id: id,
        password: hashedPassword,
        name: name,
      };
      const createUser = await prisma.user.create({ data: userApi });
      return await res.status(201).json(createUser);
    }
  }
}
