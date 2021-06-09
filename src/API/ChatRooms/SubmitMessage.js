import { API } from '../axios'

export async function submitMessageAPI(data) {
    try {
        const response = await API.post(`/${data.room_id}/messages/new`);
        return response;
    } catch (err) {
        throw err;
    }
}
