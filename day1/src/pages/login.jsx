import '/Users/atchayaraja/frontend/src/assets/css/login.css'
import '@fortawesome/fontawesome-free/css/all.css';
import Username from '/Users/atchayaraja/frontend/src/assets/components/username-textbox.jsx';
import Password from '../assets/components/password-textbox';
import Submit from '../assets/components/submit-button';
import Signup from '../assets/components/signup-button';
import Signinimg from '../assets/images/signin-image';
function Login() {

    return (
      <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Sign in &amp; Sign up Form</title>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              
              <div>
                <Username/>
              </div>
              
              <div>
                <Password/>
              </div>
              <Submit/>
              {/* <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div> */}
            </form>
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
              <Signup/>
            </div>
            <Signinimg/>
          </div>
          
        </div>
      </div>
    </>
    

    )
  }
  
  export default Login