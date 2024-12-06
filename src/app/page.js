import Link from 'next/link'

export default function AdminPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Bike Admin Portal</h1>
      
      <div className="flex gap-4">
        <Link 
          href="/admin/bikes/add"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add New Bike
        </Link>
        
        <Link 
          href="/admin/bikes"
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors"
        >
          View All Bikes
        </Link>
      </div>
    </div>
  )
}