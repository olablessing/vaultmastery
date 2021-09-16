import axios from 'axios';
// export default axios.create({baseURL: 'http://localhost:5000/'});
export const API = axios.create({baseURL: 'https://omooye.herokuapp.com/user'});