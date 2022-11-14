import { Controller, Route, Get, Tags } from 'tsoa';
@Route('users')
@Tags('testing')
export class BaseController extends Controller {
  @Get('')
  public async getUser(): Promise<any> {
    try {
      // const dao = new dataMall();
      // const response = await dao.test();
      // console.log(response.json());
    } catch (e) {
      console.log(e);
    }

    return 'hello';
  }
}

