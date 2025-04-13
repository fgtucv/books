const cetegoryList = document.querySelector(".category__list");

export function createCetegoryList(arr) {
    let html = "";

    html = arr.map((category) => {
        return `
        <li class="category__item">
            <span class="category__span">${category.list_name}</span>
        </li>`;
    }).join("");

    cetegoryList.insertAdjacentHTML("beforeend", html);
}