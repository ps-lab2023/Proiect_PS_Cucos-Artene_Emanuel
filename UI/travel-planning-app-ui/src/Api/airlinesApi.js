import axios from 'axios';
import {IAdminAirline} from '../Model/airline.tsx'

const AIRLINES_REST_API_URL = 'http://localhost:8081/api/airlines';

class AirlinesService {

    async getAirlines() {
        return await axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: AIRLINES_REST_API_URL + '/'
        }).then(res => {return res})
    }

    async addNewAirline(formData: IAdminAirline) {
        return axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: AIRLINES_REST_API_URL + '/add',
            data: JSON.stringify(formData)
        })
    }

    async deleteAirline(formData: number) {
        return axios({
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: AIRLINES_REST_API_URL + '/delete',
            data: JSON.stringify(formData)
        })
    }

    async updateAirline(formData: IAdminAirline) {
        return axios({
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: AIRLINES_REST_API_URL + '/update',
            data: JSON.stringify(formData)
        })
    }
}

const airlineServices = new AirlinesService();
export default airlineServices;