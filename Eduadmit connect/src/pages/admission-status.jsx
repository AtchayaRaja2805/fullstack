import CustomNavbar from "../assets/components/CustomNavbar";
import CustomSidebar from "../assets/components/CustomSidebar";
import '/Users/atchayaraja/frontend/src/assets/css/admission-status.css';
import { useState } from "react";
function AdmissionStatus()
{
    const [searchQuery, setSearchQuery] = useState('');
    const status=[
        {
            Id:'1',
            studentname:'Atchaya',
            coursename:'AI&DS',
            institutename:'SKCET',
            status:'shortlisted'
        },
        {
            Id:'2',
            studentname:'Vishnu',
            coursename:'AI&DS',
            institutename:'SKCET',
            status:'shortlisted'
        },
        {
            Id:'3',
            studentname:'Bala',
            coursename:'AI&DS',
            institutename:'SKCET',
            status:'shortlisted'
        }
    ];
    const statusToShow = searchQuery
    ? status.filter((stat) =>
    stat.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : status;
    return(
        <div className="admission-status-body">
            <CustomNavbar/>
            {/* <CustomSidebar/> */}
            <div className="admin-status-container">
  <table id="admin-status-table">
    <thead>
    
      <tr >
        <th>Admission ID</th>
        <th>Student Name</th>
        <th>Course Name</th>
        <th>Institute Name</th>
        <th>Status</th>
      </tr>
     
    </thead>
    <tbody>
    {statusToShow.map((status,index) =>(
      <tr key={index}>
        <td>{status.Id}</td>
        <td>{status.studentname}</td>
        <td>{status.coursename}</td>
        <td>{status.institutename}</td>
        <td>{status.status}</td>
      </tr>
       ))}
      
      
    </tbody>
  </table>
</div>

        </div>
    );
}
export default AdmissionStatus