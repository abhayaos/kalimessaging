// src/utils/Layout.jsx
import React, { useState } from 'react'
import SideBar from '../components/SideBar'

const Layout = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {!hideSidebar && <SideBar />}

      {/* Main content */}
      <main className={`flex-1 p-4 md:p-6`}>
        {children}
      </main>
    </div>
  )
}

export default Layout