import axios from 'axios';
import {IAdminObjective} from '../Model/objective.tsx'

const OBJECTIVES_REST_API_URL = 'http://localhost:8081/api/objectives';

class ObjectivesService {

    async getObjectives() {
        return axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: OBJECTIVES_REST_API_URL + '/'
        }).then(res => {return res})
    }

    async getObjectivesByTripId(tripId: string) {
        return axios({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: OBJECTIVES_REST_API_URL + '/getByTrip',
            params: {tripId: tripId}
        }).then(res => {return res})
    }

    async addNewObjective(formData: IAdminObjective) {
        return axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: OBJECTIVES_REST_API_URL + '/add',
            data: JSON.stringify(formData)
        })
    }

    async deleteObjective(formData: number) {
        return axios({
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: OBJECTIVES_REST_API_URL + '/delete',
            data: JSON.stringify(formData)
        })
    }

    async updateObjective(formData: IAdminObjective) {
        return axios({
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': axios.defaults.headers.common["Authorization"]
            },
            url: OBJECTIVES_REST_API_URL + '/update',
            data: JSON.stringify(formData)
        })
    }
}

const objectiveServices = new ObjectivesService();
export default objectiveServices;