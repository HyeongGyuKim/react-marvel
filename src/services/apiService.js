import api from '../helpers/interceptor/axios.js';

export default {
  getSection2: () => {
    return api.get(`/dashboard/section2`).
      then((response) => response.data);
  },
};
