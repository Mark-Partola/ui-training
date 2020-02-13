import './style.css';
import './menu.css';

const ITEM_CLASS = 'menu-item';
const ACTIVE_CLASS = 'active';

document.querySelectorAll(`.${ITEM_CLASS}`).forEach(el => {
    el.addEventListener('click', e => {
        const target = e.currentTarget;
        const prevActive = document.querySelector(`.${ITEM_CLASS}.${ACTIVE_CLASS}`);
        if (prevActive && target !== prevActive) {
            prevActive.classList.remove(ACTIVE_CLASS);
        }

        requestAnimationFrame(() => {
            target.classList.add(ACTIVE_CLASS);
        });
    });
});