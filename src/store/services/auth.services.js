import axios from "axios";
import {server} from "../../config"

const login = async(data) => {
    return await axios.post(
        `${server}/login`,
        data
    )
}

const register = (data) => {
    return axios.post(
        `${server}/register`,
        data
    )
}

export default {
    login,
    register
}