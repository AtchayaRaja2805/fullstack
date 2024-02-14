import '/Users/atchayaraja/frontend/src/assets/css/login.css'
import '/Users/atchayaraja/frontend/src/assets/css/buttons/submitbutton.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Signinimg from '../assets/images/signin-image';

import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        const response = await signUp({ name, email, mobileNumber, password });
        if (response.status === 202) {
          navigate('/login');
        }
      } else {
        setConfirmPasswordError("Your confirm password does not match");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }



    return (
      <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Sign in &amp; Sign up Form</title>
      <div className="login-container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className='sign-in-form'>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)} required />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email"value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              </div>
                <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
              </div>
              <div className="input-field">
                <i className="fas fa-mobile" />
                <input type="password" placeholder="Contact Number" value={mobileNumber} onChange={(e)=>setM(e.target.value)} required/>
              </div>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Role" required />
              </div>

                <Link to="/login" style={{ textDecoration: 'none' }}>
            <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                Submit
            </motion.div>
        </Link>
               

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
              <Link to="/login">
              <motion.div 
              whileHover={{ scale: 1.2, backgroundColor: '#ff9043', color: '#fccf92',textDecoration:'none' }}
              whileTap={{ scale: 0.7 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              className="btn transparent" 
          >
              Sign In
          </motion.div>
          </Link>
            </div>
            <Signinimg/>
          </div>
          
        </div>
      </div>
    </>
    

    )
  }
  
  export default Register