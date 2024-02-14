import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import CustomNavbar from '../assets/components/CustomNavbar';
import CustomSidebar from '../assets/components/CustomSidebar';
import '../assets/css/home.css';
import { Link } from 'react-router-dom';

function Home() {


  
    const [currentField, setCurrentField] = useState('name');
    const [error, setError] = useState('');
    const nameInputRef = useRef(null);
    const fathernameInputRef = useRef(null);
    const mothernameInputRef = useRef(null);
    const genderInputRef = useRef(null);
    const nationalityInputRef = useRef(null);
    const dobInputRef = useRef(null);
    const addressInputRef = useRef(null);
    const phoneInputRef = useRef(null);
    const sslcInputRef = useRef(null);
    const hseInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const ageInputRef = useRef(null);
    const feedbackRef = useRef(null);

    

    

    function next(from, to) {
        setError('');
        const value = from === 'name' ? nameInputRef.current.value :
                      from === 'fathername' ? fathernameInputRef.current.value :
                      from === 'mothername' ? mothernameInputRef.current.value :
                      from === 'gender' ? genderInputRef.current.value :
                      from === 'dob' ? dobInputRef.current.value :
                      from === 'address' ? addressInputRef.current.value :
                      from === 'nationality' ? nationalityInputRef.current.value :
                      from === 'phone' ? phoneInputRef.current.value :
                      from === 'sslc' ? sslcInputRef.current.value :
                      from === 'hse' ? hseInputRef.current.value :
                      from === 'email' ? emailInputRef.current.value :
                      from === 'age' ? ageInputRef.current.value : '';

        if (!value || value === '') {
            setError('Please enter a value');
        } else {
            setCurrentField(to);
        }
    }

    function previous(from, to) {
        setError('');
        setCurrentField(to);
    }
    return (
        // <div>
            <div>
           <CustomNavbar/>
        <div className='home-body'>
            <div className="home-container">
                <br />
                <h1 className="home-title">Application Form</h1>
                <section id='home-section'>
                    <form className='home-form'>
                        <label id="name" className={currentField === 'name' ? 'is-visible' : ''}>
                            <label className="label-heading" htmlFor="name">What's your name?</label>
                            <input ref={nameInputRef} name="name" type="text" placeholder="name" required="" />
                            <div className="nav-btn-div">
                                {/* <button
                                    type="button"
                                    className="nav-button"
                                    onClick={() => next('name', 'fathername')}
                                >
                                    OK <i className="fa fa-check" aria-hidden="true" />
                                </button> */}
                                <button type="button"
                                className="custom-btn btn-12"
                                onClick={() => next('name', 'fathername')} >
                                <span>OK</span>
                                <span>Click</span>
                                </button>
                               
                            </div>
                            <div className="nav-btn-div">
                                <i
                                    className="fa fa-arrow-down"
                                    style={{ fontSize: 24 }}
                                    onClick={() => next('name', 'fathername')}
                                />
                            </div>
                        </label>


                        <label id="fathername" className={currentField === 'fathername' ? 'is-visible' : ''}>
                            <label className="label-heading" htmlFor="fathername">What's your father's name?</label>
                            <input ref={fathernameInputRef} name="fathername" type="text" placeholder="Father's Name" required="" />
                            <div className="nav-btn-div">
                                {/* <button
                                    type="button"
                                    className="nav-button"
                                    onClick={() => next('fathername', 'mothername')}
                                >
                                    OK <i className="fa fa-check" aria-hidden="true" />
                                </button> */}
                                <button type="button"
                                className="custom-btn btn-12"
                                onClick={() => next('fathername', 'mothername')} >
                                <span>OK</span>
                                <span>Click</span>
                                </button>
                             
                            </div>
                            <div className="nav-btn-div">
                                <i
                                    className="fa fa-arrow-down"
                                    style={{ fontSize: 24 }}
                                    onClick={() => next('fathername', 'mothername')}
                                />
                            </div>
                        </label>

                        <label id="mothername" className={currentField === 'mothername' ? 'is-visible' : ''}>
                            <label className="label-heading" htmlFor="mothername">What's your mother's name?</label>
                            <input ref={mothernameInputRef} name="mothername" type="text" placeholder="Mother's Name" required="" />
                            <div className="nav-btn-div">
                                {/* <button
                                    type="button"
                                    className="nav-button"
                                    onClick={() => next('mothername', 'gender')}
                                >
                                    OK <i className="fa fa-check" aria-hidden="true" />
                                </button> */}

                                <button type="button"
                                className="custom-btn btn-12"
                                onClick={() => next('mothername', 'gender')} >
                                <span>OK</span>
                                <span>Click</span>
                                </button>
                                
                            </div>
                            <div className="nav-btn-div">
                                <i
                                    className="fa fa-arrow-down"
                                    style={{ fontSize: 24 }}
                                    onClick={() => next('mothername', 'gender')}
                                />
                            </div>
                        </label>

                        <label id="gender" className={currentField === 'gender' ? 'is-visible' : ''}>
                            <label className="label-heading" htmlFor="gender">What's your gender?</label>
                            <input ref={genderInputRef} name="gender" type="text" placeholder="Gender" required="" />
                            <div className="nav-btn-div">
                                {/* <button
                                    type="button"
                                    className="nav-button"
                                    onClick={() => next('gender', 'age')}
                                >
                                    OK <i className="fa fa-check" aria-hidden="true" />
                                </button> */}
                                
                                <button type="button"
                                className="custom-btn btn-12"
                                onClick={() => next('gender', 'age')} >
                                <span>OK</span>
                                <span>Click</span>
                                </button>
                            </div>
                            <div className="nav-btn-div">
                                <i
                                    className="fa fa-arrow-down"
                                    style={{ fontSize: 24 }}
                                    onClick={() => next('gender', 'age')}
                                />
                            </div>
                        </label>


                        <label id="age" className={currentField === 'age' ? 'is-visible' : ''}>
                            <label className="label-heading" htmlFor="age">What's your age?</label>
                            <input ref={ageInputRef} name="gender" type="text" placeholder="Age" required="" />
                            <div className="nav-btn-div">
                                {/* <button
                                    type="button"
                                    className="nav-button"
                                    onClick={() => next('age', 'nationality')}
                                >
                                    OK <i className="fa fa-check" aria-hidden="true" />
                                </button> */}

                                <button type="button"
                                className="custom-btn btn-12"
                                onClick={() => next('age', 'nationality')} >
                                <span>OK</span>
                                <span>Click</span>
                                </button>
                           
                            </div>
                            <div className="nav-btn-div">
                                <i
                                    className="fa fa-arrow-down"
                                    style={{ fontSize: 24 }}
                                    onClick={() => next('age', 'nationality')}
                                />
                            </div>
                        </label>


                        <label id="nationality" className={currentField === 'nationality' ? 'is-visible' : ''}>
                            <label className="label-heading" htmlFor="nationality">What's your nationality?</label>
                            <input ref={nationalityInputRef} name="nationality" type="text" placeholder="nationality" required="" />
                            <div className="nav-btn-div">
                                {/* <button
                                    type="button"
                                    className="nav-button"
                                    onClick={() => next('nationality', 'dob')}
                                >
                                    OK <i className="fa fa-check" aria-hidden="true" />
                                </button> */}

                                <button type="button"
                                className="custom-btn btn-12"
                                onClick={() => next('nationality', 'dob')} >
                                <span>OK</span>
                                <span>Click</span>
                                </button>
                               
                            </div>
                            <div className="nav-btn-div">
                                <i
                                    className="fa fa-arrow-down"
                                    style={{ fontSize: 24 }}
                                    onClick={() => next('nationality', 'dob')}
                                />
                            </div>
                        </label>

                        <label id="dob" className={currentField === 'dob' ? 'is-visible' : ''}>
                            <label className="label-heading" htmlFor="dob">What's your Date of Birth?</label>
                            <input ref={dobInputRef} name="dob" type="text" placeholder="Date of Birth" required="" />
                            <div className="nav-btn-div">
                                {/* <button
                                    type="button"
                                    className="nav-button"
                                    onClick={() => next('dob', 'address')}
                                >
                                    OK <i className="fa fa-check" aria-hidden="true" />
                                </button> */}
                                <button type="button"
                                className="custom-btn btn-12"
                                onClick={() => next('dob', 'address')} >
                                <span>OK</span>
                                <span>Click</span>
                                </button>
                              
                            </div>
                            <div className="nav-btn-div">
                                <i
                                    className="fa fa-arrow-down"
                                    style={{ fontSize: 24 }}
                                    onClick={() => next('dob', 'address')}
                                />
                            </div>
                        </label>


                        <label id="address" className={currentField === 'address' ? 'is-visible' : ''}>
                            <label className="label-heading" htmlFor="address">What's your Address?</label>
                            <input ref={addressInputRef} name="address" type="text" placeholder="Address" required="" />
                            <div className="nav-btn-div">
                                {/* <button
                                    type="button"
                                    className="nav-button"
                                    onClick={() => next('address', 'phone')}
                                >
                                    OK <i className="fa fa-check" aria-hidden="true" />
                                </button> */}
                                <button type="button"
                                className="custom-btn btn-12"
                                onClick={() => next('address', 'phone')} >
                                <span>OK</span>
                                <span>Click</span>
                                </button>
                             
                            </div>
                            <div className="nav-btn-div">
                                <i
                                    className="fa fa-arrow-down"
                                    style={{ fontSize: 24 }}
                                    onClick={() => next('address', 'phone')}
                                />
                            </div>
                        </label>


                        <label id="phone" className={currentField === 'phone' ? 'is-visible' : ''}>
                            <label className="label-heading" htmlFor="phone">What's your Phone Number?</label>
                            <input ref={phoneInputRef} name="phone" type="text" placeholder="phone" required="" />
                            <div className="nav-btn-div">
                                {/* <button
                                    type="button"
                                    className="nav-button"
                                    onClick={() => next('phone', 'sslc')}
                                >
                                    OK <i className="fa fa-check" aria-hidden="true" />
                                </button> */}
                                <button type="button"
                                className="custom-btn btn-12"
                                onClick={() => next('phone', 'sslc')} >
                                <span>OK</span>
                                <span>Click</span>
                                </button>
                               
                            </div>
                            <div className="nav-btn-div">
                                <i
                                    className="fa fa-arrow-down"
                                    style={{ fontSize: 24 }}
                                    onClick={() => next('phone', 'sslc')}
                                />
                            </div>
                        </label>

                        <label id="sslc" className={currentField === 'sslc' ? 'is-visible' : ''}>
                            <label className="label-heading" htmlFor="sslc">What's your SSLC Marks?</label>
                            <input ref={sslcInputRef} name="sslc" type="text" placeholder="SSLC Marks" required="" />
                            <div className="nav-btn-div">
                                {/* <button
                                    type="button"
                                    className="nav-button"
                                    onClick={() => next('sslc', 'hse')}
                                >
                                    OK <i className="fa fa-check" aria-hidden="true" />
                                </button> */}
                                <button type="button"
                                className="custom-btn btn-12"
                                onClick={() => next('sslc', 'hse')} >
                                <span>OK</span>
                                <span>Click</span>
                                </button>
                            
                            </div>
                            <div className="nav-btn-div">
                                <i
                                    className="fa fa-arrow-down"
                                    style={{ fontSize: 24 }}
                                    onClick={() => next('sslc', 'hse')}
                                />
                            </div>
                        </label>


                        <label id="hse" className={currentField === 'hse' ? 'is-visible' : ''}>
                            <label className="label-heading" htmlFor="hse">What's your HSE Marks?</label>
                            <input ref={hseInputRef} name="hse" type="text" placeholder="HSE Marks" required="" />
                            <div className="nav-btn-div">
                                {/* <button
                                    type="button"
                                    className="nav-button"
                                    onClick={() => next('hse', '')}
                                >
                                    <i className="fa fa-check" aria-hidden="true" />
                                </button> */}
                               
                            </div>
                            <div className="nav-btn-div">
                                <i
                                    className="fa fa-arrow-down"
                                    style={{ fontSize: 24 }}
                                    onClick={() => next('hse', '')}
                                />
                              <Link to="/reg-success">
                                <button type="submit"
                                className="custom-btn btn-12"
                                 >
                                <span>Submit</span>
                                <span>Submit</span>
                                </button>
                                </Link>
                                
                                 
                            </div>
                        </label>
                        

                        {/* Repeat for other fields */}

                        <p id="validate">{error}</p> {/* Display error message */}
                    </form>
                </section>
            </div>
            
        </div>
        </div>
    );
}

export default Home;
