import { Nav, Navbar } from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import GroupIcon from '@rsuite/icons/legacy/Group';
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
import ExitIcon from '@rsuite/icons/legacy/Exit';
import AddressbookIcon from '@rsuite/icons/legacy/AddressBook';
import PeoplesMapIcon from '@rsuite/icons/legacy/PeoplesMap';
import BookIcon from '@rsuite/icons/legacy/Book';


import 'rsuite/dist/rsuite.min.css'
const CustomNavbar=()=>{
    return(
        <Navbar>
    <Navbar.Brand href="#">EduAdmit Connect</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon color="#F86F03"/>}>Home</Nav.Item>
      <Nav.Item icon={<GroupIcon color="#F86F03"/>}>Student</Nav.Item>
      <Nav.Item icon={<PeoplesMapIcon color="#F86F03"/>}>Institute</Nav.Item>
      <Nav.Item icon={< BookIcon color="#F86F03"/>}>Courses</Nav.Item>
      <Nav.Item icon={< AddressbookIcon color="#F86F03"/>}>Contact</Nav.Item>
      
    </Nav>
    <Nav pullRight>
    <Nav.Menu icon={<CogIcon color="#F86F03"/>} title="Settings">
        <Nav.Item icon={<AvatarIcon color="#F86F03"/>}>Profile</Nav.Item>
        <Nav.Item icon={<ExitIcon color="#F86F03"/>}>Log Out</Nav.Item>
        </Nav.Menu>
      {/* <Nav.Item icon={<CogIcon />}>Settings</Nav.Item> */}
    </Nav>
  </Navbar>
    );

}
export default CustomNavbar