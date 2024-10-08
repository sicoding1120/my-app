import { userService } from "@/service/user";
import { user } from "@/types";
import async from '../pages/api/users';

export class User extends userService {
    constructor() {
        super();
    }

    public async Login(req:any,res:any) {
        return await this.LoginUser(req,res);
    }
    
    public async Create(req: any, res: any) {
        return await this.createUser(req, res);
    }
} 

