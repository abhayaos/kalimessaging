// src/Pages/Onboarding.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const slides = [
  {
    title: 'Welcome to Kali Messaging',
    description: 'Chat seamlessly with your friends and family.',
  },
  {
    title: 'Choose Your Interests',
    description: 'Select topics you like to get a personalized experience.',
    interests: [
      'Music',
      'Movies',
      'Sports',
      'Tech',
      'Gaming',
      'Travel',
      'Food',
      'Fashion',
    ],
  },
  {
    title: 'Stay Connected',
    description: 'Never miss a message with instant notifications.',
  },
]

function Onboarding() {
  const [current, setCurrent] = useState(0)
  const [selectedInterests, setSelectedInterests] = useState([])
  const navigate = useNavigate()

  const nextSlide = () => {
    if (current === 1 && selectedInterests.length === 0) {
      alert('Please select at least one interest!')
      return
    }

    if (current < slides.length - 1) {
      setCurrent(current + 1)
    } else {
      console.log('Selected interests:', selectedInterests)
      navigate('/') // redirect after onboarding
    }
  }

  const skip = () => {
    navigate('/')
  }

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    )
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="bg-white  w-full max-w-md">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          {slides[current].title}
        </h1>
        <p className="text-center text-gray-600 mb-6">{slides[current].description}</p>

        {/* Interests selection */}
        {slides[current].interests && (
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {slides[current].interests.map((interest) => (
              <button
                key={interest}
                onClick={() => toggleInterest(interest)}
                className={`px-4 py-2 cursor-pointer rounded-full border transition-colors ${
                  selectedInterests.includes(interest)
                    ? 'bg-red-500 text-white border-red-500'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-red-500 hover:text-white'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        )}

        {/* Dots */}
        <div className="flex justify-center mb-6 space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? 'bg-red-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between w-full">
          <button
            onClick={skip}
            className="text-gray-500 hover:text-gray-700 font-medium"
          >
            Skip
          </button>
          <button
            onClick={nextSlide}
            className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
          >
            {current === slides.length - 1 ? 'Get Started' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Onboarding