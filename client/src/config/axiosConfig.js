import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hk-net-dqz9i.ondigitalocean.app/',
});

export default instance;
