// import axios from './axios.base';

export const fetchAlarms = options =>
  fetch('/api/v1/alarm/?vitrage_id=all', options);
// axios.get('/api/v1/alarm/?vitrage_id=all', options);
