import { searchLanguages } from "./api.js";
import { addEvent, addToApp, textToElement } from "./render.js";
import { store } from "./store.js";

const form = textToElement(`<form class="SearchInput"></form>`);
const input = textToElement(`<input 
                class="SearchInput__input" 
                type="text" 
                placeholder="프로그램 언어를 입력하세요." 
                value="" 
                autofocus="true"></input>`);
const suggestion = textToElement(`<div class="Suggestion"></div>`);

const handleInput = async (e) => {
  if (e.key === "ArrowDown") {
    input.blur();
  }
  if (e.key === "ArrowUp") {
    input.blur();
  }

  addToApp(suggestion);

  const inputValue = e.target.value;
  if (!inputValue.length) {
    suggestion.style = `display:none`;
    return (store.suggestion = []);
  }

  const suggestionElement = document.querySelector("div.Suggestion");
  const searchResults = await searchLanguages(inputValue);
  if (searchResults) store.suggestion = searchResults;
  else store.suggestion = [];

  suggestion.style =
    store.suggestion.length > 0 ? `display:block` : `display:none`;

  const suggestionElements = makeList(searchResults);

  // render(suggestion, beforeSuggestion);
};

addEvent(form, "submit", (e) => e.preventDefault());
addEvent(input, "keyup", handleInput);
form.appendChild(input);

export const makeList = (list) => {
  const ul = textToElement("<ul></ul>");
  list.forEach((element) => {
    const li = textToElement(`<li>${element}</li>`);
    ul.appendChild(li);
  });
  return ul;
};

addToApp(form);
