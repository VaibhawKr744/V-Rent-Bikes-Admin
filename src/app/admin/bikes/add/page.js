// src/app/admin/bikes/add/page.js
'use client';
import { useState } from 'react';
import { useBikes } from '@/hooks/useBikes';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const initialBikeData = {
  name: '',
  model: '',
  description: '',
  price: '',
  status: 'available'
};

export default function AddBikePage() {
  const router = useRouter();
  const { addBike, loading, error } = useBikes();
  const [bikeData, setBikeData] = useState(initialBikeData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await addBike(bikeData);
      // On success: redirect to bikes list
      router.push('/admin/bikes');
    } catch (err) {
      // Error is already handled by the hook
      // We can add specific UI error handling here if needed
      console.error('Failed to add bike:', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Add New Bike</h1>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Bike Name</label>
          <input
            type="text"
            value={bikeData.name}
            onChange={(e) => setBikeData(prev => ({
              ...prev,
              name: e.target.value
            }))}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Bike Model</label>
          <input
            type="text"
            value={bikeData.type}
            onChange={(e) => setBikeData(prev => ({
              ...prev,
              model: e.target.value
            }))}
            className='w-full p-2 border rounded-md'
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
        >
          {loading ? 'Adding...' : 'Add Bike'}
        </button>
      </form>
    </div>
  );
}
