'use strict';

const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal")
const modalClose = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const openModal = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

showModal.forEach(button => {
    button.addEventListener("click", openModal);
});

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
        closeModal();
    }
});