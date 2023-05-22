
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



export const getTvGenre = async (genre) => {
    try {
        const result = await ExtApiManager(`/discover/tv?api_key=42e3ebca36f9d5efb6901ff9bb875c43&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`, {
            method: 'GET',
        });
        return result;
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getTvVideos = async (tv_id) => {
    try {
        const result = await ExtApiManager(`/tv/${tv_id}/videos?api_key=42e3ebca36f9d5efb6901ff9bb875c43&language=en-US`, {
            method: 'GET',
        });
        return result;
    } catch (error) {
        console.log(error)
        return false
    }
}


export const getTvDetails = async (tv_id) => {
    try {
        const result = await ExtApiManager(`/tv/${tv_id}?api_key=42e3ebca36f9d5efb6901ff9bb875c43`, {
            method: 'GET',
        });
        return result;
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getTvSeasonDetails = async (tv_id, season_number) => {
    try {
        const result = await ExtApiManager(`/tv/${tv_id}/season/${season_number}?api_key=42e3ebca36f9d5efb6901ff9bb875c43&language=en-US&page=1`, {
            method: 'GET',
        });
        return result;
    } catch (error) {
        console.log(error)
        return false
    }
}