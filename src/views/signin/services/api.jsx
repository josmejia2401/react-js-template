import { API } from '../../../util/constants';
import { hadlerError, fetchWithTimeout, resolveResponse } from '../../../util/UtilService';


var myHeaders = new Headers();
//myHeaders.append("Access-Control-Allow-Origin", ["http://localhost:3000"]);
//myHeaders.append("mode", ["no-cors"]);

//myHeaders.append("Content-Type", ["application/json"]);
/*myHeaders.append("Accept", "* / *");
myHeaders.append("Access-Control-Allow-Origin", ["*", "http://localhost:3000"]);
myHeaders.append("Access-Control-Allow-Methods", ["*"]);
myHeaders.append("Access-Control-Allow-Headers", ["*"]);*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const signIn = (data) => {
    var raw = JSON.stringify(data);
    var requestOptions = {
        //credentials: "same-origin",
        crossDomain: true,
        withCredentials: true,
        credentials: "include",
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return new Promise(function (resolve, reject) {
        return fetchWithTimeout(`${API.security.signIn}`, requestOptions).then(response => {
            switch (response.status) {
                case 200:
                    resolve(response.json());
                    break;
                case 204:
                    reject("Error de inicio de sesión; ID de usuario o contraseña no válidos.");
                    break;
                case 400:
                    reject("Error de inicio de sesión; Ingrese los campos obligatorios.");
                    break;
                case 401:
                    reject("Error de inicio de sesión; En este momento no esta autorizado para realizar la solicitud.");
                    break;
                case 500:
                    reject("Error de inicio de sesión; Se ha generado un error interno.");
                    break;
                default:
                    reject("Error de inicio de sesión; Se ha generado un error desconocido..");
                    break;
              }
        }).catch(error => {
            console.log(error)
            hadlerError(error, reject)
        });
    });
}