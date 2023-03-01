import { addToApp, makeList, textToElement } from "./render.js";
import { onSelect } from "./select.js";
import { store } from "./store.js";

const suggestion = textToElement(`<div class="Suggestion"></div>`);
suggestion.style.display = "none";

export const renderSuggestion = () => {
  const suggestion = document.querySelector("div.Suggestion");

  const suggestionElements = makeList({
    list: store.suggestion,
    keyword: store.keyword,
    index: store.selectedIndex,
  });

  suggestionElements.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    const { index } = li.dataset;
    if (index) {
      const selected = store.suggestion[index];
      onSelect(selected);
    }
  });

  suggestion.replaceChildren(suggestionElements);
};

addToApp(suggestion);
