import axios from "axios";

export const getServicesAPI = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/v1/services`);
};

export const findServiceByIdAPI = (id) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/v1/services/${id}`);
};

export const bookingServiceAPI = (id) => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/v1/services/${id}/booking`,
    {},
    {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_USER_ACCESS_TOKEN}`,
      },
    }
  );
};
