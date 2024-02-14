// import 'C:/Users/mohan/jobapp/demo/src/assets/css/admin/admin.css'
import '/Users/atchayaraja/frontend/src/assets/css/admin-dashboard.css'
import Header from '/Users/atchayaraja/frontend/src/pages/header.jsx'
import Sidebar from '/Users/atchayaraja/frontend/src/pages/sidebar.jsx'
import AdminHome from '/Users/atchayaraja/frontend/src/pages/admin-home.jsx'
// import CustomNavbar from '/Users/atchayaraja/frontend/src/assets/components/CustomNavbar.jsx'
import { useState } from 'react'

function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
        {/* <CustomNavbar/> */}
      {/* <Header OpenSidebar={OpenSidebar}/> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <AdminHome/>
    </div>
  )
}

export default AdminDashboard;