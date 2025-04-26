const booksList = document.querySelector(".magazine");

export function createBookList(arr, category = false) {
    let html = "";

    if (category === false) {
        html = arr.map((obj) => {
            return `
        <li class="magazine__item" id="${obj._id}">
            <img class="magazine__img" src="${obj.book_image}" alt="${obj.description}">
            <h3 class="magazine__book-name">${obj.title}</h3>
            <h4 class="magazine__book-author">${obj.author}</h4>
        </li>`;
        }).join("");
    } else if (category === true) {
        html = arr.map((obj) => {
            return `
        <li class="magazine__item">
            <h2 class="magazine__type-title">${obj.list_name}</h2>
            <ul class="magazine__book-list">
                <li class="magazine__item" id="${obj.books[0]._id}">
                    <img class="magazine__img" src="${obj.books[0].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[0].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[0].author}</h4>
                </li>
                <li class="magazine__item" id="${obj.books[1]._id}">
                    <img class="magazine__img" src="${obj.books[1].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[1].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[1].author}</h4>
                </li>
                <li class="magazine__item" id="${obj.books[2]._id}">
                    <img class="magazine__img" src="${obj.books[2].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[2].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[2].author}</h4>
                </li>
                <li class="magazine__item" id="${obj.books[3]._id}">
                    <img class="magazine__img" src="${obj.books[3].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[3].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[3].author}</h4>
                </li>
                <li class="magazine__item" id="${obj.books[4]._id}">
                    <img class="magazine__img" src="${obj.books[4].book_image}" alt="1">
                    <h3 class="magazine__book-name">${obj.books[4].title}</h3>
                    <h4 class="magazine__book-author">${obj.books[4].author}</h4>
                </li>
            </ul>
            <button type="button" class="magazine__button">SEE MORE</button>
        </li>`;
        }).join("");
    }

    booksList.innerHTML = html;
}