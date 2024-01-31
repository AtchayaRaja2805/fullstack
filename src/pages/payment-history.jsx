import CustomNavbar from "../assets/components/CustomNavbar";
import CustomSidebar from "../assets/components/CustomSidebar";
import '/Users/atchayaraja/frontend/src/assets/css/admission-status.css';
import { useState } from "react";
function PaymentHistory()
{
    const [searchQuery, setSearchQuery] = useState('');
    const status=[
        {
            Id:'1',
            studentname:'Atchaya',
            coursename:'AI&DS',
            institutename:'SKCET',
            status:'Accepted',
            paymentstatus:'paid',
            amount:35000
        },
        {
            Id:'2',
            studentname:'Vishnu',
            coursename:'AI&DS',
            institutename:'SKCET',
            status:'Accepted',
            paymentstatus:'paid',
            amount:35000
        },
        {
            Id:'3',
            studentname:'Bala',
            coursename:'AI&DS',
            status:'Accepted',
            paymentstatus:'paid',
            amount:35000
        }
    ];
    const statusToShow = searchQuery
    ? status.filter((stat) =>
    stat.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : status;
    return(
        <div>
            <CustomNavbar/>
            <CustomSidebar/>
            <div className="container">
  <table>
    <thead>
    
      <tr >
        <th>Admission ID</th>
        <th>Student Name</th>
        <th>Course Name</th>
        <th>Status</th>
        <th>Payment Status</th>
        <th>Amount</th>
      </tr>
     
    </thead>
    <tbody>
    {statusToShow.map((status,index) =>(
      <tr key={index}>
        <td>{status.Id}</td>
        <td>{status.studentname}</td>
        <td>{status.coursename}</td>
        <td>{status.status}</td>
        <td>{status.paymentstatus}</td>
        <td>{status.amount}</td>

      </tr>
       ))}
      
      
    </tbody>
  </table>
</div>

        </div>
    );
}
export default PaymentHistory