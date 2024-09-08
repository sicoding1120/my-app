import { User } from "@/controllers/user";
// import { userService } from "@/service/user";
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";


const prisma = new PrismaClient();
const user = new User();

interface user {
  password: string,
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        const users =await  prisma.user.findMany();
        res.status(200).json(users)
        if (!users) {
          res.status(404).json({ message: "No users found" });
        }
      case "POST":
        await user.Create(req, res)
    }
   
  } catch (err) {
    if(err) throw err
 }
}
