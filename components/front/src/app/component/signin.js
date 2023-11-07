

"use client"
import React from 'react'
import Header from './header'
import Footer from './footer'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
function Signup() {
   const [navbarFixed, setNavbarFixed] = useState(false);
   const [selectstatus, setselectstatus] = useState('');
   const [Countrylist, setCountrylist] = useState([]);
   const [phone, setphone] = useState('');
   const [err, seterr] = useState('');
   const [succ, setsucc] = useState('');
   useEffect(() => {


      const handleScroll = () => {
         console.log("Scroll event triggered"); // Check if the scroll event is being triggered
         const scrollY = window.scrollY;

         // Check if the scroll position is greater than or equal to the banner section height
         if (scrollY >= 300) {
            setNavbarFixed(true);
            console.log("Navbar is fixed");
         } else {
            setNavbarFixed(false);
            console.log("Navbar is not fixed");
         }

      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };



   }, []);
   const change_selectstatus = (value) => {

      setselectstatus(value);
   }
   const signup_submit = async (event) => {
      event.preventDefault();
      let acc_cnt = '0';
      let res = '91' + phone;
      console.log('----', res);
      const response = await axios.get("https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&mobile=" + res);
      console.log('loginmobcnt--', response.data[0].count);
      acc_cnt = response.data[0].count;
      if (acc_cnt > '0') {
         seterr("Mobile number Already Exists..")
      }
      else {
         seterr('');
      }


   }
   const navbarClass = navbarFixed ? 'navbar-fixed' : '';
   return (
      <>


         <Header value={navbarClass} />





         <section className="banner__breadcumn overhid ralt">

            <div className="breadcumnd__wrapper">
               <div className="container">
                  <div className="row align-items-center justify-content-between">
                     <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                        <div className="breadcumnd__content">
                           <span className="d4 mb-24">
                              Sign In
                           </span>
                           <ul className="breadcun__list flex-wrap gap-1 d-flex align-items-center">
                              <li>
                                 <a href="/" className="fz-16 fw-400 inter text-white">
                                    Home
                                 </a>
                              </li>

                              <li>
                                 <i className="material-symbols-outlined text-white mt-2">
                                    chevron_right
                                 </i>
                              </li>
                              <li className="fz-16 base2 fw-40 inter">
                                 Sign In
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-5">
                        <div className="featured__card">
                           <img src="/assets/front/img/banner/signup-banner.png" className="w-100" alt="img" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="element1">
               <img src="/assets/front/img/banner/chok1.png" alt="element" />
            </div>
            <div className="element2">
               <img src="/assets/front/img/banner/chok2.png" alt="element" />
            </div>
            <div className="element3">
               <img src="/assets/front/img/banner/chok4.png" alt="element" />
            </div>
            <div className="element4">
               <img src="/assets/front/img/banner/chok3.png" alt="element" />
            </div>
            <div className="element5">
               <img src="/assets/front/img/banner/chok4.png" alt="element" />
            </div>

         </section>



         <section className="signup__section pt-120 pb-120">
            <div className="container">
               <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6">
                     <div className="signup__boxes round16">
                        <h3 class="title mb-16">
                           Welcome Back!
                        </h3>
                        <p class="fz-16 title fw-400 inter mb-40">
                           Sign in to your account and join us
                        </p>
                        <form action="#0" className="write__review" onSubmit={signup_submit} >
                           <div className="row g-4 ">
                              <div className="col-lg-12">
                                 {err != '' &&
                                    <Alert severity="error">Error — {err}</Alert>
                                 }
                              </div>
                              <div className="col-lg-3">



                                 <div className={`nice-select mb-16 bg-trans ${selectstatus}`} tabindex="0" onClick={() => change_selectstatus(selectstatus != '' ? '' : 'open')}>
                                    <span className="current" >
                                       +91
                                    </span>
                                    <ul class="list">
                                       <li data-value="1" class="option selected">
                                          +91
                                       </li><li data-value="2" class="option">
                                          +35
                                       </li>
                                       <li data-value="2" class="option">
                                          +61
                                       </li>
                                       {/*}{
                                          Countrylist.map((a, b) => (
                                             <li data-value="2" class="option">
                                                {a.countries_name}
                                             </li>
                                          ))
                                       }
                                      <li data-value="1" class="option selected">
                                          Select More Card
                                       </li><li data-value="2" class="option">
                                          Select New Card
                                       </li><li data-value="3" class="option">
                                          Select Update Card
                                    </li>*/}
                                    </ul>
                                 </div>

                              </div>
                              <div className="col-lg-9">
                                 <div className="frm__grp">

                                    <input type="number" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="Enter Mobile Number..." />

                                 </div>
                              </div>
                              <div className="col-lg-12">
                                 <div className="frm__grp">

                                    <input type="number" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="Password" />
                                    <a href="#" class="base fz-14 inter d-flex justify-content-end mt-2">Forget password</a>

                                 </div>
                              </div>
                              <p className="fz-16 fw-400 title inter" style={{ paddingTop: '80px' }}>
                                 Do you have an account? <a href="singin.html" className="base">Signin</a>
                              </p>
                              <div className="col-lg-6">
                                 <div className="frm__grp">
                                    <button type="submit" className="cmn--btn" >
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
         <Footer />


      </>
   );
}
export default Signup;
