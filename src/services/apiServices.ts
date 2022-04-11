import {UsersResponseType} from "@customTypes/types";
import {BASE_URL} from "@customTypes/constants";

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
