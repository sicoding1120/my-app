import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function Class(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const blogs = await prisma.class.findMany();
      res.status(200).json(blogs);
      if (!blogs) {
        res.status(404).json({ message: "No blogs found" });
      }
  }
}
