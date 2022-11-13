
import fetch from "node-fetch";

export class dataMall {

    public async test(): Promise<any> {
        const accountKey = process.env.API_KEY || '';
        const url = "http://datamall2.mytransport.sg/ltaodataservice/BusRoutes?$skip=500"
        const response = await fetch(
            url, 
            {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    "accountKey": accountKey
                }        
            }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response;
        return data
    }
}
