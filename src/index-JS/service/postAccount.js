export const postAccount = async (account) => {
    try {
        const opinions = {
            method: "POST",
            body: JSON.stringify(account),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        };

        const posts = await fetch("https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts", opinions).then((data) => {
            return posts;
        });
    } catch (error) {
        return error;
    };
};