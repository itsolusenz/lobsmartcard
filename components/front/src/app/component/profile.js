

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
                           <Profile_details />
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
