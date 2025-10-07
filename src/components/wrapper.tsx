import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidbar'
import Dashboard from '../pages/dashboard/dashboard'

export default function wrapper() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Dashboard />
    </div>
  )
}
