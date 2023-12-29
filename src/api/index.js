import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
});

export const validateRegistration = async (data) => {
  return axiosInstance.post(`/registration/validate`, data).catch((err) => {
    if (err.response?.status < 500) {
      throw err.response.data;
    }
    throw err;
  });
};
