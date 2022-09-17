import React from 'react'
import AdminSidebar from '../components/AdminSideBar'
import AdminBody from '../components/AdminBody'
import LineGraph from '../components/LineGraph'

export default function Sidebar() {
  return (
    <div className='flex'>
      <AdminSidebar />
      <AdminBody />
    </div>
  )
}
