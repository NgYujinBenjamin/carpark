import fetch, { Response } from "node-fetch";

export function GETDataMallAPI(
  url: string,
  accountKey: string
): Promise<Response> {
  return fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      accountKey,
    },
  });
}

export function GETMapsAPI(key: string) {
  return key;
}
