import fetch from "node-fetch";

export default class DataMallConnector {
  baseUrl: string = `http://datamall2.mytransport.sg/ltaodataservice/`;

  accountKey: string = process.env.API_KEY || "";

  public async getBusRoutes(skipValue: number): Promise<Response> {
    const url = `${this.baseUrl}BusRoutes?$skip=${skipValue.toString}`;
    const response = await this.GETExternalAPI(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json() as unknown as Response;
  }

  public async getCarparkAvailability(skipValue: number): Promise<Response> {
    const url = `${this.baseUrl}CarParkAvailabilityv2?$skip=${skipValue.toString}`;
    const response = await this.GETExternalAPI(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json() as unknown as Response;
  }

  private async GETExternalAPI(url: string) {
    return fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        accountKey: this.accountKey,
      },
    });
  }
}
