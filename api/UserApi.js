import ApiManager from "./ApiManager";

export const userLogin = async (data) => {
    try {
        const result = await ApiManager('/login', {
            method: 'POST',
            data:data,
        });
        return result;
    } catch (error) {
        console.log(error)
        return false
    }
}

export const userRegister = async (data) => {
    try {
        const result = await ApiManager('/signup', {
            method: 'POST',
            data:data,
        });

        return result;
    } catch (error) {
        console.log(error);
        return false
    }
}