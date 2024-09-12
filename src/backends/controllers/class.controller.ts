import { NextApiRequest, NextApiResponse } from "next";
import { classService } from "../service/class.service";

export class classController extends classService {
    async getDataClass() {
        return this._getClass();
    }

    async createClass(req:NextApiRequest,res:NextApiResponse) {
        return this._createClass(req,res);
    }

   
}