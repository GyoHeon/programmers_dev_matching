import { BASE_URL } from "./const.js";

const request = async (url) => {
  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error("search fail!");
};

export const searchLanguages = async (keyword) =>
  request(`${BASE_URL}/languages?keyword=${keyword}`);
