import {UsersResponseType} from "@customTypes/types";

const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1/";
async function API(url: string, catchAnswer = {}, options: {method: string} = { method: "GET" }) {
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

export const getUsers = (query: string):Promise<UsersResponseType> => API(`users?${query}`)
