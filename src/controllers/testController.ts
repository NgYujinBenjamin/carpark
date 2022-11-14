import { dataMall } from "../api/dataMall";
import { Controller, Route, Get } from "tsoa";

@Route("users")
export class BaseController extends Controller {
  @Get("")
  public async getUser(): Promise<any> {
    try {
      let dao = new dataMall;
      let response = await dao.test();
      console.log(response.json());
    } catch (e) {
      console.log(e);
    }

    return "hello";
  }
}
