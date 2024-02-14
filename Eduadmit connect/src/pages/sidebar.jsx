import { BsGrid1X2Fill,BsGraphUp, BsCalendar,BsPersonFill,BsCardChecklist, BsListCheck} from 'react-icons/bs';
// import 'C:/Users/mohan/jobapp/demo/src/assets/css/admin/admin.css';
import '/Users/atchayaraja/frontend/src/assets/css/admin-dashboard.css'
import { Link } from 'react-router-dom';

function Sidebar( openSidebarToggle, OpenSidebar ) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          EduAdmitConnect
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/admin-dashboard">
            <BsGrid1X2Fill className='icon' /> Dashboard
            </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/profile">
            <BsPersonFill className='icon'/> Profile
            </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/admission-status">
          <BsCardChecklist className='icon'/> Admission Details
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/payment-history">
          <BsCalendar className='icon'/>Payment History
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/login">
          <BsGrid1X2Fill className='icon'/>Log Out
          </Link>
        </li>
        
        
      </ul>
    </aside>
  )
}

export default Sidebar;