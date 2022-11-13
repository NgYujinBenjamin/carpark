import { Controller, Route, Get } from "tsoa";

@Route("users")
export class BaseController extends Controller {
  @Get("")
  public async getUser(): Promise<any> {
    return "hello";
  }
}
