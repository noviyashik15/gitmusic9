// Открыть модальное окно
document.getElementById("open-modal-btn-b").addEventListener("click", function() {
    document.getElementById("my-modal-b").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn-b").addEventListener("click", function() {
    document.getElementById("my-modal-b").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal-b").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal-b .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal-b").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});