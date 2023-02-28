import { store } from "./store.js";

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowDown") store.selectedIndex++;
  if (e.key === "ArrowUp") store.selectedIndex--;
});
