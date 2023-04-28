import axios from 'axios';
import {IAdminAirport} from '../Model/airport.tsx'

const AIRPORTS_REST_API_URL = 'http://localhost:8081/api/airports';

class AirportService {

    async getAirports() {
        return axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: AIRPORTS_REST_API_URL + '/'
        }).then(res => {return res})
    }

    async addNewAirport(formData: IAdminAirport) {
        return axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: AIRPORTS_REST_API_URL + '/add',
            data: JSON.stringify(formData)
        })
    }

    async deleteAirport(formData: number) {
        return axios({
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: AIRPORTS_REST_API_URL + '/delete',
            data: JSON.stringify(formData)
        })
    }

    async updateAirport(formData: IAdminAirport) {
        return axios({
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: AIRPORTS_REST_API_URL + '/update',
            data: JSON.stringify(formData)
        })
    }
}

const airportServices = new AirportService();
export default airportServices;