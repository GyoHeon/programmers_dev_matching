import { BASE_URL } from "./const.js";

export const searchLanguages = async (keyword) => {
  return fetch(BASE_URL + "/languages?" + new URLSearchParams({ keyword }));
};
