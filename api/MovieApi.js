import ApiManager from "./ApiManager";
import ExtApiManager from "./ExtApiManager";

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

export const getPopular = async () => {
    try {
        const result = await ExtApiManager('/discover/movie?api_key=42e3ebca36f9d5efb6901ff9bb875c43&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2023&with_watch_monetization_types=flatrate', {
            method: 'GET',
        });
        return result;
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getGrossing = async () => {
    try {
        const result = await ExtApiManager('/discover/movie?api_key=42e3ebca36f9d5efb6901ff9bb875c43&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&year=2023&with_watch_monetization_types=flatrate', {
            method: 'GET',
        });
        return result;
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getVoted = async () => {
    try {
        const result = await ExtApiManager('/discover/movie?api_key=42e3ebca36f9d5efb6901ff9bb875c43&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&year=2023&with_watch_monetization_types=flatrate', {
            method: 'GET',
        });
        return result;
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getVideos = async (movie_id) => {
    try {
        const result = await ExtApiManager(`/movie/${movie_id}/videos?api_key=42e3ebca36f9d5efb6901ff9bb875c43&language=en-US`, {
            method: 'GET',
        });
        return result;
    } catch (error) {
        console.log(error)
        return false
    }
}

//getting the search suggestions


export const searchVideos = async (query) => {
    try {
        const result = await ExtApiManager(`/search/movie?api_key=42e3ebca36f9d5efb6901ff9bb875c43&language=en-US&query=${query}&page=1&include_adult=false`, {
            method: 'GET',
        });
        return result;
    } catch (error) {
        console.log(error)
        return false
    }
}