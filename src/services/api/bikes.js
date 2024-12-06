import { axiosInstance } from "../axios";

export const bikesApi = {
    addBike: async (bikeData) => {
        const response = await axiosInstance.post('/bikes', bikeData);
        return response.data;
    },

    getAllBikes: async (params) => {
        const response = await axiosInstance.get('/bikes', { params });
        return response.data;
    }
}