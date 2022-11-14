import { Controller, Route, Get } from "tsoa";
import log from "npmlog";
import DataMallConnector from "../api/DataMallConnector";

@Route("bus")
export class BusController extends Controller {
  @Get("route/{skipValue}")
  public async getRoutes(skipValue?: number): Promise<Response | undefined> {
    let response;
    try {
      const conn = new DataMallConnector();
      response = await conn.getBusRoutes(skipValue || 0);
    } catch (e) {
      log.error("BusController", "Failed to retrieve data from LTA", e);
    }
    return response;
  }
}
