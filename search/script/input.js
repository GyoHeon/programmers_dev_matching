import { searchLanguages } from "./api.js";
import { arrow } from "./const.js";
import { addEvent, addToApp, textToElement } from "./render.js";
import { store } from "./store.js";
import { renderSuggestion } from "./suggestion.js";

const form = textToElement(`<form class="SearchInput"></form>`);
const input = textToElement(`<input 
                class="SearchInput__input" 
                type="text" 
                placeholder="프로그램 언어를 입력하세요." 
                value="" 
                autofocus="true"></input>`);

const handleInput = async (e) => {
  if (arrow.includes(e.key)) return input.blur();
  if (e.key === "Enter") return;

  store.keyword = e.target.value || "";

  const suggestion = document.querySelector("div.Suggestion");
  if (!store.keyword.length) {
    suggestion.style.display = "none";
    return (store.suggestion = []);
  }

  const searchResults = await searchLanguages(store.keyword);
  if (searchResults) store.suggestion = searchResults;
  else store.suggestion = [];

  suggestion.style.display = store.suggestion.length > 0 ? "block" : "none";

  store.selectedIndex = 0;

  renderSuggestion();
};

addEvent(form, "submit", (e) => e.preventDefault());
addEvent(input, "keyup", handleInput);
form.appendChild(input);

addToApp(form);
