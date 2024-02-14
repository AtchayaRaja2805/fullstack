import '/Users/atchayaraja/frontend/src/assets/css/login.css'
import '/Users/atchayaraja/frontend/src/assets/css/buttons/submitbutton.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { signIn } from '../services/Auth';
// import Signup from '../assets/components/signup-button';
import Signinimg from '../assets/images/signin-image';
import {motion} from 'framer-motion'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setLoading(true); // Set loading state to true while awaiting response

    try {
      // Call signIn function from API with email and password data
      const response = await signIn({ email, password });
      const token = response.data.token;
      const user = response.data.userResponse;

      localStorage.setItem('jwtToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('username', email);

      navigate('/home');
    } catch (error) {
      console.error("Error: ", error);
      alert("Password is Incorrect");
    }

    setLoading(false); // Reset loading state after response is received
    setEmailError('');
    // Clear form fields after submission
    setEmail('');
    setPassword('');
  }

  
    return (

      <>

      {/* <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Sign in &amp; Sign up Form</title>
       */}
<div className="login-body">
      
      <div className="login-container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className='sign-in-form'>
            <h2 className="title">Sign in</h2>
                <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" value={email} onChange={(e)=>setEmail(e.target.value)} required />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
              </div>
                <Link to="/home" style={{ textDecoration: 'none' }}>
            <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                // onClick={handleFormSubmit}
            >
                Submit
            </motion.div>
        </Link>

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
              <Link to="/signUp">
              <motion.div 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.7 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              className="btn transparent" 
          >
              Sign Up
          </motion.div>
          </Link>
            </div>
            <Signinimg/>
          </div>
          
        </div>
      </div>
      </div>
     </>
    

    )
  }
  
  export default Login
