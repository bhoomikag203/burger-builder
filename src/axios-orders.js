import axios from 'axios'

const instance = axios.create({
    baseURL: "https://burger-builder-9ffd8.firebaseio.com/"
})

export default instance