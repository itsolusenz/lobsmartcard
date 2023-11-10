"use client"
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/front/src/app/component/header'
import Footer from '@/components/front/src/app/component/footer'
import Billing_address from '@/components/front/src/app/component/billing_address'

function Logout() {

   useEffect(() => {



   }, []);
   return (
      <>

         <Header />

         <section className="signup__section pt-120 pb-120">
            <div className="container">
               <div className="row justify-content-center align-items-center">
                  <div className="col-lg-12">
                     <div className="signup__boxes round16">
                        <Billing_address />

                     </div>
                  </div>

               </div>

            </div>
         </section>

         <Footer />
      </>

   );


}
export default Logout;