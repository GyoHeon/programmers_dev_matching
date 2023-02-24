import { searchLanguages } from "./api.js";

const form = document.querySelector(".SearchInput");
const input = document.querySelector(".SearchInput_input");

const arrow = [ArrowDown, ArrowUp, ArrowLeft, ArrowRight];

const handleInput = (e) => {
  if (arrow.includes(e.key)) {
    return;
  }
  const inputValue = e.target.value;
  searchLanguages(inputValue);
};

input.addEventListener("keydown", handleInput);
form.addEventListener("submit", (e) => e.preventDefault());
