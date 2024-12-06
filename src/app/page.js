import React from 'react';
import Link from 'next/link';
import { Layout, BarChart3, Bike, Users, Settings, LogOut } from 'lucide-react';

const AdminPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-800">Bike Admin</h1>
          <p className="text-sm text-gray-500">Management Portal</p>
        </div>
        
        <nav className="space-y-1">
          <Link href="/admin/dashboard" 
            className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors">
            <BarChart3 className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link href="/admin/bikes" 
            className="flex items-center px-4 py-3 text-blue-700 bg-blue-50 rounded-lg font-medium">
            <Bike className="w-5 h-5 mr-3" />
            Bikes
          </Link>
          <Link href="/admin/users" 
            className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors">
            <Users className="w-5 h-5 mr-3" />
            Users
          </Link>
          <Link href="/admin/settings" 
            className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Link>
        </nav>
        
        <div className="absolute bottom-4 w-56">
          <button className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors w-full">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Bike Management</h2>
            <p className="text-gray-600">Add and manage your bicycle inventory</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/admin/bikes/add" 
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-4">
                <Bike className="w-8 h-8 text-blue-600" />
                <span className="text-blue-600 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Add New Bike</h3>
              <p className="text-gray-600">Register a new bicycle to your rental inventory</p>
            </Link>

            <Link href="/admin/bikes" 
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-4">
                <Layout className="w-8 h-8 text-gray-600" />
                <span className="text-gray-600 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">View All Bikes</h3>
              <p className="text-gray-600">Manage and view your entire bicycle inventory</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;