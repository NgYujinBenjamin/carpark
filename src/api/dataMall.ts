import fetch from "node-fetch";

export class dataMallConnector {
  baseUrl: string = `http://datamall2.mytransport.sg/ltaodataservice/`;

  public async getBusRoutes(skipValue: number): Promise<Response> {
    const accountKey = process.env.API_KEY || "";
    console.log(accountKey);
    const url = this.baseUrl + "BusRoutes?$skip=" + skipValue.toString;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        accountKey: accountKey,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json() as unknown as Response;
  }
}
