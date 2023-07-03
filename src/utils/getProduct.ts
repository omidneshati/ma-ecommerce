import instance from '@/lib/axios/instance';
import axios, { AxiosError } from 'axios';

interface PropsType {
  id?: number;
  limit?: number;
  category?: string;
}

const getProduct = async ({ id, category, limit }: PropsType) => {
  try {
    const response = await instance.get(`products/${id}`, {
      params: !id ? { category, limit } : {}
    });
    const data = await response.data;
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Axios specific error handling
      const axiosError: AxiosError = err;
      if (axiosError.response) {
        throw new Error(axiosError.response?.status.toString());
      }
    }
    return undefined;
  }
};

export default getProduct;
