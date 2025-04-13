export const getCategoryApi = async () => {
    try{
        const result = await fetch(`https://books-backend.p.goit.global/books/category-list`).then((data) => {
         return data.json()
     });
     return result;
     } catch(error){
         return error;
     }
};
