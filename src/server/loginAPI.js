import axios from "axios"

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/"

function login(user){
    const promise = axios.post(`${BASE_URL}/login`, user);
    return promise
}

const loginAPI = {login}
export default loginAPI

