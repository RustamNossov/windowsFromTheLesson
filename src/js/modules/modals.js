const modals = () => {
    function binModal(triggerSelector, modalSelector, closeSelector) {
       const trigger = document.querySelectorAll(triggerSelector),
             modal = document.querySelector(modalSelector),
             close = document.querySelector(closeSelector);
       
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();

                    modal.style.display = 'block';
                    // document.body.classList.add('modal-open');
                    document.body.style.owerflow = 'hodden';
                }
            });
        });

        close.addEventListener('click', ()=> {
            modal.style.display = 'none';
            // document.body.classList.remove('modal-open');
            document.body.style.owerflow = '';

        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.owerflow = 'hodden';
                // document.body.classList.add('modal-open');

            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout( function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.owerflow = 'hodden';

        }, time);
    }
    
    binModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    binModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);
};



export default modals;