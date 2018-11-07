import { BASE_URL } from './api';

export const RESPONSE_TYPE = {
  json: 'json',
  blob: 'blob',
  text: 'text',
  arrayBuffer: 'arrayBuffer',
  formData: 'formData',
};

export default class Request {

  static get(url: string, responseType: string = RESPONSE_TYPE.json) {
    return fetch(
      `${BASE_URL}/${url}`,
      {
        method: 'GET',
        mode: 'cors',
      },
    )
      .then((response: any) => response[responseType]());
  }

  static post(url: string, body: any, responseType: string = RESPONSE_TYPE.json) {
    return fetch(
      `${BASE_URL}/${url}`,
      {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    )
      .then((response: any) => response[responseType]());
  }
}
