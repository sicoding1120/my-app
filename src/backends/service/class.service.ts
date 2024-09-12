import { PrismaClient } from "@prisma/client";
import { ResponseApi } from "../../hook/useResponseApi";
import { NextApiRequest, NextApiResponse } from "next";

const Response = new ResponseApi();
const prisma = new PrismaClient();
export class classService {

    
  async _getClass() {
    const classes = await prisma.class.findMany();
    return Response._getSuccess(classes);
    }
    

  async _createClass(req: NextApiRequest, res: NextApiResponse) {
    const classes = await prisma.class.create({ data: req.body });
    res.status(201).json(Response._createDataSuccess(classes as never));
    }
    

  async _updateClass(req: NextApiRequest, res: NextApiResponse) {
    const { id_credential } = req.body;
    const updateClass = await prisma.class.update({
      where: { id_credential: id_credential },
      data: req.body,
    });
    res.status(200).json(Response._updateDataSuccess(updateClass as never));
    }
    

  async _deleteClass(req: NextApiRequest, res: NextApiResponse) {
    const { id_credential } = req.body;
    const deletedClass = await prisma.class.delete({
      where: { id_credential: id_credential },
    });
    res.status(200).json(Response.createDataSuccess(deletedClass as never));
    }
    

}
