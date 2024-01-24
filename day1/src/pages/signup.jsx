import '/Users/atchayaraja/frontend/src/assets/css/login.css'
import '@fortawesome/fontawesome-free/css/all.css';
import Username from '/Users/atchayaraja/frontend/src/assets/components/username-textbox.jsx';
import Password from '../assets/components/password-textbox';
import Submit from '../assets/components/submit-button';
import Signup from '../assets/components/signup-button';
import Signinimg from '../assets/images/signin-image';
import SignIn from '../assets/components/signin-button';
import EmailId from '../assets/components/email-textbox';
import ConfirmPassword from '../assets/components/confirmpassword-textbox';
import Mobile from '../assets/components/mobile-textbox';
import Role from '../assets/components/role-textbox';
function Register() {

    return (
      <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Sign in &amp; Sign up Form</title>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className='sign-in-form'>
            <h2 className="title">Sign up</h2>
                <Username/>
                <EmailId/>
                <Password/>
                <ConfirmPassword/>
                <Mobile/>
                <Role/>
               <Submit/>

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
              <SignIn/>
            </div>
            <Signinimg/>
          </div>
          
        </div>
      </div>
    </>
    

    )
  }
  
  export default Register