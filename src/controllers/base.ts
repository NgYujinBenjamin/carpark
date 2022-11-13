import { Route, Get } from "tsoa";

@Route("users")
export class BaseController {
  @Get("")
  public async getUser(): Promise<any> {
    return "hello";
  }
}
