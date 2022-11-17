import { Response } from "node-fetch";
import { GETMapsAPI } from "./utils";

export default class GoogleMapsConnector {
  baseUrl: string = ``;

  accountKey: string = process.env.MAPS_API_KEY || "";

  public async getPlaceholder(): Promise<Response> {
    // const url = ``;
    const response = GETMapsAPI(this.accountKey);
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    // return response.json() as unknown as Response;
    return response as unknown as Response;
  }
}
