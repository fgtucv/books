import { getCategoryApi } from "./service/getCategoryApi.js";
import { createCetegoryList } from "./createHtml/createCetegoryList.js";

getCategory();

function getCategory() {
    getCategoryApi().then((data) => {
        createCetegoryList(data)
    });
};