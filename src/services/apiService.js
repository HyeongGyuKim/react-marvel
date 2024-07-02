import api from '../helpers/interceptor/axios.js';

export default {
  getSection2: () => {
    return api.get(`/dashboard/section2`).
      then((response) => response.data);
  },

  getSection3: () => {
    return api.get(`/dashboard/section3`).
    then((response) => response.data);
  },

  getSection4: () => {
    return api.get(`/dashboard/section4`).
    then((response) => response.data);
  },
  getFooter: () => {
    return api.get(`/dashboard/footer`).
    then((response) => response.data);
  },
};
