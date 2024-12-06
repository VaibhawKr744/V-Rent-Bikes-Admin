// src/app/admin/bikes/page.js
'use client';
import { useEffect, useState } from 'react';
import { useBikes } from '@/hooks/useBikes';

export default function BikesListPage() {
  const { getAllBikes, loading, error } = useBikes();
  const [bikes, setBikes] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await getAllBikes();
        // Now handling the nested data structure
        if (response.success) {
          setBikes(response.data);
          setTotalCount(response.count);
        }
      } catch (err) {
        console.error('Error fetching bikes:', err);
      }
    };

    fetchBikes();
  }, []);

  if (loading) return <div>Loading bikes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">All Bikes</h1>
          <p className="text-gray-600">Total bikes: {totalCount}</p>
        </div>
      </div>
      
      <div className="grid gap-4">
        {bikes.map(bike => (
          <div key={bike._id} className="p-4 bg-white border rounded-md shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">{bike.name}</h2>
                <p className="text-gray-600">Model: {bike.model}</p>
              </div>
              <div className="text-sm text-gray-500">
                Added: {new Date(bike.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
        
        {bikes.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No bikes available. Add your first bike!
          </div>
        )}
      </div>
    </div>
  );
}