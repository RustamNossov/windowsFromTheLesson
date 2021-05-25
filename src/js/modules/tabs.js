//import { continueStatement } from "babel-types";

export function tabs(headerSElector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelector(headerSElector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    
    }
    
    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        
// проверяем что клил был совершен именно в таб. Если в какой-то внутренний элемент, то проверяем что радитель это таб
            if (target && (target.classList.contains(tabSelector.replace(/\./, '')) || 
                target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
                    tab.forEach((item, i) => {
                        if (target == item || target.parentNode == item) {
                            hideTabContent();
                            showTabContent(i);
                        }
                    })

            }
    })

}