import CustomNavbar from '../assets/components/CustomNavbar';
import CustomSidebar from '../assets/components/CustomSidebar';
import '/Users/atchayaraja/frontend/src/assets/css/profile.css'
import Signinimg from '../assets/images/signin-image';
import S3Uploader from '/Users/atchayaraja/frontend/src/assets/components/S3Uploader.jsx'
function Profile()
{
    return(
        <div>
            <CustomNavbar/>
            {/* <CustomSidebar/> */}
            <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className='sign-in-form'>
            {/* <h2 className="profile-title">Documents</h2> */}
                        <h3 className='profile-sub'>SSLC Marksheet</h3>
                    <div className="input-field">
                        <S3Uploader/>
                    </div>
                    <br />
                    <h3 className='profile-sub'>HSE Marksheet</h3>
                    <div className="input-field">
                        <S3Uploader/>
                        {/* <i className="fas fa-user" />
                        <input type="text" placeholder="Username" required /> */}
                    </div>
                    <br />
                    <h3 className='profile-sub'>Transfer Certficate</h3>
                    <div className="input-field">
                        <S3Uploader/>
                        {/* <i className="fas fa-user" />
                        <input type="text" placeholder="Username" required /> */}
                    </div>
                {/* <Username/>
                <EmailId/>
                <Password/>
                <ConfirmPassword/>
                <Mobile/>
                <Role/>
               <Submit/> */}

            </form>
            {/* <div className='sign-in-form'>

            </div> */}
            
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>EduAdmit Connect</h3>
              <p>
                Online College Admission Portal
              </p>
              <br />
              {/* <SignIn/> */}
            </div>
            <Signinimg/>
          </div>
          
        </div>
      </div>
        </div>
        // </div>
    );
}
export default Profile