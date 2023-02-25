import { searchLanguages } from "./api.js";

const form = document.querySelector(".SearchInput");
const input = document.querySelector(".SearchInput__input");

input.focus();

const handleInput = (e) => {
  if (e.key === "ArrowDown") {
    input.blur();
  }
  if (e.key === "ArrowUp") {
    input.blur();
  }

  const inputValue = e.target.value;

  if (!inputValue.length) return;

  searchLanguages(inputValue);
};

input.addEventListener("keyup", handleInput);
form.addEventListener("submit", (e) => e.preventDefault());
