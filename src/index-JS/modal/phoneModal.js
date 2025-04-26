const openButton = document.querySelector(".header__menu-button");
const closeButton = document.querySelector(".phone__close-button");
const bacdrop = document.querySelector(".phone-bacdrop");

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

function openModal() {
    bacdrop.classList.remove("is-hidden");
    openButton.style.display = "none";
    closeButton.style.display = "block";
}

export function closeModal() {
    bacdrop.classList.add("is-hidden");
    openButton.style.display = "block";
    closeButton.style.display = "none";
}