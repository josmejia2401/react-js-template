import ServerError from '../errors/ServerError';
import NetworkError from '../errors/NetworkError';

const ERROR_FAIL_TO_FETCH = "No se pudo establecer la conexión con el servidor. Verifique su conexión a internet e intente nuevamente.";
const ERROR_FAIL_GENERAL = "En este momento no se puede procesar la solicitud. Intente más tarde.";


export function hadlerError(error, reject) {
  try {
    if (error) {
      const errorMessage = error.message;
      const errorName = error.name;
      const errorStack = error.errorStack;
      if (errorMessage && (errorMessage.toLowerCase().includes('failed to fetch') || errorMessage.toLowerCase().includes('network') ||
        errorMessage.toLowerCase().includes('http') || errorMessage.toLowerCase().includes('timeout'))) {
        reject(new NetworkError(ERROR_FAIL_TO_FETCH));
      } else {
        reject(new ServerError(ERROR_FAIL_GENERAL));
      }
    } else {
      reject(new Error("Error desconocido"));
    }
  } catch (exception) {
    reject(new Error("Error desconocido."));
  }
}

export async function fetchWithTimeout(url, options, timeout = 15000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout))
  ]);
}

export function resolveResponse(response, resolve, reject) {

  switch (response.status) {
    case 200:
      resolve(response.json());
      break;
    case 201:
      resolve(response.json());
      break;
    case 204:
      resolve(null);
      break;
    default:
      hadlerError(response, reject);
      break;
  }
}