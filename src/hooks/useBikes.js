// src/hooks/useBikes.js
import { useState } from 'react';
import { bikesApi } from '../services/api/bikes';
import {toast} from 'react-hot-toast';

export const useBikes = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addBike = async (bikeData) => {
        setLoading(true);
        setError(null);
        try{
            const response = await bikesApi.addBike(bikeData);
            toast.success('Bike added successfully');
            return response
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to add bike';
            setError(errorMessage);
            toast.error(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const getAllBikes = async () => {
        try{
            const response = await bikesApi.getAllBikes();
            return response;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to fetch bikes';
            setError(errorMessage);
            toast.error(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return {
        addBike,
        getAllBikes,
        loading,
        error
    }
}