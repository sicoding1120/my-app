import { Blog, Class } from "@/backends/interfaces";
import { ResponseApiRouter } from "@/utils/apiResponse";

export class ResponseApi extends ResponseApiRouter {
  getSuccess(classes: Class[] | Blog[]) {
    return this._getSuccess(classes);
  }
  getByIDSuccess(Data: Class | Blog) {
    return this._getByIdSuccess(Data);
  }
  getByIDFailure(id: number) {
    return this._getByIdFailure(id);
  }
  getFailure(error: any) {
    return this._getFailure(error);
  }
  getInternalServerError(error: any) {
    return this._getInternalServerError(error);
  }
  createDataSuccess(newData: Class[] | Blog[]) {
    return this._createDataSuccess(newData);
  }
  createDataFailure(error: any) {
    return this._createDataFailure(error);
  }
  updateDataSuccess(updatedData: Class[] | Blog[]) {
    return this._updateDataSuccess(updatedData);
  }
  updateDataFailureNotFound(error: any) {
    return this._updateDataFailureNotFound(error);
  }
  updateDataFailureISR(error: any) {
    return this._updateDataFailureISR(error);
  }
  deleteDataSuccess(deletedData: Class[] | Blog[]) {
    return this._deleteDataSuccess(deletedData);
  }
  deleteDataFailureNotFound(error: any) {
    return this._deleteDataFailureNotFound(error);
  }
  deleteDataFailureISR(error: any) {
    return this._deleteDataFailureISR(error);
  }
}
