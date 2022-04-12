import {PositionResponseType, UsersResponseType, NewUserResponseType, TokenResponseType} from "@customTypes/types";

const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1/"
async function API(url: string, catchAnswer = {}, options? : {method: string, headers?: HeadersInit ,body?: BodyInit}) {
  try {
    const response = await fetch(BASE_URL + url, {
      ...options,
    });
    return await response.json();
  } catch (e: any) {
    console.error(e);
    return catchAnswer;
  }
}

export const getUsers = (query: string):Promise<UsersResponseType> => API(`users?${query}`);

export const getPositions = ():Promise<PositionResponseType> => API("positions");

export const getToken = ():Promise<TokenResponseType> => API("token");

export const setUser = (formData: FormData, token: string):Promise<NewUserResponseType> => API("users", {}, {
  method: "POST",
  body: formData,
  headers: {"Token": token}
});
