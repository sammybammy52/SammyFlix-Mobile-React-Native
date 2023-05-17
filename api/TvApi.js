
import ExtApiManager from "./ExtApiManager";

export const getPopularTv = async () => {
    try {
        const result = await ExtApiManager('/tv/on_the_air?api_key=42e3ebca36f9d5efb6901ff9bb875c43&language=en-US&page=1', {
            method: 'GET',
        });
        return result;
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getTopRatedTv = async () => {
    try {
        const result = await ExtApiManager('/tv/top_rated?api_key=42e3ebca36f9d5efb6901ff9bb875c43&language=en-US&page=1', {
            method: 'GET',
        });
        return result;
    } catch (error) {
        console.log(error)
        return false
    }
}