import axios from 'axios';
import {IUserTrip} from '../Model/trip.tsx'
import {IModalTrip} from "../Model/trip.tsx";

const TRIPS_REST_API_URL = 'http://localhost:8081/api/trips';

class TripService {

    async getTrips(username: string) {
        return axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: TRIPS_REST_API_URL + '/',
        }).then(res => {return res})
    }

    async addNewTrip(formData: IUserTrip) {
        return axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: TRIPS_REST_API_URL + '/add',
            data: JSON.stringify(formData)
        })
    }

    async deleteTrip(formData) {
        return axios({
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: TRIPS_REST_API_URL + '/delete',
            data: JSON.stringify(formData)
        })
    }

    async updateTrip(formData: IUserTrip) {
        return axios({
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: TRIPS_REST_API_URL + '/update',
            data: JSON.stringify(formData)
        })
    }

    async addFlightToTrip(formData) {
        return axios({
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: TRIPS_REST_API_URL + '/aft',
            params: {
                flightId: formData.flightId,
                tripId: formData.tripId
            }
        })
    }

    async addHotelToTrip(formData) {
        return axios({
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: TRIPS_REST_API_URL + '/aht',
            params: {
                hotelId: formData.hotelId,
                tripId: formData.tripId
            }
        })
    }

    async addObjectiveToTrip(formData) {
        return axios({
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: TRIPS_REST_API_URL + '/aot',
            params: {
                objectiveId: formData.objectiveId,
                tripId: formData.tripId
            }
        })
    }

    async sendTripData(formData: IModalTrip) {
        return axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: TRIPS_REST_API_URL + '/data',
            data: JSON.stringify(formData)
        })
    }
}

const tripServices = new TripService();
export default tripServices;