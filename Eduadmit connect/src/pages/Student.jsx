import CustomNavbar from "../assets/components/CustomNavbar";
import CustomSidebar from "../assets/components/CustomSidebar";
// import '/Users/atchayaraja/frontend/src/assets/css/student.css';
import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import '/Users/atchayaraja/frontend/src/assets/css/student.css';

function Student()
{
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const text = "Student Dashboard".split(" ");
    return(
        <div className="student-body">
            <CustomNavbar/>
            <div className="student-title">
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
        
<div className="student-scroll">
<svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul id="student-scroll-cards" ref={ref}>
        <li>
        <div className="student-product-card">
    <div className="student-image-card">
      <img src="src/assets/images/institute.png" alt="" width={200} height={200}/>

    </div>
    <div className="student-product-content">

      <header className="student-product-title"><Link to="/view-institute">View Institues</Link></header>
      
      <section className="student-product-info">
        <span className="student-desc">Students can view the Institutes that are available for admission. </span>
        
      </section>
      
      <div className="seperator" />
    </div>
 
  </div>
        </li>
        <li>
        <div className="student-product-card">
    <div className="student-image-card">
     
      <img src="src/assets/images/student-profile.png" alt="" width={200} height={200}/>
    </div>
    <div className="student-product-content">
      <header className="student-product-title"><Link to="/profile">Add Student Profile</Link></header>
      
      <section className="student-product-info">
        <span className="student-desc">Student can add documents to their profile for verfication. </span>
       
      </section>
     
      <div className="seperator" />
    </div>
  </div>
        </li>
        <li>
        <div className="student-product-card">
    <div className="student-image-card">
    
      <img src="src/assets/images/make-payment.png" alt="" width={200} height={200}/>
    </div>
    <div className="student-product-content">
      <header className="student-product-title"><Link to="/payment">Make Payments</Link></header>
      
      <section className="student-product-info">
        <span className="student-desc">Students can make payments here. </span>
        
      </section>
      
      <div className="seperator" />
    </div>
  </div>
        </li>
        <li>
        <div className="student-product-card">
    <div className="student-image-card">
    
      <img src="src/assets/images/courses.png" alt="" width={200} height={200}/>
    </div>
    <div className="student-product-content">
      <header className="student-product-title"><Link to="/view-courses">View Courses</Link></header>
      
      <section className="student-product-info">
        <span className="student-desc">Students can see courses that are availble for admission. </span>
        
      </section>
      
      <div className="seperator" />
    </div>
  </div>
        </li>
        <li>
        <div className="student-product-card">
    <div className="student-image-card">
     
      <img src="src/assets/images/admission.png" alt="" width={200} height={200}/>
      
    </div>
    <div className="student-product-content">
      <header className="student-product-title"><Link to="/admission-status">Check Admission Details</Link></header>
      
      <section className="student-product-info">
        <span className="student-desc">Students can check their admission details. </span>
       
      </section>
      
      <div className="seperator" />
    </div>
  </div> 
        </li>
        <li>
        <div className="student-product-card">
    <div className="student-image-card">
    
      <img src="src/assets/images/payment-history.png" alt="" width={200} height={200}/>
    </div>
    <div className="student-product-content">
      <header className="student-product-title"><Link to="/payment-history">Payment History</Link></header>
      <section className="student-product-info">
        <span className="student-desc">Students can see the summary of the payments made.  </span>
        
      </section>
      
      <div className="seperator" />
    </div>
  </div>
        </li>
       
      </ul>
</div>
</div>
        </div>
    );
}
export default Student