import {Response} from 'node-fetch';
import {GETMapsAPI} from './utils';

export default class GoogleMapsConnector {
  baseUrl: string = ``;

  accountKey: string = process.env.MAPS_API_KEY || '';
  mapId: string = process.env.MAPS_ID || '';

  apiOptions = {
    "apiKey": this.accountKey
  };

  mapOptions = {
    "zoom": 18,
    "center": { lat: 35.6594945, lng: 139.6999859 },
    "mapId": this.mapId
  }

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
