import '/Users/atchayaraja/frontend/src/assets/css/view-courses.css'
import CustomNavbar from '../assets/components/CustomNavbar';
import CustomSidebar from '../assets/components/CustomSidebar';
import React, { useState } from 'react';
import { useRef } from "react";
import { Link } from 'react-router-dom';
import { motion, useScroll } from "framer-motion";
function ViewCourses()
{
  const text = "Courses Available".split(" ");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
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
            <div className="view-courses-body">
          <div >
            <CustomNavbar/>
            <div className="courses-title">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
            
<div >
  <div className="courses-scroll">
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      </div>
      <ul id="courses-scroll-cards"ref={ref}>
        <li>
        <div className="container-left">
    {coursesToShow.map((courses,index) =>(
  <div className="courses-product-card" key={index}>
    <div className="courses-image-card">
      <img src="src/assets/images/institute.png" alt="" width={200} height={200}/>

    </div>
    <div className="courses-product-content">
      <header className="courses-product-title"><Link to="/payment">{courses.title}</Link></header>
      
      <section className="courses-product-info">
         <div className="courses-desc"> Duration <br />{courses.duration} </div>
         <div className="courses-desc"> Fees {courses.fees} </div>
         <div className="courses-desc"> Seats {courses.seats} </div>
         <div className="courses-desc"> Institution <br /> {courses.institution} </div>
       
        
       </section>
      
    </div>
  </div>
    ))}
  
  
  </div>
  </li>
        
        {/* <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li> */}
      </ul>
      </div>
   


        </div>



  
</div>

    
        
    );
}
export default ViewCourses