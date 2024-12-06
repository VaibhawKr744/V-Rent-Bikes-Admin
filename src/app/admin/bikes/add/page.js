'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function AddBikePage() {
  const [bikeData, setBikeData] = useState({
    name: '',
    brand: '',
    model: '',
    price: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here we'll add the API call later
    console.log('Form submitted:', bikeData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setBikeData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Add New Bike</h1>
        <Link 
          href="/admin"
          className="text-blue-600 hover:text-blue-800"
        >
          Back to Admin
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Bike Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={bikeData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
            Brand
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            value={bikeData.brand}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700">
            Model
          </label>
          <input
            type="text"
            name="model"
            id="model"
            value={bikeData.model}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={bikeData.price}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="4"
            value={bikeData.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add Bike
          </button>
        </div>
      </form>
    </div>
  )
}