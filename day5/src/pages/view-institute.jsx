import '/Users/atchayaraja/frontend/src/assets/css/view-institute.css'
import CustomNavbar from '../assets/components/CustomNavbar';
import CustomSidebar from '../assets/components/CustomSidebar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function ViewInstitute()
{
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
          <div >
            <CustomNavbar/>
            <CustomSidebar/>
            <div className="container-left">
    {institutesToShow.map((institutes,index) =>(
  <div className="product-card" key={index}>
    <div className="image-card">
      <img src="src/assets/images/institute.png" alt="" width={200} height={200}/>

    </div>
    <div className="product-content">
      <header className="product-title"><Link to="/payment">{institutes.title}</Link></header>
      
      <section className="product-info">
         <div className="desc"> Location {institutes.location} </div>
         <div className="desc"> Contact {institutes.contact} </div>
         <div className="desc"> Rating {institutes.rating} </div>
         <div className="desc"> Email {institutes.email} </div>
       
        
       </section>
      
    </div>
  </div>
    ))}
  
  
  </div>
  




  
</div>

        </div>
        
    );
}
export default ViewInstitute