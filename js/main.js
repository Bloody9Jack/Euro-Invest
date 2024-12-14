"use strict";

window.addEventListener('DOMContentLoaded', () => {
    //tabs
    const tabs = document.querySelectorAll('.tabs__header-btn');
    const tabsParent = document.querySelector('.tabs__header');
    const tabsContent = document.querySelectorAll('.tabs__inner');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('fade', 'visible');
            tabs.forEach(item => {
                item.classList.remove('tabs__header--active');
            });
        });
    }
    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('fade', 'visible');
        tabs[i].classList.add('tabs__header--active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabs__header-btn')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    })
    // accardion
    const accardionBtn = document.querySelectorAll('.accardion__btn');
    const accardeonContent = document.querySelectorAll('.accardeon__content');
    const accardeonWrapper = document.querySelectorAll('.accardeon__wrapper');

    function remove() {
        accardionBtn.forEach(item => {
            item.classList.remove('accardion__btn--active');
        })
        accardeonContent.forEach(item => {
            item.classList.remove('accardeon__content--visible');
        })
    }

    accardeonWrapper.forEach((item, j) => {
        item.addEventListener('click', (e) => {
            accardionBtn[j].classList.toggle('accardion__btn--active');
            if (accardionBtn[j].classList.contains('accardion__btn--active')) {
                accardeonContent[j].classList.add('accardeon__content--visible', 'fade')
            }
            else {
                accardeonContent[j].classList.remove('accardeon__content--visible')
            }

        });
    });
    remove();

    // modal


    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]'),
        modalInputPhone = document.querySelector('[data-input-phone]'),
        modalInputText = document.querySelector('[data-input-text]'),
        modalInputs = document.querySelectorAll('.modal__input');


    const modalTimerId = setTimeout(openModal, 3000);

    function openModal() {
        modal.classList.add('transform-show');
        document.body.style.overflow = 'hidden';
        clearTimeout(modalTimerId);
    }
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.remove('transform-show');
        document.body.style.overflow = '';

    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();

        }
    });


    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('transform-show')) {
            closeModal();
        }
    });

    const modalForm = document.querySelector('.modal__form');

    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        modalInputs.forEach(input => {
            input.value = ''
        });
        closeModal();

    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    modalInputPhone.addEventListener('keydown', function (event) {
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 27 || event.keyCode == 37 || event.keyCode == 39) {

            return;
        } else {
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 || event.keyCode !== 189)) {
                event.preventDefault();
            }
        }
    });

    modalInputPhone.addEventListener('input', (e) => {

        if (e.target.value.length <= 2) {
            e.target.value = "+7";
        }
        if (!(e.target.value.startsWith('+7'))) {
            e.target.value = "+7"
        }

    });

    modalInputText.addEventListener('keydown', function (event) {
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 27 || event.keyCode == 37 || event.keyCode == 39) {

            return;
        } else {
            if ((event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 186 || event.keyCode > 222)) {
                event.preventDefault();
            }
        }
    });
    modalInputText.addEventListener('input', (e) => {
        if (e.target.value ==',' || e.target.value == '.' || e.target.value == '.' || e.target.value == '.' || e.target.value == '=' || e.target.value == '+' ||   e.target.value == ';' || e.target.value == ':' || e.target.value == '_' || e.target.value == '/' || e.target.value == "'" || e.target.value == '"' || e.target.value == ']' || e.target.value == '[' || e.target.value == '{' || e.target.value == '}' || e.target.value == '=' || e.target.value == '-') {
            e.target.value = ''
        }   
    })

    // anchors

    const anchorAdv = document.querySelectorAll('[data-anchor-advantages]');
    const anchorTrading = document.querySelectorAll('[data-anchor-trading]');
    const anchorFAQ = document.querySelectorAll('[data-anchor-faq]');
    const anchorStart = document.querySelectorAll('[data-anchor-start]');

    
    
    anchorAdv.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 800,
                left: 0,
                behavior: "smooth"
            });
        });
    });
    anchorTrading.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 2779,
                left: 0,
                behavior: "smooth"
            });
        });
    });
    anchorFAQ.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 4630,
                left: 0,
                behavior: "smooth"
            });
        });
    });
    anchorStart.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        });
    });
   
});
