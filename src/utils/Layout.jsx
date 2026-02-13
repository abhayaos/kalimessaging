// src/utils/Layout.jsx
import React from 'react'
import SideBar from '../components/SideBar'
import MobileNavbar from '../Mobile/Navbar'

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar - Hidden on mobile, visible on md and up */}
      <div className="hidden md:block">
        <SideBar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">

        {/* Mobile Navbar - Visible only on mobile */}
        <div className="block md:hidden">
          <MobileNavbar />
        </div>

        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>

      </div>
    </div>
  )
}

export default Layout
