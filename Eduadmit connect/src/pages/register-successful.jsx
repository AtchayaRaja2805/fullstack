import CustomNavbar from "../assets/components/CustomNavbar";
// import '/Users/atchayaraja/frontend/src/assets/css/register-successful.css'
import '/Users/atchayaraja/frontend/src/assets/css/register-successful.css'
import {motion} from 'framer-motion'
import React, { useState } from 'react';
// import { motion } from 'framer-motion';
function Success()
{
   
    const text = "Application Submited Successfully !".split(" ");
    return(
        <div className="regsuccess-body">
            <CustomNavbar/>
            <motion.div 
                className="reg-success-img"
                initial={{ opacity: 0, y: -100 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Animation when component mounts
                transition={{ duration: 1 }} // Animation duration
            >
                <img src="src/assets/images/tick-mark.png" alt="" />
            </motion.div>
            <div className="App">
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
      
        </div>
    );
}
export default Success