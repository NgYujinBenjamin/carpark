import { Response } from "node-fetch";
import { GETDataMallAPI } from "./utils";

export default class DataMallConnector {
  baseUrl: string = `http://datamall2.mytransport.sg/ltaodataservice/`;

  accountKey: string = process.env.DATAMALL_API_KEY || "";

  public async getBusRoutes(skipValue: number): Promise<Response> {
    const url = `${this.baseUrl}BusRoutes?$skip=${skipValue.toString}`;
    const response = await GETDataMallAPI(url, this.accountKey);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json() as unknown as Response;
  }

  public async getCarparkAvailability(skipValue: number): Promise<Response> {
    const url = `${this.baseUrl}CarParkAvailabilityv2?$skip=${skipValue.toString}`;
    const response = await GETDataMallAPI(url, this.accountKey);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json() as unknown as Response;
  }
}
