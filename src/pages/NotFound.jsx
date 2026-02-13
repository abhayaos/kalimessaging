// src/pages/NotFound.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      
      <AlertCircle className="w-16 h-16 text-gray-700 mb-4" />

      <h1 className="text-5xl font-bold mb-2 text-black">404</h1>
      <p className="text-lg text-gray-800 mb-6">
        Oops! The page you are looking for does not exist.
      </p>

   <Link
  to="/"
  className="px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
>
  Go Back Home
</Link>

      
    </div>
  )
}

export default NotFound
