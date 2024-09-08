import { user } from "@/types";
import { ApiUserCustom } from "../services/user";

export class ApiUser {
    constructor(private readonly ApiCustom: ApiUserCustom) { }
    
  createUserApi = (data:user[]) => {
    return this.ApiCustom.createSuccess(data)
  };
}
