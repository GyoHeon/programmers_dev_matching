import { BASE_URL } from "./const.js";

export const searchLanguages = async (keyword) => {
  const response = await fetch(
    BASE_URL + "/languages?" + new URLSearchParams({ keyword })
  );

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error("search fail!");
};
