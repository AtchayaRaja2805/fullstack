import CustomNavbar from "../assets/components/CustomNavbar";
import CustomSidebar from "../assets/components/CustomSidebar";
// import '/Users/atchayaraja/frontend/src/assets/css/student.css';
import { Link } from "react-router-dom";
import '/Users/atchayaraja/frontend/src/assets/css/student.css';

function Student()
{
    return(
        <div>
          <div >
            <CustomNavbar/>
            <CustomSidebar/>
            <div className="container-left">
  <div className="product-card">
    <div className="image-card">
      <img src="src/assets/images/institute.png" alt="" width={200} height={200}/>

    </div>
    <div className="product-content">

      <header className="product-title"><Link to="/view-institute">View Institues</Link></header>
      
      <section className="product-info">
        <span className="desc">Students can view the Institutes that are available for admission. </span>
        
      </section>
      
      <div className="seperator" />
    </div>
 
  </div>
  <div className="product-card">
    <div className="image-card">
      {/* <img src="https://picsum.photos/g/300/300/" alt="product-image" /> */}
      <img src="src/assets/images/student-profile.png" alt="" width={200} height={200}/>
    </div>
    <div className="product-content">
      <header className="product-title"><Link to="/profile">Add Student Profile</Link></header>
      
      <section className="product-info">
        <span className="desc">Student can add documents to their profile for verfication. </span>
       
      </section>
     
      <div className="seperator" />
    </div>
  </div>
  <div className="product-card">
    <div className="image-card">
      {/* <img src="https://picsum.photos/g/300/300/" alt="product-image" /> */}
      <img src="src/assets/images/make-payment.png" alt="" width={200} height={200}/>
    </div>
    <div className="product-content">
      <header className="product-title"><Link to="/payment">Make Payments</Link></header>
      
      <section className="product-info">
        <span className="desc">Students can make payments here. </span>
        
      </section>
      
      <div className="seperator" />
    </div>
  </div>
  </div>


  <div className="container-right">
  <div className="product-card">
    <div className="image-card">
      {/* <img src="https://picsum.photos/300/300/" alt="product-image" /> */}
      <img src="src/assets/images/courses.png" alt="" width={200} height={200}/>
    </div>
    <div className="product-content">
      <header className="product-title"><Link to="/view-courses">View Courses</Link></header>
      
      <section className="product-info">
        <span className="desc">Students can see courses that are availble for admission. </span>
        
      </section>
      
      <div className="seperator" />
    </div>
  </div>
  <div className="product-card">
    <div className="image-card">
      {/* <img src="https://picsum.photos/g/300/300/" alt="product-image" /> */}
      <img src="src/assets/images/admission.png" alt="" width={200} height={200}/>
      
    </div>
    <div className="product-content">
      <header className="product-title"><Link to="/admission-status">Check Admission Details</Link></header>
      
      <section className="product-info">
        <span className="desc">Students can check their admission details. </span>
       
      </section>
      
      <div className="seperator" />
    </div>
  </div>
  <div className="product-card">
    <div className="image-card">
      {/* <img src="https://picsum.photos/g/300/300/" alt="product-image" /> */}
      <img src="src/assets/images/payment-history.png" alt="" width={200} height={200}/>
    </div>
    <div className="product-content">
      <header className="product-title"><Link to="/payment-history">Payment History</Link></header>
      <section className="product-info">
        <span className="desc">Students can see the summary of the payments made.  </span>
        
      </section>
      
      <div className="seperator" />
    </div>
  </div>
  </div>
  




  <div className="popup-wrapper" style={{ display: "none" }}>
    <div className="popup">
      <header>Details</header>
      <ul>
        <li>
          <span>item one with so and so</span>
          <button onclick="handlePopupClick()">$3000</button>
        </li>
        <li>
          <span>item one with so and so</span>
          <button onclick="handlePopupClick()">$3000</button>
        </li>
        <li>
          <span>item one with so and so</span>
          <button onclick="handlePopupClick()">$3000</button>
        </li>
        <li>
          <span>item one with so and so</span>
          <button onclick="handlePopupClick()">$3000</button>
        </li>
        <li>
          <span>item one with so and so</span>
          <button onclick="handlePopupClick()">$3000</button>
        </li>
        <li>
          <span>item one with so and so</span>
          <button onclick="handlePopupClick()">$3000</button>
        </li>
        <li>
          <span>item one with so and so</span>
          <button onclick="handlePopupClick()">$3000</button>
        </li>
      </ul>
    </div>
  </div>
</div>

        </div>
    );
}
export default Student