import axios from 'axios';
import {IAdminFlight} from '../Model/flight.tsx'

const FLIGHTS_REST_API_URL = 'http://localhost:8081/api/flights';

class FlightsService {

    async getFlights() {
        return axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: FLIGHTS_REST_API_URL + '/'
        }).then(res => {return res})
    }

    async getFlightsByTripId(tripId: string) {
        return axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: FLIGHTS_REST_API_URL + '/getByTrip',
            params: {tripId: tripId}
        }).then(res => {return res})
    }

    async addNewFlight(formData: IAdminFlight) {
        return axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: FLIGHTS_REST_API_URL + '/add',
            data: JSON.stringify(formData)
        })
    }

    async deleteFlight(formData: number) {
        return axios({
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: FLIGHTS_REST_API_URL + '/delete',
            data: JSON.stringify(formData)
        })
    }

    async updateFlight(formData: IAdminFlight) {
        return axios({
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: FLIGHTS_REST_API_URL + '/update',
            data: JSON.stringify(formData)
        })
    }
}

const flightServices = new FlightsService();
export default flightServices;