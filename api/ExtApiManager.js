import axios from "axios"

const ExtApiManager = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    responseType:'json',
    withCredentials:true
})

export default ExtApiManager;