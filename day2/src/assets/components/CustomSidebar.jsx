import '/Users/atchayaraja/frontend/src/assets/css/side.css'
import CharacterAuthorizeIcon from '@rsuite/icons/legacy/CharacterAuthorize';
import CreditCardIcon from '@rsuite/icons/legacy/CreditCard';
import HistoryIcon from '@rsuite/icons/legacy/History';
import React from 'react'; 
import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import { Link } from 'react-router-dom';
// import GroupIcon from '@rsuite/icons/legacy/Group';
// import MagicIcon from '@rsuite/icons/legacy/Magic';
// import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

const CustomSidebar=()=>{
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');
    return(  

    <div className='side'  >
      <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
      />
      <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']} style={{height:665}} >
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<CharacterAuthorizeIcon color="#F86F03"/>}>
              <Link to="/admission-status">
              Admission Status
              </Link>
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<CreditCardIcon color="#F86F03"/>}>
              <Link to="/payment">
              Payment
              </Link>
            </Nav.Item>
            <Nav.Item eventKey="3" icon={< HistoryIcon color="#F86F03"/>}>
            <Link to="/payment-history">
              Payment History
              </Link>
            </Nav.Item>
            <Nav.Item eventKey="4" icon={< DashboardIcon color="#F86F03"/>}>
            <Link to="/admin-dashboard">
              Admin Dashboard
              </Link>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
    );
}
export default CustomSidebar