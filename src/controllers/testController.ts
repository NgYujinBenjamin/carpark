import { Controller, Route, Get } from "tsoa";
// import { env } from 'process';

@Route("users")
export class BaseController extends Controller {
  @Get("")
  public async getUser(): Promise<any> {
    console.log(process.env.API_KEY);
    return "hello";
  }
}
