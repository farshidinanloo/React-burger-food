import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-food.firebaseio.com/'
})

export default instance