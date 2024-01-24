import CustomNavbar from '../assets/components/CustomNavbar'
import CustomSidebar from '../assets/components/CustomSidebar'
import S3Uploader from '../assets/components/S3UPLOADER.JSX'
// import Navbar from './assets/components/navbar'
import '/Users/atchayaraja/frontend/src/assets/css/home.css'
import '/Users/atchayaraja/frontend/src/assets/css/home.css'
function Home()
{
    return(
        <div className='body'>
        <div>
            <CustomNavbar/>
        </div>

        <div>
            <CustomSidebar/>
        </div>
        
        <div>
                <br />
                <h1 id='home-title'>  WELCOME !</h1>

            <div className='home-content'>
            Welcome to our online college admission portal,
             where the journey to higher education begins with simplicity and efficiency.
              We understand the importance of a seamless and transparent admission process,
               and our portal is designed with these principles in mind. Our mission is to empower
                aspiring students by providing a user-friendly platform for submitting applications and
                 receiving timely decisions. As an institution with a rich history and commitment to 
                 academic excellence, we take pride in offering a modern and secure admission experience.
                  The portal incorporates advanced technology to ensure the confidentiality and integrity 
                  of your data. We invite you to explore the key features that make our portal unique, 
                  offering benefits such as convenience, transparency, and a streamlined admission process.
                   For any inquiries or support, our dedicated team is ready to assist you.
            </div>
        </div>
        <S3Uploader/>
        </div>
    )
}
export default Home