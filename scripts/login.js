const loginHeaderButton = document.querySelector('.header__login');
    const dialogLayout = document.querySelector('.dialog');

    if (loginHeaderButton && dialogLayout) {
        const closeDialogButton = dialogLayout.querySelector('.popup__close');
        const selectPopup = dialogLayout.querySelector('#popup-select');
        const loginPopup = dialogLayout.querySelector('#popup-login');
        const registrationPopup = dialogLayout.querySelector('#popup-registration');
        const switchToRegister = selectPopup.querySelector('[data-registration]');
        const switchToLogin = selectPopup.querySelector('[data-login]');

        loginHeaderButton.addEventListener('click', () => {
            dialogLayout.removeAttribute('hidden');
        });

        closeDialogButton.addEventListener('click', () => {
            dialogLayout.setAttribute('hidden', true);
        });

        window.addEventListener('click', (event) => {
            if (event.target === dialogLayout) {
                dialogLayout.setAttribute('hidden', true);
            }
        });

        if (registrationPopup) {
            switchToRegister.addEventListener('click', (event) => {
                event.preventDefault();
                selectPopup.setAttribute('hidden', true);
                loginPopup.setAttribute('hidden', true);
                registrationPopup.removeAttribute('hidden');
            });
        }

        if (loginPopup) {
            switchToLogin.addEventListener('click', (event) => {
                event.preventDefault();
                selectPopup.setAttribute('hidden', true);
                registrationPopup.setAttribute('hidden', true);
                loginPopup.removeAttribute('hidden');
            });
        }
    }