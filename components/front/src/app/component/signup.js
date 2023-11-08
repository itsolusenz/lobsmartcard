

"use client"
import React from 'react'
import Header from './header'
import Footer from './footer'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import OtpInput from 'react-otp-input';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

import UserPool from "./UserPool";
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

var poolData = {
   UserPoolId: "ap-southeast-1_j3pKjNtoC",
   ClientId: "3894j3pqig36mp1fhpr9dv294b",
};

function Signup() {
   const [navbarFixed, setNavbarFixed] = useState(false);
   const [selectstatus, setselectstatus] = useState('');
   const [Countrylist, setCountrylist] = useState([]);
   const [fname, setfname] = useState('');
   const [lname, setlname] = useState('');
   const [email, setemail] = useState('');
   const [phone, setphone] = useState('');
   const [webpass, setwebpass] = useState('');
   const [type, settype] = useState('p');
   const [err, seterr] = useState('');
   const [succ, setsucc] = useState('');
   const [otp, setOtp] = useState('');
   const [openloader, setopenloader] = React.useState(false);
   const handleChange = (otp) => setOtp({ otp });
   const [pageview, setpageview] = useState('0');
   const [viewotp, setviewotp] = useState('password');
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


   var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
   var phonenumber_pool = '+91' + phone;

   var userData = {
      Username: phonenumber_pool,
      Pool: userPool,
   };
   var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
   const change_selectstatus = (value) => {

      setselectstatus(value);
   }
   const signup_submit = async (event) => {
      event.preventDefault();
      setopenloader(true);
      let acc_cnt = '0';
      let res = '91' + phone;
      console.log('----', res);
      const response = await axios.get("https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&mobile=" + res);
      console.log('loginmobcnt--', response.data[0].count);
      acc_cnt = response.data[0].count;
      if (acc_cnt > '0') {
         seterr("Mobile number Already Exists..");
         setopenloader(false);
      }
      else {
         seterr('');


         console.log("pass", webpass);
         let pass = webpass;
         const PIN = pass;
         var attributeList = [];
         let phoneNumber = '+91' + phone;
         var dataPhoneNumber = {
            Name: 'phone_number',
            Value: phoneNumber,
         };
         var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
            dataPhoneNumber
         );
         attributeList.push(attributePhoneNumber);
         UserPool.signUp(phoneNumber, PIN, attributeList, null, function (
            err,
            result
         ) {
            if (err) {

               console.log('user name is ' + err.message);
               if (err.message == 'An account with the given phone_number already exists.') {
                  seterr(err.message);
               }
               if (err.message == 'Password did not conform with policy: Password not long enough') {
                  seterr('Password must be 16 character eg.dd96dec43fb81c97');
               }

               setpageview('0');
               setopenloader(false);
               return;
            }
            seterr('');
            var cognitoUser = result.user.client;
            setpageview('1');
            setopenloader(false);
            console.log(result);


         });

      }




   }
   const onVerify = () => {
      setopenloader(true);

      const confirm_code = otp
      cognitoUser.confirmRegistration(confirm_code, true, function (err, result) {
         if (err) {
            //alert(err.message || JSON.stringify(err));               
            setopenloader(false);
            seterr('OTP Not Matched..')
         }
         else {
            setwebpass(otp);
            setpageview('2');
            setopenloader(false);
         }
      });





   }
   const Registerme = async () => {
      setopenloader(true);
      let full_num = '91' + phone;
      console.log('pass', webpass, otp)
      console.log('https://www.laabamone.com/Lobsmart/api.php?eventtype=web_register&mobile=' + full_num
         + '&webpass=' + webpass
         + '&fname=' + fname
         + '&lname=' + lname
         + '&type=' + type
         + '&email=' + email);
      fetch(
         'https://www.laabamone.com/Lobsmart/api.php?eventtype=web_register&mobile=' + full_num
         + '&webpass=' + webpass
         + '&fname=' + fname
         + '&lname=' + lname
         + '&type=' + type
         + '&email=' + email
      )
         .then((res) => res.json())
         .then(
            (result) => {
               console.log('yes1', result);
               const mes = result[0]['message'];
               if (mes == 'success') {
                  localStorage.setItem("LOGIN_USER_ID", result[0]['id']);

                  seterr('');
                  setpageview('3');
                  const id = setTimeout(() => {
                     window.location.href = "/";

                  }, 1000);
                  setopenloader(false);
               }
               else {
                  const ermes = result[0].errormsg;
                  setopenloader(false);
                  seterr(ermes);

               }

            },
            (error) => {
               console.log('no');
               console.log(error);
               seterr('Error.Please Try again later');
               setopenloader(false);
               //alert('Error.Please Try again later');
               //  setpageview('1');

            }
         );

   }
   const navbarClass = navbarFixed ? 'navbar-fixed' : '';
   return (
      <>
         <div>

            <Backdrop
               sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
               open={openloader}
               onClick={() => setopenloader(false)}
            >
               <CircularProgress color="inherit" />
            </Backdrop>
         </div>

         <Header value={navbarClass} />





         <section className="banner__breadcumn overhid ralt">

            <div className="breadcumnd__wrapper">
               <div className="container">
                  <div className="row align-items-center justify-content-between">
                     <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                        <div className="breadcumnd__content">
                           <span className="d4 mb-24">
                              Sign Up
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
                                 Sign Up
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
                        <h3 className="title mb-16">
                           Let’s Get Started!
                        </h3>



                        <p className="fz-16 title fw-400 inter mb-40">

                           {pageview == '0' && `Please enter your Mobile number to join us`}
                           {pageview == '1' && `Please enter OTP to verify your Mobile Number`}
                           {pageview == '2' && `Please fill out the following details to resgister your account.`}
                        </p>
                        <form action="#0" className="write__review" onSubmit={signup_submit} >
                           <div className="col-lg-12">
                              {err != '' &&
                                 <Alert severity="error">Error — {err}</Alert>
                              }
                           </div>


                           {pageview == '0' &&
                              <div className="row g-4 ">

                                 <div className="col-lg-3">



                                    <div className={`nice-select mb-16 bg-trans ${selectstatus}`} tabindex="0" onClick={() => change_selectstatus(selectstatus != '' ? '' : 'open')}>
                                       <span className="current" >
                                          +91
                                       </span>
                                       <ul className="list">
                                          <li data-value="1" className="option selected">
                                             +91
                                          </li><li data-value="2" className="option">
                                             +35
                                          </li>
                                          <li data-value="2" className="option">
                                             +61
                                          </li>
                                          {/*}{
                                          Countrylist.map((a, b) => (
                                             <li data-value="2" className="option">
                                                {a.countries_name}
                                             </li>
                                          ))
                                       }
                                      <li data-value="1" className="option selected">
                                          Select More Card
                                       </li><li data-value="2" className="option">
                                          Select New Card
                                       </li><li data-value="3" className="option">
                                          Select Update Card
                                    </li>*/}
                                       </ul>
                                    </div>

                                 </div>
                                 <div className="col-lg-9">
                                    <div className="frm__grp">

                                       <input required type="number" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="Enter Mobile Number..." />

                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <div className="frm__grp">
                                       <input type={viewotp} required value={webpass} onChange={(e) => setwebpass(e.target.value)} placeholder="Enter Password..." />
                                       {viewotp == 'password' ?
                                          <i class="far fa-eye" onClick={() => setviewotp('text')} id="togglePassword" style={{ marginLeft: '-30px', cursor: 'pointer', color: 'blue' }}></i>
                                          :
                                          <i class="far fa-eye-slash" onClick={() => setviewotp('password')} id="togglePassword" style={{ marginLeft: '-30px', cursor: 'pointer', color: 'blue' }}></i>
                                       }
                                       <p style={{ color: 'red', fontSize: '13px' }}>&nbsp;(Note: Password must be 16 characters .)</p>

                                    </div>
                                 </div>
                                 <p className="fz-16 fw-400 title inter" style={{ paddingTop: '80px' }}>
                                    Do you have an account? <a href="/signin" className="base">Signin</a>
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
                           }
                           {pageview == '1' &&
                              <div className="row g-4 ">


                                 <div className="col-lg-12">

                                    <OtpInput
                                       inputStyle={{ color: '#112f75', width: '20%', padding: '15px 0px' }}
                                       value={otp}
                                       onChange={setOtp}
                                       numInputs={6}
                                       renderSeparator={<span >-</span>}
                                       renderInput={(props) => <input  {...props} />}
                                    /></div>
                                 <p className="fz-16 fw-400 title inter" style={{ paddingTop: '80px' }}>
                                    Do you have an account? <a href="/signin" className="base">Signin</a>
                                 </p>
                                 <div className="col-lg-6">
                                    <div className="frm__grp">
                                       <button type="button" className="cmn--btn" onClick={() => onVerify()}>
                                          <span>
                                             Verify
                                          </span>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           }
                           {pageview == '2' &&
                              <div className="row g-4 ">
                                 <div className="col-lg-12">
                                    <div className="frm__grp">
                                       <label for="enamee" className="fz-18 fw-500 inter title mb-16">Account Type:</label>


                                       <div className={`nice-select mb-16 bg-trans ${selectstatus}`} tabindex="0" onClick={() => change_selectstatus(selectstatus != '' ? '' : 'open')}>
                                          <span className="current" >
                                             {type == 'p' ? 'Personal' : 'Business'}
                                          </span>
                                          <ul className="list">
                                             <li data-value="p" className={`option ${type == 'p' && `selected`}`} onClick={() => settype('p')}>
                                                Personal
                                             </li><li data-value="b" className={`option ${type == 'b' && `selected`}`} onClick={() => settype('b')}>
                                                Business
                                             </li>


                                          </ul>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-lg-6">
                                    <div className="frm__grp">

                                       <input required type="text" value={fname} onChange={(e) => setfname(e.target.value)} placeholder="Enter First Name..." />

                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="frm__grp">

                                       <input type="text" required value={lname} onChange={(e) => setlname(e.target.value)} placeholder="Enter Last Name..." />
                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <div className="frm__grp">

                                       <input required type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter Email Address..." />

                                    </div>
                                 </div>
                                 <p className="fz-16 fw-400 title inter" style={{ paddingTop: '80px' }}>
                                    Do you have an account? <a href="/signin" className="base">Signin</a>
                                 </p>
                                 <div className="col-lg-6">
                                    <div className="frm__grp">
                                       <button type="button" className="cmn--btn" onClick={() => Registerme()} >
                                          <span>
                                             Register
                                          </span>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           }
                           {pageview == '3' &&

                              <div className="row g-4 ">
                                 <p className="fz-16 title fw-400 inter mb-40">
                                    Your account Registered Successfully..
                                    you will be redirect to your dashboard soon..
                                 </p>
                                 <div style={{ textAlign: 'center' }}>
                                    <img src="/assets/front/tenor.gif" style={{ width: '150px' }} />

                                 </div>

                              </div>
                           }
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
