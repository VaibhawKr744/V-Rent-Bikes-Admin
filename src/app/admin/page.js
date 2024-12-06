'use client'
import Link from 'next/link'

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Bike Admin Portal
            </h1>
            
            <div className="space-y-4">
              <Link 
                href="/admin/bikes/add"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Add New Bike
              </Link>
              
              <Link 
                href="/admin/bikes"
                className="block text-blue-600 hover:text-blue-800 mt-4"
              >
                View All Bikes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}