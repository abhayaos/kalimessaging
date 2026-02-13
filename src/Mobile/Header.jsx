import React from 'react'
import { MessageSquareDiff } from 'lucide-react'

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4">
      <h2 className="text-xl font-bold">
        Kali Messages
      </h2>

      <MessageSquareDiff className="w-6 h-6" />
    </header>
  )
}

export default Header
