"use client"
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/front/src/app/component/header'
import Footer from '@/components/front/src/app/component/footer'
function Logout() {

   useEffect(() => {
      const clear = async () => {
         let LOGIN_USER_ID = localStorage.getItem("LOGIN_USER_ID");
         if (LOGIN_USER_ID != '' && LOGIN_USER_ID != null && LOGIN_USER_ID != undefined) {

         }
         else {
             window.location.href = "/signin";
         }

      }
      clear();


   }, []);
   const deletemyaccount = async (a) => {
      if (a == 2) {
         window.location.href = "/profile";
      }
   }
   return (
      <>

         <Header />

         <section className="signup__section pt-120 pb-120">
            <div className="container">
               <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6">
                     <div className="signup__boxes round16">
                        <h3 class="title mb-16">
                           Delete Account?
                        </h3>
                        <p class="fz-16 title fw-400 inter mb-40">
                           <a href="#" onClick={() => deletemyaccount('1')} className="cmn--btn align-items-center">
                              <span>
                                 Yes
                              </span>
                           </a>
                           &nbsp; <a href="#" onClick={() => deletemyaccount('2')} className="cmn--btn outline__btn">
                              <span>
                                 No
                              </span>
                           </a>
                        </p>

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
export default Logout;