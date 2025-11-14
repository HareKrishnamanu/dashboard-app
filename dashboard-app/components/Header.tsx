'use client'

import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow p-4 mb-6 flex justify-between items-center">
      <h2 className="text-xl font-bold">Dashboard App</h2>
      <nav>
        <a className="mr-4 text-blue-600 hover:underline" href="/">Home</a>
        <a className="text-blue-600 hover:underline" href="/analytics">Analytics</a>
      </nav>
    </header>
  )
}
