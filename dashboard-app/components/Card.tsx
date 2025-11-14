'use client'

import React from 'react'

interface CardProps {
  title: string
  value: string | number
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded p-4 w-64">
      <h2 className="text-gray-500 text-sm">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

export default Card
