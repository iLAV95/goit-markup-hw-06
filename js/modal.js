(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
        openNavBtn: document.querySelector('[data-nav-open]'),
        closeNavBtn: document.querySelector('[data-nav-close]'),
        nav: document.querySelector('[data-nav]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.openNavBtn.addEventListener('click', toggleNav);
    refs.nav.addEventListener('click', toggleNav);

    function toggleModal() {
        refs.modal.classList.toggle('is-open');
    }
    
    function toggleNav(event) {
        if (refs.nav || refs.nav.contains(event.target)) {
            refs.nav.classList.toggle('is-open');      
        }
     }
})();