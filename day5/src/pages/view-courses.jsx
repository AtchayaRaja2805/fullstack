import '/Users/atchayaraja/frontend/src/assets/css/view-courses.css'
import CustomNavbar from '../assets/components/CustomNavbar';
import CustomSidebar from '../assets/components/CustomSidebar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function ViewCourses()
{
    const [searchQuery, setSearchQuery] = useState('');
  const courses = [
    {
      title: 'Computer Science Of Engineering',
      duration:'4',
      fees:'35000',
      seats:'60',
      institution:'Sri Krishna College of Engineering and Technology',
      
    },
    {
        title: 'Information Technology',
        duration:'4',
        fees:'35000',
        seats:'60',
        institution:'Sri Krishna College of Technology',
    },
    {
        title: 'Artificial Intelligence and Data Science',
        duration:'4',
        fees:'35000',
        seats:'60',
        institution:'PSG College of Technology',
    },
    {
        title: 'Computer Science and Business Systems',
        duration:'4',
        fees:'35000',
        seats:'60',
        institution:'PSG College of Arts and Science',
    }
  ];
  const coursesToShow = searchQuery
    ? courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : courses;

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };
    return(
            <div>
          <div >
            <CustomNavbar/>
            <CustomSidebar/>
            <div className="container-left">
    {coursesToShow.map((courses,index) =>(
  <div className="product-card" key={index}>
    <div className="image-card">
      <img src="src/assets/images/institute.png" alt="" width={200} height={200}/>

    </div>
    <div className="product-content">
      <header className="product-title"><Link to="/payment">{courses.title}</Link></header>
      
      <section className="product-info">
         <div className="desc"> Duration <br />{courses.duration} </div>
         <div className="desc"> Fees {courses.fees} </div>
         <div className="desc"> Seats {courses.seats} </div>
         <div className="desc"> Institution <br /> {courses.institution} </div>
       
        
       </section>
      
    </div>
  </div>
    ))}
  
  
  </div>
  




  
</div>

        </div>
        
    );
}
export default ViewCourses