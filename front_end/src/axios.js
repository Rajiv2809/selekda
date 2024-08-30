
import axios from "axios";

const URL = `http://127.0.0.1:8000/api/v1`

const axiosClient = axios.create({
    baseURL: URL
})
axiosClient.interceptors.request.use(config => {
    config.params = {
        token : localStorage.getItem('accessToken')
    }
    return config
})

axiosClient.interceptors.response.use(
    response => {
        return response
    },
    error => {
        const {response} = error
        if (response.status === 401 && response.message === 'Unauthorized user') {
            localStorage.removeItem('accessToken')
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)
export default axiosClient;