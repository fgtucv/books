import { getBookApi } from "../service/getBookapi";
import { createBookList } from "../createHtml/createBookList";

const categoryList = document.querySelector(".category__list");
const categoryTitle = document.querySelector(".shop_title");
const booksList = document.querySelector(".magazine__book-list");

categoryList.addEventListener("click", changeCategory)

function changeCategory(event) {
    const element = event.target

    if (element.classList.contains("active")) {
        return;
    } else if (element.parentNode.classList.contains("category__item") === false) {
        return;
    }else if (element.textContent === "All categories") {
        const activeCategory = document.querySelector(".active");
        activeCategory.classList.remove("active");
        element.classList.add("active");
        categoryTitle.innerHTML = "Best Sellers <span class='shop_title-purpure'>magazine</span>";

        getBookApi('https://books-backend.p.goit.global/books/top-books').then((data) => {
            createBookList(data, true);
        });
    } else {
        const activeCategory = document.querySelector(".active");
        activeCategory.classList.remove("active");
        element.classList.add("active");
        const text = element.textContent.split(" ");
        categoryTitle.innerHTML = `${text.slice(0, -1).join(" ")} <span class="shop_title-purpure">${text.at(-1)}</span>`;

        getBookApi(`https://books-backend.p.goit.global/books/category?category=${element.textContent}`).then((data) => {
            createBookList(data);
            console.log(data)
        });
    }


}