export const SIGN_IN = "SIGN_IN";

export const signIn = (payload) => {
  return {
    type: SIGN_IN,
    payload
  }
}

/*
export const signIn = (payload)=> async (dispatch, getState) => {
  console.log("signIn.action", payload);
  return {
    type: SIGN_IN,
    payload
  }
}*/