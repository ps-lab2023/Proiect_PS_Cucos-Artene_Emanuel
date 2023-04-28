import axios from 'axios';
// @ts-ignore
import {IEmailDetails} from "../Model/emailDetails.tsx";

const EMAILS_REST_API_URL = 'http://localhost:8081/api/emails';

class EmailService {

    async sendSimpleMail(data: IEmailDetails) {
        return axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: EMAILS_REST_API_URL + '/simpleMail',
            data: JSON.stringify(data)
        }).then(res => {return res})
    }
}

const emailServices = new EmailService();
export default emailServices;