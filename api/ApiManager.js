import axios from "axios"

const ApiManager = axios.create({
    baseURL: "https://thoughtful-puce-vestments.cyclic.app",
    responseType:'json',
    withCredentials:true
})

export default ApiManager;