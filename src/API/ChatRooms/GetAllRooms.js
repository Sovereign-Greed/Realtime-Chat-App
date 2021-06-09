import { API } from '../axios'

export async function getAllRoomsAPI() {
    try {
        const response = await API.get('/rooms/all');
        return response;
    } catch (err) {
        throw err;
    }
}
