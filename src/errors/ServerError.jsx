export default class ServerError extends Error {
    constructor(message) {
      super(message);
      this.name = "ServerError";
      this.code = "ESERVER"
    }
  }
  