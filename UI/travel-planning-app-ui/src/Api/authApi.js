import axios from 'axios';
import { IUserLogin, IUserRegister } from '../Model/user.tsx';

const LOGIN_REST_API_URL = 'http://localhost:8081/api/auth/signin';
const REGISTER_REST_API_URL = 'http://localhost:8081/api/auth/signup'

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
}

const authService = new AuthService();
export default authService;