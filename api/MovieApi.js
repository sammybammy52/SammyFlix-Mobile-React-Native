import ApiManager from "./ApiManager";

export const getAllMovies = async () => {
    try {
        const result = await ApiManager('/allmovies', {
            method: 'GET',
        });
        return result;
    } catch (error) {
        console.log(error)
        return false
    }
}