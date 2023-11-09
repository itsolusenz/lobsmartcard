"use client"
import React from 'react'
import Header from './header'
import Footer from './footer'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';

function ChangePass() {
    const [webpass, setwebpass] = useState('');
    const [viewotp, setviewotp] = useState('password');
    const [webcpass, setwebcpass] = useState('');
    const [viewcotp, setviewcotp] = useState('password');
    const [err, seterr] = useState('');
    const [succ, setsucc] = useState('');
    const [mobile, setmobile] = useState('');

    useEffect(async () => {
        // Perform localStorage action

        const getProfile = async (a) => {

            const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&profileid=' + a);
            const json = await response.json();
            console.log('res', json);
            setmobile(json[0].mobile);

        }


        let cus1id = localStorage.getItem("LOGIN_USER_ID");
        console.log('---', cus1id);
        if (cus1id != null && cus1id != undefined && cus1id != '') {

            getProfile(cus1id);



        }







    }, [])



    const ChangePassword = () => {

        if (webcpass != webpass) {
            seterr("Password and confirm password not match")
        }
        else {
            console.log('https://www.laabamone.com/Lobsmart/api.php?eventtype=web_changepass&mobile='
                + mobile + '&password=' + webpass);


            fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=web_changepass&mobile='
                + mobile + '&password=' + webpass
            )
                .then((res) => res.json())
                .then(
                    (result) => {
                        console.log('yessssssss');

                        const message = result[0]['message'];
                        if (message == 'success') {
                            setsucc("Password Changed Successfully..");
                            setwebpass('');
                            setwebcpass('');
                        }
                        else {
                            const errormsg = result[0]['errormsg'];
                            seterr(errormsg);

                        }


                        console.log(result);
                    },
                    (error) => {
                        console.log('no');
                        console.log(error);
                        // toast.error("Try again..Data not update..");
                        // setButtonloader(1);
                    }
                );
        }

    }
    return (


        <section className="signup__section">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-12">
                        <div className="signup__boxes round16">
                            <h3 class="title mb-16">
                                Change Password
                            </h3>

                            <form action="#0" className="write__review"  >
                                <div className="row g-4 ">
                                    <div className="col-lg-12">
                                        {err != '' &&
                                            <Alert severity="error">Error — {err}</Alert>
                                        }
                                        {succ != '' &&
                                            <Alert severity="success">Success — {succ}</Alert>
                                        }
                                    </div>
                                    <div className="row g-4 ">

                                        <div className="col-lg-12">
                                            <div className="frm__grp">
                                                <input type={viewotp} required value={webpass} onChange={(e) => setwebpass(e.target.value)} placeholder="Enter New Password..." />
                                                {viewotp == 'password' ?
                                                    <i class="far fa-eye" onClick={() => setviewotp('text')} id="togglePassword" style={{ marginLeft: '-30px', cursor: 'pointer', color: 'blue' }}></i>
                                                    :
                                                    <i class="far fa-eye-slash" onClick={() => setviewotp('password')} id="togglePassword" style={{ marginLeft: '-30px', cursor: 'pointer', color: 'blue' }}></i>
                                                }

                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="frm__grp">
                                                <input type={viewotp} required value={webcpass} onChange={(e) => setwebcpass(e.target.value)} placeholder="Enter Confirm Password..." />
                                                {viewcotp == 'password' ?
                                                    <i class="far fa-eye" onClick={() => setviewcotp('text')} id="togglePassword" style={{ marginLeft: '-30px', cursor: 'pointer', color: 'blue' }}></i>
                                                    :
                                                    <i class="far fa-eye-slash" onClick={() => setviewcotp('password')} id="togglePassword" style={{ marginLeft: '-30px', cursor: 'pointer', color: 'blue' }}></i>
                                                }

                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="frm__grp">
                                                <button type="button" className="cmn--btn" onClick={() => ChangePassword()}>
                                                    <span>
                                                        Change
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                {/*}  <div className="row justify-content-center align-items-center">
              <div className="col-lg-6">
                 <div className="signup__boxes round16">
                    <h3 className="title mb-16">
                       Let’s Get Started!
                    </h3>
                    <p className="fz-16 title fw-400 inter mb-40">
                       Please enter your email address to join us
                    </p>
                    <form action="#0" className="write__review">
                       <div className="row g-4 ">
                          <div className="col-lg-6">
                             <div className="frm__grp">
                                <label for="name" className="fz-18 fw-500 inter title mb-16">First Nmae</label>
                                <input type="text" id="name" placeholder="Enter First Name..." />
                             </div>
                          </div>
                          <div className="col-lg-6">
                             <div className="frm__grp">
                                <label for="lname" className="fz-18 fw-500 inter title mb-16">Last Nmae</label>
                                <input type="text" id="lname" placeholder="Enter Last Name..." />
                             </div>
                          </div>
                          <div className="col-lg-12">
                             <div className="frm__grp">
                                <label for="enamee" className="fz-18 fw-500 inter title mb-16">Enter Your Email ID</label>
                                <input type="text" id="enamee" placeholder="Enter Your Email..." />
                             </div>
                          </div>
                          <div className="col-lg-12">
                             <div className="frm__grp">
                                <label for="pas" className="fz-18 fw-500 inter title mb-16">Enter Your Password</label>
                                <input type="text" id="pas" placeholder="Enter Your Password..." />
                             </div>
                          </div>
                          <p className="fz-16 fw-400 title inter">
                             Do you have an account? <a href="singin.html" className="base">Signin</a>
                          </p>
                          <div className="col-lg-6">
                             <div className="frm__grp">
                                <button type="submit" className="cmn--btn">
                                   <span>
                                      Sign Up
                                   </span>
                                </button>
                             </div>
                          </div>
                       </div>
                    </form>
                 </div>
              </div>
              <div className="col-lg-6">
                 <div className="signup__thumb">
                    <img src="/assets/front/img/faq/signup-thumb.png" className="w-100" alt="img" />
                 </div>
              </div>
           </div>*/}
            </div>
        </section>



    );
}
export default ChangePass;