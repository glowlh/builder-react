import { BASE_URL } from './api';

export default class Request {

  static get(url: string) {
    return fetch(`${BASE_URL}/${url}`,
      {
        method: 'GET',
        mode: 'cors',
      })
      .then((response: any) => response);
  }

  static post(url: string, body: any) {
    return fetch(`${BASE_URL}/${url}`,
      {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then(response => response.json());
  }
}
