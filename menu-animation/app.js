import "./style.css";
import "./menu.css";

const ITEM_CLASS = "menu-item";
const ACTIVE_CLASS = "active";

let prevActive;

document.querySelectorAll(`.${ITEM_CLASS}`).forEach(el => {
  el.addEventListener("click", ({ currentTarget }) => {
    if (prevActive) {
      prevActive.classList.remove(ACTIVE_CLASS);
    }

    currentTarget.classList.add(ACTIVE_CLASS);
    prevActive = currentTarget;
  });
});
