import axios from "axios"

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/"

function signup(user){
    const promise = axios.post(`${BASE_URL}/sign-up`, user);
    return promise
}

const signupAPI = {signup}
export default signupAPI

