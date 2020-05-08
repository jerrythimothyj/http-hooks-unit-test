import axios from "axios";

export default class APIService {
    public static apiBaseURL: string = "http://dummy.restapiexample.com/api/v1/"
    public static get(url: string) {
        return axios({
            method: 'get',
            url: this.apiBaseURL + url
        })
    }

    public static post(url: string, data: {}) {
        return axios({
            method: 'post',
            url: this.apiBaseURL + url,
            data
        })
    }


    public static put(url: string, data: {}) {
        return axios({
            method: 'put',
            url: this.apiBaseURL + url,
            data
        })
    }

    public static delete(url: string) {
        return axios({
            method: 'delete',
            url: this.apiBaseURL + url
        })
    }
}

