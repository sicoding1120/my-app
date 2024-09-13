import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function Class(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const classes = await prisma.class.findMany();
      res.status(200).json(classes);
      if (!classes) {
        res.status(404).json({ message: "No classes found" });
      }
  }
}
