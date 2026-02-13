// src/utils/Layout.jsx
import React from 'react'
import SideBar from '../components/SideBar'
import MobileNavbar from '../Mobile/Navbar'
import Header from '../Mobile/Header'
import Search from '../Mobile/Search'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen md:flex">

      {/* Sidebar - Desktop only */}
      <div className="hidden md:block">
        <SideBar />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col">

        {/* Mobile Header */}
        <div className="md:hidden">
          <Header />
        </div>

        {/* Mobile Search */}
        <div className="md:hidden">
          <Search />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 md:ml-12 md:p-6">
          {children}
        </main>

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <MobileNavbar />
        </div>

      </div>
    </div>
  )
}

export default Layout
