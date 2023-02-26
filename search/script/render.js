//  from: https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro
export const textToElement = (text) => {
  const template = document.createElement("template");
  text = text.trim();
  template.innerHTML = text;

  return template.content.firstChild;
};

export const addEvent = (element, eventName, event) => {
  const newElement = element;
  newElement.addEventListener(eventName, event);

  return newElement;
};
