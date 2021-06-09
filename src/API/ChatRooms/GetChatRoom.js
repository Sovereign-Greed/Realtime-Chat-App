import { API } from '../axios'

export async function getChatRoomAPI(data) {
    try {
        const response = await API.get(`/${data.room_id}/messages`);
        return response;
    } catch (err) {
        throw err;
    }
}
