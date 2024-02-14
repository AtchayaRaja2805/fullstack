import '/Users/atchayaraja/frontend/src/assets/css/view-institute.css'
import CustomNavbar from '../assets/components/CustomNavbar';
import CustomSidebar from '../assets/components/CustomSidebar';
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function ViewInstitute()
{
  const text = "Top Institutions".split(" ");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
    const [searchQuery, setSearchQuery] = useState('');
  const institutes = [
    {
      title: 'Sri Krishna College of Engineering and Technology',
      location:'Coimbatore',
      contact:'9876543210',
      rating:'4',
      email:'admissions@skcet.ac.in',
      // imgsrc:'/Users/atchayaraja/frontend/src/assets/images/skcet.png'
      
    },
    {
      title: 'Sri Krishna College of Technology',
      location:'Coimbatore',
      contact:'9876543210',
      rating:'4',
      email:'admissions@skct.ac.in'
    },
    {
      title: 'PSG College of Technology',
      location:'Coimbatore',
      contact:'9876543210',
      rating:'4',
      email:'admissions@psg.ac.in'
    },
    {
      title: 'PSG College of Arts and Science',
      location:'Coimbatore',
      contact:'9876543210',
      rating:'4',
      email:'admissions@psgasc.ac.in'
    }
  ];
  const institutesToShow = searchQuery
    ? institutes.filter((institute) =>
    institute.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : institutes;

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };
    return(
            <div>
<div className="view-institute-body">
         

<CustomNavbar/>
<div className="institute-title">
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
    <div className="institute-scroll">
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
      <ul id="institutes-scroll-cards"ref={ref}>
        <li>
        {institutesToShow.map((institutes,index) =>(
  <div className="institute-product-card" key={index}>
    <div className="institute-image-card">
      <img src="src/assets/images/institute.png" alt="" width={200} height={200}/>

    </div>
    <div className="institute-product-content">
      <header className="institute-product-title"><Link to="/payment">{institutes.title}</Link></header>
      
      <section className="institute-product-info">
         <div className="institute-desc"> Location {institutes.location} </div>
         <div className="institute-desc"> Contact {institutes.contact} </div>
         <div className="institute-desc"> Rating {institutes.rating} </div>
         <div className="institute-desc"> Email {institutes.email} </div>
       
        
       </section>
      
    </div>
  </div>
    ))}
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
        
    );
}
export default ViewInstitute