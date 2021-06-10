import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://secret-stream-33212.herokuapp.com',
})
	
export default instance;