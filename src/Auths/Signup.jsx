// src/Auths/SignUp.jsx
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    console.log('Creating account with:', { email, username, password })
    navigate('/login') // redirect after signup
  }

  // Dynamic password check
  useEffect(() => {
    if (!confirmPassword) {
      setPasswordMessage('')
    } else if (password === confirmPassword) {
      setPasswordMessage('Passwords match ✅')
    } else {
      setPasswordMessage('Passwords do not match ❌')
    }
  }, [password, confirmPassword])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-md">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-2 text-center text-gray-800">
          Create Your Account
        </h1>
        <p className="text-center text-gray-600">
          Join Kali Messaging and enjoy seamless chatting!
        </p>

        {/* Form */}
        <form onSubmit={handleSignUp} autoComplete="off" className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="new-email"
              required
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-red-500"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block mb-1 text-gray-600">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="new-username"
              required
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-red-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-red-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-gray-600">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-red-500"
            />
            {/* Password match message */}
            <p className={`mt-1 text-sm ${passwordMessage.includes('match') ? 'text-green-600' : 'text-red-500'}`}>
              {passwordMessage}
            </p>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-full cursor-pointer hover:bg-red-600 transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-red-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp