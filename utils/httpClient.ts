import { getCurrentToken } from 'hooks/useToken'
import { isClient } from './utils';

export const httpClient = async function httpClient<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getCurrentToken}`,
  }
  if (init?.headers) {
    init.headers = { ...defaultHeaders, ...init.headers };
  } else if (init) {
    init.headers = defaultHeaders;
  } else {
    init = { headers: defaultHeaders };
  }

  let message = 'request api error';
  const res = await fetch(input, init);

  const handleErrorResponse = (statusCode: number, json: any) => {
    switch (statusCode) {
      case 500:
        isClient() ? (window.location.href = '/500') : (message = 'server error');
        break;
      case 404:
        isClient() ? (window.location.href = '/404') : (message = 'not found');
        break;
      case 400:
        message = json.message;
        break;
      case 401:
        if (!res.url.includes('/me/')) {
          message = 'please login';
        }
        break;
      case 422:
        message = `${message}: ${json.detail[0].msg}`;
        break;
      default:
        message = json.message || 'Unknown error';
        console.log(json);
        break;
    }
  };

  try {
    const json = await res.json();
    if (!res.ok) {
      handleErrorResponse(res.status, json);
      return Object({sucess: false, message: message});
    } else {
      return json;
    }
  } catch (error) {
    return Object({sucess: false, message: message});
  }
};