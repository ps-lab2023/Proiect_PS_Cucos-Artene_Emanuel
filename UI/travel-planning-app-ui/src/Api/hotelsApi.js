import axios from 'axios';
import {IAdminHotel} from '../Model/hotel.tsx'

const HOTELS_REST_API_URL = 'http://localhost:8081/api/hotels';

class HotelsService {

    async getHotels() {
        return axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: HOTELS_REST_API_URL + '/'
        }).then(res => {return res})
    }

    async getHotelsByTripId(tripId: string) {
        return axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: HOTELS_REST_API_URL + '/getByTrip',
            params: {tripId: tripId}
        }).then(res => {return res})
    }

    async addNewHotel(formData: IAdminHotel) {
        return axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: HOTELS_REST_API_URL + '/add',
            data: JSON.stringify(formData)
        })
    }

    async deleteHotel(formData: number) {
        return axios({
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: HOTELS_REST_API_URL + '/delete',
            data: JSON.stringify(formData)
        })
    }

    async updateHotel(formData: IAdminHotel) {
        return axios({
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: HOTELS_REST_API_URL + '/update',
            data: JSON.stringify(formData)
        })
    }
}

const hotelServices = new HotelsService();
export default hotelServices;