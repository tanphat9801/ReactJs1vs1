import axios from "axios"
const BASE_URL = "https://api-meme-zendvn-01.herokuapp.com/api/v2"

const api = axios.create({
    baseURL: BASE_URL 
  });

export default api  