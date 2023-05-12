import axios from 'axios';
import { IUserLogin, IUserRegister } from '../Model/user.tsx';
import {IChangePass} from "../Model/user.tsx";

const LOGIN_REST_API_URL = 'http://localhost:8081/api/auth/signin';
const REGISTER_REST_API_URL = 'http://localhost:8081/api/auth/signup';
const USER_COUNT_REST_API_URL = 'http://localhost:8081/api/auth/getCount';
const CHANGE_PASS_REST_API_URL = 'http://localhost:8081/api/auth/changePass';

class AuthService {

    async loginUser(formData: IUserLogin) {
        return axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '
            },
            url: LOGIN_REST_API_URL,
            data: JSON.stringify(formData)
        }).then(res => {
            axios.defaults.headers.common["Authorization"] = 'Bearer ' + res.data.token;
            localStorage.setItem('user', JSON.stringify(res.data.username))
            localStorage.setItem('email', JSON.stringify(res.data.email))
            return res;
        }).catch(err => {
            if (err.response.status === 401) {
                throw Error(err.message);
            }
        })
    }

    async registerUser(formData: IUserRegister) {
        axios.defaults.headers.common["Authorization"] = '';
        return axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '
            },
            url: REGISTER_REST_API_URL,
            data: JSON.stringify(formData)
        });
    }

    async logoutUser() {
        window.localStorage.removeItem('token');
        axios.defaults.headers.common["Authorization"] = '';
    }

    async getCountOfLoggedUsers() {
        axios.defaults.headers.common["Authorization"] = '';
        return axios({
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: USER_COUNT_REST_API_URL,
        }).then((res) => {return res});
    }

    async changeUserPassword(formData: IChangePass) {
        axios.defaults.headers.common["Authorization"] = '';
        return axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: CHANGE_PASS_REST_API_URL,
            data: formData
        });
    }
}

const authService = new AuthService();
export default authService;