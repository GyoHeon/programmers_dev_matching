import { arrow } from "./const.js";
import { renderSuggestion } from "./render.js";
import { store } from "./store.js";

document.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;
  if (arrow.includes(e.key)) {
    const len = store.suggestion.length;
    const selectedIndex = store.selectedIndex;

    if (e.key === arrow[0]) {
      if (selectedIndex < len - 1) store.selectedIndex++;
      else store.selectedIndex = 0;
    }
    if (e.key === arrow[1]) {
      if (selectedIndex > 0) store.selectedIndex--;
      else store.selectedIndex = len - 1;
    }
    renderSuggestion(store.keyword);
  }
});
