import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { ResponseApiRouter } from "@/utils/apiResponse";

const prisma = new PrismaClient();
const Response = new ResponseApiRouter();

export class blogService {
  async _getBlog(res: NextApiResponse) {
    const blog = await prisma.blog.findMany();
    if (blog) {
      return res.status(200).json(Response._getSuccess(blog as never));
    } else {
      return res.status(404).json(Response._getFailure(blog));
    }
  }

  async _getBlogById(res: NextApiResponse, req: NextApiRequest) {
    const { id } = req.body;
    const blog = await prisma.blog.findUnique({ where: { id: id } });
    if (blog) {
      return res.status(200).json(Response._getByIdSuccess(blog as never));
    } else {
      return res.status(404).json(Response._getByIdFailure(id));
    }
  }

  async _createBlog(req: NextApiRequest, res: NextApiResponse<any>) {
    const create = await prisma.blog.create({ data: req.body });
    if (res.status(200)) {
      return res.status(200).json(Response._createDataSuccess(create as never));
    } else {
      if (res.status(500)) {
        return res
          .status(500)
          .json(Response._createDataFailure(create as never));
      }
      return res.status(404).json(Response._createDataFailure(create as never));
    }
  }
  async _updateBlog(res: NextApiResponse, req: NextApiRequest) {
    const update = await prisma.blog.update({
      where: { id: req.body.id },
      data: req.body,
    });
      
      if (res.status(200)) {
          return res.status(200).json(Response._updateDataSuccess(update as never));
      } else {
          if (res.status(500)) {
              return res.status(500).json(Response._updateDataFailureISR(update as never));
          }
          return res.status(404).json(Response._updateDataFailureNotFound(update as never));
      }
    }

    
    async _deleteBlog(res: NextApiResponse, req: NextApiRequest) {
      const deleteBlog = await prisma.blog.delete({
        where: { id: req.body.id },
      });
      if (res.status(200)) {
        return res.status(200).json(Response._deleteDataSuccess(deleteBlog as never));
      } else {
        if (res.status(500)) {
          return res
            .status(500)
            .json(Response._deleteDataFailureISR(deleteBlog as never));
        }
        return res
          .status(404)
          .json(Response._deleteDataFailureNotFound(deleteBlog as never));
      }
    }
}
