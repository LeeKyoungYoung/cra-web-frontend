import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = import.meta.env.VITE_API_BASE_URL as string;

export default client;
