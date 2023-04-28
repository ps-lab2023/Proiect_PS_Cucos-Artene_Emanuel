import axios from 'axios';
import {IAdminRoom} from '../Model/room.tsx'

const ROOMS_REST_API_URL = 'http://localhost:8081/api/rooms';

class RoomService {

    async getRooms() {
        return axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: ROOMS_REST_API_URL + '/'
        }).then(res => {return res})
    }

    async addNewRoom(formData: IAdminRoom) {
        return axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: ROOMS_REST_API_URL + '/add',
            data: JSON.stringify(formData)
        })
    }

    async deleteRoom(formData: number) {
        return axios({
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: ROOMS_REST_API_URL + '/delete',
            data: JSON.stringify(formData)
        })
    }

    async updateRoom(formData: IAdminRoom) {
        return axios({
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: ROOMS_REST_API_URL + '/update',
            data: JSON.stringify(formData)
        })
    }
}

const roomServices = new RoomService();
export default roomServices;