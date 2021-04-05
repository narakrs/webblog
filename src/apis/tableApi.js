import axiosService from '../commons/axiosService';
import { HOST_URL } from '../constants/Url';

const url = 'tables/table';
export const getTable = () => {
  return axiosService.get(`${HOST_URL}/${url}`);
};
export const postTable = data => {
  return axiosService.post(`${HOST_URL}/${url}`, data);
};
