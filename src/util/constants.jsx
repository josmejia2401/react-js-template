//const ROOT_URL_MS_CUSTOMER = "http://ec2-3-21-244-135.us-east-2.compute.amazonaws.com:8900/ms-customer/api/v1/";
const ROOT_URL_MS_CUSTOMER = "http://localhost:8900/ms-customer/api/v1/";
const ROOT_URL_MS_SESSION = "http://localhost:8905/ms-session/api/v1/";



export const API = {
  security : {
    signIn : ROOT_URL_MS_SESSION + 'sign-in',
  }
};
