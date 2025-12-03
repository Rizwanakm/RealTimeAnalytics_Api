import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/analytics';

export const postEvent = (payload: { eventType: string; metadata?: any }) =>
  axios.post(`${API_BASE}/events`, payload);

export const fetchRecent = () => axios.get(`${API_BASE}/events/recent`);
