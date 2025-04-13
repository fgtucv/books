export const getBookApi = async (api) => {
    try{
        const result = await fetch(`${api}`).then((data) => {
         return data.json()
     });
     return result;
     } catch(error){
         return error;
     }
};
