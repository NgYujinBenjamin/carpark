import { Controller, Route, Get } from "tsoa";
import log from "npmlog";
import DataMallConnector from "../api/DataMallConnector";

@Route("datamall")
export class DataMallController extends Controller {
  @Get("busroute/{skipValue}")
  public async getBusRoutes(skipValue?: number): Promise<Response | undefined> {
    let response;
    try {
      const conn = new DataMallConnector();
      response = await conn.getBusRoutes(skipValue || 0);
    } catch (e) {
      log.error("getBusRoutes", "Failed to retrieve bus routes from LTA", e);
    }
    return response;
  }

  @Get("carparkavailability/{skipValue}")
  public async getCarparkAvailability(
    skipValue?: number
  ): Promise<Response | undefined> {
    let response;
    try {
      const conn = new DataMallConnector();
      response = await conn.getCarparkAvailability(skipValue || 0);
    } catch (e) {
      log.error(
        "getCarparkAvailability",
        "Failed to retrieve carpark availability from LTA",
        e
      );
    }
    return response;
  }
}
