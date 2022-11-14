import { Controller, Route, Get } from 'tsoa';
import { dataMallConnector } from '../api/dataMall';

@Route('bus')
export class BusController extends Controller {
  @Get('route/{skipValue}')
  public async getRoutes(skipValue?: number): Promise<Response | undefined> {
    let response;
    try {
      const conn = new dataMallConnector();
      response = await conn.getBusRoutes(skipValue || 0);
    } catch (e) {
      console.log(e);
    }
    return response;
  }
}
