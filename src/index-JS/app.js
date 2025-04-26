import { getCategoryApi } from "./service/getCategoryApi.js";
import { createCetegoryList } from "./createHtml/createCetegoryList.js";
import { createBookList } from "./createHtml/createBookList.js";
import { getBookApi } from "./service/getBookapi.js";
import { closeModal } from "./modal/phoneModal.js";
import { buildHeader } from "./createHtml/buildHeader.js";

const openButtonLoginInPhone = document.querySelector(".phone__open-button");

if (JSON.parse(localStorage.getItem("status")) === "login") {
    console.log("2")
    buildHeader(JSON.parse(localStorage.getItem("account")))
} else {
    console.log("1")
    localStorage.setItem("status", JSON.stringify("no login"))
}

getCategory();

function getCategory() {
    getCategoryApi().then((data) => {
        createCetegoryList(data)
    });
};

getBookApi('https://books-backend.p.goit.global/books/top-books').then((data) => {
    createBookList(data, true);
});

openButtonLoginInPhone.addEventListener("click", () => {
    closeModal()
});