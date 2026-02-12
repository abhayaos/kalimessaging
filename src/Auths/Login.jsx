// src/Auths/Login.jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('Logging in your account with:', { email, username, password })
        navigate('/onboarding') // redirect after login
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white  w-full max-w-md">
                <h1 className="text-2xl font-bold mb-2 text-center text-gray-800">
                    Welcome Back to Kali Messaging
                </h1>
                <p className="text-center text-gray-600">
                    We hope you have a great experience!
                </p>
                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='new-email'
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-red-500"
                        />
                    </div>

                    {/* Username */}
                    <div>
                        <label className="block mb-1 text-gray-600">Username</label>
                        <input
                            type="text"
                            placeholder="Your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete='new-password'
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-red-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='new-password'
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-red-500"
                        />
                    </div>
                    <div className="forgot-password">
                        <a href="#" className='text-blue-500 hover:text-blue-600'>Forgot Password?</a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded-full cursor-pointer hover:bg-red-600 transition-colors"
                    >
                        Login
                    </button>
                </form>

                {/* Signup Link */}
                <p className="mt-4 text-center text-gray-600">
                    Don’t have an account?{' '}
                    <Link to="/signup" className="text-red-500 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login