export const getAccount = async (name, email) => {
    // console.log(name, email)
    try {
        const account = await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts?name=${name}&email=${email}`).then((data) => {
            return data.json();
        });

        return account;
    } catch (error) {
        return error;
    };
};