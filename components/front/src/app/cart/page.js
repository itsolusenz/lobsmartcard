"use client"
import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import GooglePayButton from '@google-pay/button-react';
export default function page() {
   const [navbarFixed, setNavbarFixed] = useState(false);
   const [cardtype, setcardtype] = useState('0');
   const [pvccardtype, setpvccardtype] = useState(false);
   const [metalcardtype, setmetalcardtype] = useState(false);
   const [cartid, setcartid] = useState('');
   const [cartarrid, setcartarrid] = useState([]);
   const [carttot, setcarttot] = useState('0.00');
   const carddetails = [
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '1',
         name: 'Matt White',
         tyepid: '1',
         img: '/assets/front/card/matt_white.png',
         typename: 'PVC MATT CARD',
         amt: '2000',

      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '2',
         name: 'Matt Black',
         tyepid: '1',
         img: '/assets/front/card/matt_black.png',
         amt: '2000',
         typename: 'PVC MATT CARD'
      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '3',
         name: 'Matt Gold',
         tyepid: '1',
         img: '/assets/front/card/matt_gold.png',
         amt: '2000',
         typename: 'PVC MATT CARD'
      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '4',
         name: 'Glassy Blue',
         tyepid: '2',
         img: '/assets/front/card/classy_blue.png',
         amt: '2000',
         typename: 'PVC GLASSY CARD'

      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '5',
         name: 'Braze',
         tyepid: '2',
         img: '/assets/front/card/Braze.png',
         amt: '2000',
         typename: 'PVC GLASSY CARD'

      },
      {
         headid: '1',//Metal
         headname: 'PVC Card',//Metal
         id: '6',
         name: 'Glassy Silver',
         tyepid: '2',
         img: '/assets/front/card/metal_card1.png',
         amt: '2000',
         typename: 'PVC GLASSY CARD'

      },
      {
         headid: '2',//Metal
         headname: 'Metal Card',//Metal
         id: '7',
         name: 'Matt Silver',
         tyepid: '1',
         img: '/assets/front/card/metal_card1.png',
         amt: '2000',
         typename: 'METAL MATT CARD'

      },
      {
         headid: '2',//Metal
         id: '8',
         name: 'Glassy Blue',
         tyepid: '2',
         img: '/assets/front/card/classy_blue.png',
         amt: '2000',
         typename: 'METAL GLASSY CARD'

      },

      {
         headid: '2',//Metal
         headname: 'Metal Card',//Metal
         id: '9',
         name: 'Matt Gold',
         tyepid: '1',
         img: '/assets/front/card/matt_gold.png',
         amt: '2000',
         typename: 'METAL MATT CARD'

      },
      {
         headid: '2',//Metal
         id: '10',
         name: 'Glassy Gold',
         tyepid: '2',
         img: '/assets/front/card/Glassy_gold.png',
         amt: '2000',
         typename: 'METAL GLASSY CARD'

      },
   ];
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
      const setTotal = (value) => {
         let i;
         let j;
         let restot = 0;

         console.log('-------s-', value.length);
         for (j = 0; j < carddetails.length; j++) {
            for (i = 0; i < value.length; i++) {
               if (value[i] == carddetails[j]['id']) {
                  restot = Number(restot) + Number(carddetails[j]['amt'])

               }
            }
         }
         //  alert(restot);
         //let res = Number(carttot) + Number(value);
         setcarttot(restot);
         console.log('--------', restot);
         // return restot;
      }

      if (localStorage.getItem("CART_STOREAGE_VALUE") != null && localStorage.getItem("CART_STOREAGE_VALUE") != undefined && localStorage.getItem("CART_STOREAGE_VALUE") != '') {
         let cartid = localStorage.getItem("CART_STOREAGE_VALUE");
         console.log('cartid', cartid);
         let res = cartid.split(",");
         setcartarrid(res);
         console.log('len', res.length);
         setTotal(res);
         //alert(cartid);
      }
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const navbarClass = navbarFixed ? 'navbar-fixed' : '';

   const carddetails_head = [
      {

         id: '1',
         name: 'PVC',

      },
      {
         id: '2',
         name: 'Metal',

      }
   ];

   const carddetails_pvchead = [
      {

         id: '1',
         name: 'Matt',


      },
      {
         id: '2',
         name: 'Glassy',

      }
   ];
   const carddetails_metalhead = [
      {

         id: '1',
         name: 'Matt',

      },
      {
         id: '2',
         name: 'Glassy',

      }
   ];


   const updateCookie = (a) => {
      localStorage.setItem("CART_STOREAGE_VALUE", a);

   }

   const Add_to_cart = (id, type) => {
      let res = '';

      if (type == 'add') {
         if (cartid != '') {
            res = cartid + '' + id + ',';
         }
         else {
            res = id + ',';
         }
         setcartid(res);
         updateCookie(res);
         console.log('res1', res);


      }
      if (type == 'remove') {
         let search = id + ',';
         let position = cartid.search(search);
         let res = '';
         if (position >= 0) {
            res = cartid.replace(search, "");
            setcartid(res);
            updateCookie(res);
            console.log('res2', res);
         }

      }



   }

   const FindCartArr = (id) => {

      let search = id + ',';
      let position = cartid.search(search);
      console.log('position', position);
      if (position >= 0) {
         return '1';
      }
      else {
         return '0';
      }

   }

   return (
      <>
         <Header value={navbarClass} />

         <section className="card__details__section pt-120 pb-120 bgadd ralt">
            <div className="container">
               <div className="row g-4">

                  <div className="col-xl-12 col-lg-12">
                     <div className="row g-4 justify-content-center">


                        {cartarrid.length > 0 ?
                           <>
                              {carddetails.map((b, inc) => (
                                 cartarrid.map((arr, i) => (

                                    arr == b.id ?

                                       <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">

                                          <div className="popular__items popular__v2 round16">
                                             <div className="card__boxleft" style={{ width: '80%' }}>
                                                <div className="w-100 d-flex mb-30 align-items-center justify-content-between flex-wrap gap-2">
                                                   <img src={b.img} alt="card" style={{ width: '200px' }} className="w-10 mb-24" />

                                                   <h6 className="title mb-30  ">
                                                      {b.name}


                                                   </h6>
                                                   <h7 className="title mb-30  " style={{ color: 'blue' }}>
                                                      {b.typename}
                                                   </h7>

                                                </div>
                                             </div>

                                             <div className="card__boxright " style={{ width: '20%' }}>
                                                <div className="d-flex mb-10 align-items-center flex-wrap gap-3">
                                                   <h5 className="title mb-30 " style={{ color: '#eaac66' }}>
                                                      ₹{b.amt}
                                                   </h5>

                                                </div>


                                             </div>
                                          </div>
                                       </div>
                                       : null
                                 ))))}
                              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                                 <div className="popular__items popular__v2 round16">
                                    <div style={{ width: '80%', alignItems: 'right' }}>

                                       <div className="d-flex mb-5 align-items-center justify-content-between flex-wrap gap-3">
                                          <h6 className="title  ">Total</h6>
                                       </div>


                                    </div>
                                    <div className="card__boxright" style={{ width: '20%' }}>
                                       <div className="d-flex mb-5 align-items-center justify-content-between flex-wrap gap-3">
                                          <h6 className="title  ">₹{carttot}</h6>
                                       </div>
                                    </div>

                                 </div>
                              </div>
                              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                                 <div className="popular__items popular__v2 round16">
                                    <div style={{ width: '80%', alignItems: 'right' }}>




                                    </div>
                                    <div className="d-flex mb-5 align-items-center justify-content-between flex-wrap gap-3">
                                       <GooglePayButton
                                          environment="TEST"
                                          paymentRequest={{
                                             apiVersion: 2,
                                             apiVersionMinor: 0,
                                             allowedPaymentMethods: [
                                                {
                                                   type: 'CARD',
                                                   parameters: {
                                                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                                   },
                                                   tokenizationSpecification: {
                                                      type: 'PAYMENT_GATEWAY',
                                                      parameters: {
                                                         gateway: 'example',
                                                         gatewayMerchantId: 'exampleGatewayMerchantId',
                                                      },
                                                   },
                                                },
                                             ],
                                             merchantInfo: {
                                                merchantId: '660010520860956873',
                                                merchantName: 'SELVAKUMAR T P',
                                             },
                                             transactionInfo: {
                                                totalPriceStatus: 'FINAL',
                                                totalPriceLabel: 'Total',
                                                totalPrice: '1.00',
                                                currencyCode: 'INR',
                                                countryCode: 'IN',
                                             },
                                          }}
                                          onLoadPaymentData={paymentRequest => {
                                             console.log('load payment data', paymentRequest);
                                          }}
                                       />

                                    </div>
                                 </div>
                              </div>
                           </>
                           :
                           <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                              <div className="d-flex mb-5 align-items-center justify-content-between flex-wrap gap-3">
                                 <h2 style={{ color: 'black' }}>Cart is Empty.</h2>
                              </div>
                           </div>


                        }

















                     </div>
                     {/*} <ul className="pagination justify-content-center mt-40">
                        <li>
                           <a href="#0">
                              <i className="material-symbols-outlined">
                                 chevron_left
                              </i>
                           </a>
                        </li>
                        <li>
                           <a href="#0">
                              1
                           </a>
                        </li>
                        <li>
                           <a href="#0">
                              2
                           </a>
                        </li>
                        <li>
                           <a href="#0">
                              3
                           </a>
                        </li>
                        <li>
                           <a href="#0">
                              ...
                           </a>
                        </li>
                        <li>
                           <a href="#0">
                              <i className="material-symbols-outlined">
                                 chevron_right
                              </i>
                           </a>
                        </li>
                     </ul>*/}
                  </div>
               </div>
            </div>
         </section >
         <Footer />
      </>
   )
}
