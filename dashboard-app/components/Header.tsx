'use client'

import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow p-4 mb-6 flex justify-between items-center">
      <h2 className="text-xl font-bold">Dashboard App</h2>
      <nav>
        <Link className="mr-4 text-blue-600 hover:underline" href="/">Home</Link>
        <Link className="text-blue-600 hover:underline" href="/analytics">Analytics</Link>
      </nav>
    </header>
  )
}
