import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Fetch all CPUs
export const getCpus = async () => {
    return await axios.get(`${API_URL}/cpus`);
};

// Fetch details of a single CPU
export const getCpuById = async (id) => {
    return await axios.get(`${API_URL}/cpus/${id}`);
};

// Update CPU details
export const updateCpu = async (id, data) => {
    return await axios.put(`${API_URL}/cpus/${id}`, data);
};

// Fetch all available sockets
export const getSockets = async () => {
    return await axios.get(`${API_URL}/sockets`);
};
