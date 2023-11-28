

"use client"
import React from 'react'
import Header from './header'
import Footer from './footer'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Profile_details from './profile_details';
import Changepass from './changepass';
function Profile() {
   const [navbarFixed, setNavbarFixed] = useState(false);
   const [selectstatus, setselectstatus] = useState('');
   const [Countrylist, setCountrylist] = useState([]);
   const [phone, setphone] = useState('');
   const [err, seterr] = useState('');
   const [succ, setsucc] = useState('');
   const [pageview, setpageview] = React.useState('0');
   const [profiledata, setprofiledata] = useState('');
   useEffect(() => {


      const handleScroll = () => {
         // console.log("Scroll event triggered"); // Check if the scroll event is being triggered
         const scrollY = window.scrollY;

         // Check if the scroll position is greater than or equal to the banner section height
         if (scrollY >= 300) {
            setNavbarFixed(true);
            // console.log("Navbar is fixed");
         } else {
            setNavbarFixed(false);
            // console.log("Navbar is not fixed");
         }

      };
      const getProfile = async (a) => {

         const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&profileid=' + a);
         const json = await response.json();
         if (json[0].count == 0) {
            localStorage.clear();
            window.location.href = "/signin";

         }
         console.log('res', json);
         setprofiledata(json);

      }
      let cus1id = localStorage.getItem("LOGIN_USER_ID");
      console.log('---', cus1id);
      if (cus1id != null && cus1id != undefined && cus1id != '') {

         getProfile(cus1id);



      }

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
   const changepage = (a) => {
      setpageview(a);
   }
   const navbarClass = navbarFixed ? 'navbar-fixed' : '';
   return (
      <>


         <Header value={navbarClass} />





         <section class="card__details__section pt-120 pb-120 bgadd ralt">
            <div class="container">
               <div class="row g-4">
                  <div class="col-xl-4 col-lg-4">
                     <div class="card__sidebar">

                        <div class="card__common__item bgwhite round16 mb-24">
                           <h4 class="head fw-600 bborder title pb-24 mb-24">

                           </h4>
                           <ul class="card__categories">
                              <li style={{ background: `linear-gradient(101.84deg, #452FF4 1.08%, rgba(178, 65, 226, 0.7725490196) 98.75%)`, borderRadius: '24px', color: 'white' }} onClick={() => changepage('0')}>
                                 <a href="/profile" class="d-flex align-items-center">
                                    <i class="material-symbols-outlined d-flex align-items-center justify-content-center base">
                                       card_travel
                                    </i>
                                    <span class="fz-18 fw-500 title inter" style={{ color: '#fff' }}>
                                       Profile
                                    </span>
                                 </a>
                              </li>
                              <li >
                                 <a href="/change_password" className="d-flex align-items-center ">
                                    <i class="material-symbols-outlined d-flex align-items-center justify-content-center base">
                                       credit_card
                                    </i>
                                    <span class="fz-18 fw-500 title inter">
                                       Change Password
                                    </span>
                                 </a>
                              </li>
                              <li >
                                 <a href="/product" class="d-flex align-items-center">
                                    <i class="material-symbols-outlined d-flex align-items-center justify-content-center base">
                                       card_membership
                                    </i>
                                    <span class="fz-18 fw-500 title inter">
                                       Product
                                    </span>
                                 </a>
                              </li>
                              <li >
                                 <a href="/service" class="d-flex align-items-center">
                                    <i class="material-symbols-outlined d-flex align-items-center justify-content-center base">
                                       social_leaderboard
                                    </i>
                                    <span class="fz-18 fw-500 title inter">
                                       Service
                                    </span>
                                 </a>
                              </li>
                              <li >
                                 <a href="/myorder" class="d-flex align-items-center">
                                    <i class="material-symbols-outlined d-flex align-items-center justify-content-center base">
                                       social_leaderboard
                                    </i>
                                    <span class="fz-18 fw-500 title inter">
                                       My Order
                                    </span>
                                 </a>
                              </li>
                              <li >
                                 <a href="/logout" className="d-flex align-items-center">
                                    <i class="material-symbols-outlined d-flex align-items-center justify-content-center base">
                                       social_leaderboard
                                    </i>
                                    <span class="fz-18 fw-500 title inter">
                                       Logout
                                    </span>
                                 </a>
                              </li>
                           </ul>
                        </div>

                     </div>
                  </div>
                  <div class="col-xl-8 col-lg-8">
                     <div class="balance__transfercard p-8 bgwhite mb-40 round16">

                        <div class="balance__transferbody">
                           {profiledata.length > 0 ?
                              <section className="help__email pt-10 pb-10">
                                 <div className="container">
                                    <div className="row justify-content-center">
                                       <div className="col-lg-12">
                                          <div className="section__title  mb-60">
                                             <h4 className="title mb-16 wow fadeInDown" >My Dashbord</h4>
                                          </div>
                                       </div>
                                       <div className="col-lg-12">
                                          <p className="ptext2 fz-16 fw-400 inter wow fadeInUp" style={{ display: 'flex' }}>HELLO , <h5 className="sub ralt base mb-16 wow fadeInUp" >  {profiledata[0]['name']} {profiledata[0]['lname']}</h5></p>

                                       </div>
                                       <div className="col-lg-12">
                                          <div className="section__title text-center mb-60">
                                             <p className="ptext2 fz-16 fw-400 inter wow fadeInUp" style={{ textAlign: 'justify' }}>
                                                From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.                                          </p>
                                          </div>
                                       </div>
                                       <div className="col-lg-12">
                                          <div className="section__title  mb-60">
                                             <h4 className="title mb-16 wow fadeInDown" >Account Information</h4>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="row g-4 justify-content-center">
                                       <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                                          <div className="help__emailitem text-center round16">
                                             <div className="icon round50 bgwhite d-flex align-items-center justify-content-center">
                                                <i className="material-symbols-outlined">phone_in_talk</i>
                                             </div>
                                             <h5 className="fw-600 title mb-16">CONTACT INFORMATION</h5>
                                             <span className="sub ralt base mb-16 wow fadeInUp" style={{ textAlign: 'left' }}><b>{profiledata[0]['name']}{profiledata[0]['lname']}</b></span>
                                             <br /> <span className="sub ralt base mb-16 wow fadeInUp" style={{ textAlign: 'left' }}>+{profiledata[0]['mobile']}</span>
                                             <br /> <span className="sub ralt base mb-16 wow fadeInUp" style={{ textAlign: 'left' }}>{profiledata[0]['email']}</span>

                                          </div>
                                       </div>
                                       <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                          <div className="help__emailitem text-center round16">
                                             <div className="icon round50 bgwhite d-flex align-items-center justify-content-center">
                                                <i className="material-symbols-outlined">mark_as_unread</i>
                                             </div>
                                             <h5 className="fw-600 title mb-16">Billing Address</h5>
                                             <span className="sub ralt base mb-16 wow fadeInUp" style={{ textAlign: 'left' }}><b>{profiledata[0]['name']} {profiledata[0]['lname']}</b></span>
                                             <br /> <span className="sub ralt base mb-16 wow fadeInUp" style={{ textAlign: 'left' }}>{profiledata[0]['flat']}</span>
                                             <br /> <span className="sub ralt base mb-16 wow fadeInUp" style={{ textAlign: 'left' }}>{profiledata[0]['street']}</span>
                                             <br /> <span className="sub ralt base mb-16 wow fadeInUp" style={{ textAlign: 'left' }}>{profiledata[0]['state']},{profiledata[0]['city']}-{profiledata[0]['postcode']}</span>

                                             <span className="fz-16 d-block inter title">

                                                <a
                                                   href="/cdn-cgi/l/email-protection"
                                                   className="__cf_email__"
                                                   data-cfemail="fd94939b92bd98859c908d9198d39e9290"
                                                >
                                                   &nbsp;
                                                </a>
                                             </span>
                                             <span className="fz-16 d-block inter title">
                                                <a
                                                   href="/cdn-cgi/l/email-protection"
                                                   className="__cf_email__"
                                                   data-cfemail="b3daddd5dcf3d6cbd2dec3dfd69dd0dcde"
                                                >
                                                   &nbsp;
                                                </a>
                                             </span>
                                          </div>
                                       </div>
                                       <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                          <div className="help__emailitem text-center round16">
                                             <div className="icon round50 bgwhite d-flex align-items-center justify-content-center">
                                                <i className="material-symbols-outlined">distance</i>
                                             </div>
                                             <h5 className="fw-600 title mb-16">Shipping Address</h5>
                                             <span className="fz-16 d-block inter title">
                                                Same as billing Address
                                             </span>

                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </section>
                              :
                              <>Loading....</>
                           }
                        </div>

                     </div>

                  </div>
               </div>
            </div>
         </section >




         <Footer />


      </>
   );
}
export default Profile;
