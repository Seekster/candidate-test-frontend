import axios from "axios";

export const getOrdersAPI = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/v1/orders`, {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_USER_ACCESS_TOKEN}`,
    },
  });
};
