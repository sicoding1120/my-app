import { user } from "@/types";

export class ApiUserCustom {

  createSuccess = (data: user[]) => {
    return ApiCreateSuccess(data)
  }

}

export const ApiGetSuccess = (jml_user: number, data: user[], err:any, success: any) => {
  return {
    nama_data: "user",
    jml_data_user: jml_user,
    success: success ? true : false,
    msg: "request successful",
      data: data ? data : {
          status: 405,
          msg: "failed to get user",
          user: []
      },
      err: err ? true : false,
    status: 200,
  };
};


export const ApiCreateSuccess = (data:user[]) => {
  return {
    status: 201,
    msg: "created user to database",
    data: data,
    err: false,
  }
}
