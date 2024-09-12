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
    case "POST": 
      const {
      id_credential,
      title,
      Kos,
      lesson,
      time,
      headerTitle,
      desc_cover,
      desc,
      kategori,
      isDiscount,
      url,
      aboutClass,
      isCertivicate,
    } = req.body;

    const newClass = await prisma.class.create({
      data: {
        id_credential,
        title,
        Kos,
        lesson,
        time,
        headerTitle,
        desc_cover,
        desc,
        kategori,
        isDiscount,
        url,
        aboutClass,
        isCertivicate,
      },
    });
    res.status(201).json(newClass);
      
  }
}
