import { addToApp, makeList, textToElement } from "./render.js";
import { store } from "./store.js";

const selected = textToElement('<div class="SelectedLanguage"></div>');

export const renderSelected = () => {
  const selectedLanguage = document.querySelector("div.SelectedLanguage");
  const selectedElements = makeList({
    list: store.selectedLanguage,
  });
  selectedLanguage.replaceChildren(selectedElements);
};

export const onSelect = (selected) => {
  if (!selected) return;

  window.alert(selected);

  const alreadyIndex = store.selectedLanguage.indexOf(selected);
  if (alreadyIndex > -1) store.selectedLanguage.splice(alreadyIndex, 1);
  if (store.selectedLanguage.length > 4) store.selectedLanguage.shift();

  store.selectedLanguage.push(selected);
  renderSelected();
};

addToApp(selected);
