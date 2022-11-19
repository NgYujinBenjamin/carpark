import {Controller, Route, Get} from 'tsoa';
import log from 'npmlog';
import {Response} from 'node-fetch';
import DataMallConnector from '../api/DataMallConnector';
import {STATUS} from './enums';

@Route('datamall')
export class DataMallController extends Controller {
  @Get('busroute/{skipValue}')
  public async getBusRoutes(skipValue?: number): Promise<Response> {
    let response;
    try {
      const conn = new DataMallConnector();
      response = await conn.getBusRoutes(skipValue || 0);
    } catch (e) {
      log.error('getBusRoutes', 'Failed to retrieve bus routes from LTA', e);
    }
    if (response) {
      this.setStatus(STATUS.OK);
      return response;
    }
    this.setStatus(STATUS.INTERNAL_SERVER_ERROR);
    throw new Error(`Failed to retrieve the bus routes`);
  }

  @Get('carparkavailability/{skipValue}')
  public async getCarparkAvailability(skipValue?: number): Promise<Response | undefined> {
    let response;
    try {
      const conn = new DataMallConnector();
      response = await conn.getCarparkAvailability(skipValue || 0);
    } catch (e) {
      log.error('getCarparkAvailability', 'Failed to retrieve carpark availability from LTA', e);
    }
    if (response) {
      this.setStatus(STATUS.OK);
      return response;
    }
    this.setStatus(STATUS.INTERNAL_SERVER_ERROR);
    throw new Error(`Failed to retrieve the bus routes`);
  }
}
