

"use client"
import React from 'react'
import Header from './header'
import Footer from './footer'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Myorder from './myorder';
import Changepass from './changepass';
function Profile() {
   const [navbarFixed, setNavbarFixed] = useState(false);
   const [selectstatus, setselectstatus] = useState('');
   const [Countrylist, setCountrylist] = useState([]);
   const [phone, setphone] = useState('');
   const [err, seterr] = useState('');
   const [succ, setsucc] = useState('');
   const [pageview, setpageview] = React.useState('0');
   const [Orderlist, setOrderlist] = useState('');
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
      const Getorderlist = async (a) => {
         const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_createorder&viewtype=list&cusid=' + a);
         const json = await response.json();
         console.log("---", json);
         setOrderlist(json);


      }
      let cus1id = localStorage.getItem("LOGIN_USER_ID");
      console.log('---', cus1id);
      if (cus1id != null && cus1id != undefined && cus1id != '') {

         Getorderlist(cus1id);



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
                  <div class="col-xl-3 col-lg-3">
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
                                 <a href="/service" class="d-flex align-items-center">
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
                  <div class="col-xl-9 col-lg-9">
                     <section className="compare__section ralt bgadd ">
                        <div className="container">
                           <div className="additional__info mt-10 bgwhite round16">

                              <h5 className="title addi__head round16">
                                 Items Ordered
                              </h5>
                              <div className="table__here">

                                 <table className="table">
                                    <thead>
                                       <tr >


                                          <td className="fz-16 fw-600 inter ttile">
                                             Image
                                          </td>
                                          <td className="fz-16 fw-600 inter ttile">
                                             Product
                                          </td>

                                          <td className="fz-16 fw-600 inter ttile">
                                             Amount
                                          </td>
                                       </tr>
                                    </thead>
                                    {Orderlist.length > 0 ?



                                       <tbody>
                                          {Orderlist[0]['items'].map((a, b) =>

                                             <tr>

                                                <td>
                                                   <img src={a.image} style={{ width: '50px' }} />
                                                </td>
                                                <td className="fz-16 fw-600 inter ttile">
                                                   {a.itemname}
                                                </td>
                                                <td className="fz-16 fw-600 inter ttile">
                                                   2000
                                                </td>


                                             </tr>

                                          )}
                                       </tbody>


                                       :
                                       <>Loading..</>
                                    }
                                 </table>


                              </div>
                           </div></div>
                     </section>
                  </div>
               </div>
            </div>
         </section >




         <Footer />


      </>
   );
}
export default Profile;
