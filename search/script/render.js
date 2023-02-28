//  from: https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro
export const textToElement = (text) => {
  const template = document.createElement("template");
  text = text.trim();
  template.innerHTML = text;

  return template.content.firstChild;
};

const highlightKeyword = (raw, keyword) => {
  if (keyword) {
    return raw.replace(
      new RegExp(keyword, "gi"),
      `<span class="Suggestion__item--matched">${keyword}</span>`
    );
  }
  return raw;
};

export const makeList = (list, suggestion, keyword) => {
  const ul = textToElement("<ul></ul>");
  list.forEach((element) => {
    const li = textToElement(`<li>${highlightKeyword(element, keyword)}</li>`);
    ul.appendChild(li);
  });
  return ul;
};

export const addEvent = (element, eventName, event) => {
  const newElement = element;
  newElement.addEventListener(eventName, event);

  return newElement;
};

export const addToApp = (element) => {
  const app = document.querySelector(".app");

  return app.appendChild(element);
};

export const render = (after) => {
  const app = document.querySelector(".app");
  return app.replaceChildren(after, before);
};
