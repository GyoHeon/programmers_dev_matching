import { searchLanguages } from "./api.js";
import { addEvent, textToElement } from "./render.js";

const form = textToElement(`<form class="SearchInput"></form>`);
const input = textToElement(`<input 
                class="SearchInput__input" 
                type="text" 
                placeholder="프로그램 언어를 입력하세요." 
                value="" 
                autofocus="true"></input>`);

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

addEvent(form, "submit", (e) => e.preventDefault());
addEvent(input, "keyup", handleInput);
form.appendChild(input);

const app = document.querySelector("main.app");
app.appendChild(form);
