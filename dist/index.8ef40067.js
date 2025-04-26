!function(){let a=async()=>{try{return await fetch("https://books-backend.p.goit.global/books/category-list").then(a=>a.json())}catch(a){return a}},t=document.querySelector(".category__list");a().then(a=>{let e;e="",e=a.map(a=>`
        <li class="category__item">
            <span class="category__span">${a.list_name}</span>
        </li>`).join(""),t.insertAdjacentHTML("beforeend",e)});let e=async a=>{try{return await fetch(`${a}`).then(a=>a.json())}catch(a){return a}},s=document.querySelector(".magazine");function o(a,t=!1){let e="";!1===t?e=a.map(a=>`
        <li class="magazine__item">
            <img class="magazine__img" src="${a.book_image}" alt="${a.description}">
            <h3 class="magazine__book-name">${a.title}</h3>
            <span class="magazine__book-author">${a.author}</span>
        </li>`).join(""):!0===t&&(e=a.map(a=>`
        <li class="magazine__item">
            <h2 class="magazine__type-title">${a.list_name}</h2>
            <ul class="magazine__book-list">
                <li class="magazine__item">
                    <img class="magazine__img" src="${a.books[0].book_image}" alt="1">
                    <h3 class="magazine__book-name">${a.books[0].title}</h3>
                    <span class="magazine__book-author">${a.books[0].author}</span>
                </li>
                <li class="magazine__item">
                    <img class="magazine__img" src="${a.books[1].book_image}" alt="1">
                    <h3 class="magazine__book-name">${a.books[1].title}</h3>
                    <span class="magazine__book-author">${a.books[1].author}</span>
                </li>
                <li class="magazine__item">
                    <img class="magazine__img" src="${a.books[2].book_image}" alt="1">
                    <h3 class="magazine__book-name">${a.books[2].title}</h3>
                    <span class="magazine__book-author">${a.books[2].author}</span>
                </li>
                <li class="magazine__item">
                    <img class="magazine__img" src="${a.books[3].book_image}" alt="1">
                    <h3 class="magazine__book-name">${a.books[3].title}</h3>
                    <span class="magazine__book-author">${a.books[3].author}</span>
                </li>
                <li class="magazine__item">
                    <img class="magazine__img" src="${a.books[4].book_image}" alt="1">
                    <h3 class="magazine__book-name">${a.books[4].title}</h3>
                    <span class="magazine__book-author">${a.books[4].author}</span>
                </li>
            </ul>
            <button type="button" class="magazine__button">SEE MORE</button>
        </li>`).join("")),s.innerHTML=e}let i=document.querySelector(".category__list"),n=document.querySelector(".shop_title");document.querySelector(".magazine__book-list"),i.addEventListener("click",function(a){let t=a.target;if(!t.classList.contains("active")){if(!1!==t.parentNode.classList.contains("category__item")){if("All categories"===t.textContent)document.querySelector(".active").classList.remove("active"),t.classList.add("active"),n.innerHTML="Best Sellers <span class='shop_title-purpure'>magazine</span>",e("https://books-backend.p.goit.global/books/top-books").then(a=>{o(a,!0)});else{document.querySelector(".active").classList.remove("active"),t.classList.add("active");let a=t.textContent.split(" ");n.innerHTML=`${a.slice(0,-1).join(" ")} <span class="shop_title-purpure">${a.at(-1)}</span>`,e(`https://books-backend.p.goit.global/books/category?category=${t.textContent}`).then(a=>{o(a),console.log(a)})}}}});let l=document.querySelectorAll(".support__item"),c=document.querySelector(".support__scroll-button");c.addEventListener("click",function(){let a=0;l.forEach(t=>{a<=2?t.classList.toggle("no-showe"):a>5&&t.classList.toggle("no-showe"),a+=1}),l[0].classList.contains("no-showe")?c.style.transform="translate(-50%, 0%) rotate(0deg)":c.style.transform="translate(-50%, 0%) rotate(180deg)"})}();
//# sourceMappingURL=index.8ef40067.js.map
