import axios from 'axios'
import { API_SERVER } from '@/utils/config'
console.log(API_SERVER)

const instance = axios.create({
    timeout: 60000,
    responseType: 'json',
    baseURL: API_SERVER,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    instance,
    get(url, params) {
        return new Promise((resolve, reject) => {
            // instance.defaults.headers.common.Authorization = localStorage.token;
            instance
                .get(url, { params })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    if (error.response) {
                        reject(error.response.data)
                    } else {
                        reject(error.message)
                    }
                })
        })
    },
    post(url, body) {
        return new Promise((resolve, reject) => {
            // instance.defaults.headers.common.Authorization = localStorage.token;
            instance
                .post(url, body)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    if (error.response) {
                        reject(error.response.data)
                    } else {
                        reject(error.message)
                    }
                })
        })
    },
    put(url, body) {
        return new Promise((resolve, reject) => {
            // instance.defaults.headers.common.Authorization = localStorage.token;
            instance
                .put(url, body)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    if (error.response) {
                        reject(error.response.data)
                    } else {
                        reject(error.message)
                    }
                })
        })
    },
    delete(url, body) {
        return new Promise((resolve, reject) => {
            // instance.defaults.headers.common.Authorization = localStorage.token;
            instance
                .delete(url, body)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    if (error.response) {
                        reject(error.response.data)
                    } else {
                        reject(error.message)
                    }
                })
        })
    }
}
