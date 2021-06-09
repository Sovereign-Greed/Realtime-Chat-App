import { API } from '../axios'

export async function createNewRoomAPI(data) {
    try {
        const response = await API.post('/rooms/new', data);
        return response;
    } catch (err) {
        throw err;
    }
}
