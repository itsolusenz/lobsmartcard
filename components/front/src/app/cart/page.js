"use client"
import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import GooglePayButton from '@google-pay/button-react';
const axios = require('axios');
import { decode as base64_decode, encode as base64_encode } from 'base-64';
const crypto = require('crypto');
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
         name: 'Black',
         tyepid: '1',
         img: '/assets/front/card/new/matt_black.png',
         typename: 'PVC MATT CARD',
         amt: '2000',

      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '2',
         name: 'California Gold',
         tyepid: '1',
         img: '/assets/front/card/new/matt_californiagold.png',
         amt: '2000',
         typename: 'PVC MATT CARD'
      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '3',
         name: 'Gold',
         tyepid: '1',
         img: '/assets/front/card/new/matt_gold.png',
         amt: '2000',
         typename: 'PVC MATT CARD'
      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '4',
         name: 'Olive',
         tyepid: '1',
         img: '/assets/front/card/new/matt_olive.png',
         amt: '2000',
         typename: 'PVC MATT CARD'
      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '5',
         name: 'Silver',
         tyepid: '1',
         img: '/assets/front/card/new/matt_silver.png',
         amt: '2000',
         typename: 'PVC MATT CARD'
      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '6',
         name: 'White',
         tyepid: '1',
         img: '/assets/front/card/new/matt_white.png',
         amt: '2000',
         typename: 'PVC MATT CARD'
      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '7',
         name: 'Blue',
         tyepid: '2',
         img: '/assets/front/card/new/glassy_blue.png',
         amt: '2000',
         typename: 'PVC GLASSY CARD'

      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '8',
         name: 'Braze',
         tyepid: '2',
         img: '/assets/front/card/new/glassy_braze.png',
         amt: '2000',
         typename: 'PVC GLASSY CARD'

      },
      {
         headid: '1',//Metal
         headname: 'PVC Card',//Metal
         id: '9',
         name: 'Gold',
         tyepid: '2',
         img: '/assets/front/card/new/glassy_gold.png',
         amt: '2000',
         typename: 'PVC GLASSY CARD'

      },
      {
         headid: '1',//Metal
         headname: 'Glassy Card',//Metal
         id: '10',
         name: 'Silver',
         tyepid: '2',
         img: '/assets/front/card/new/glassy_silver.png',
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

         console.log('resssssssss', value.length);
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
         let res1 = cartid.slice(0, -1);
         let res = res1.split(",");
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

   const Paynow = () => {
      axios.post('/api').then(res => {
         window.location.href = "https://mercury-uat.phonepe.com/transact/simulator?token=9E7mYEWviFlagB06K57DXxQpeHfDcRETOhbtSdZaS8"
         setTimeout(() => {

         }, 1500);
      })
         .catch(error => {
            //setLoading2(false)
            console.error(error);
         });


   }

   /*   (async function () {
         // event.preventDefault();

         const response1234 = await axios.get("/api");
         console.log('---res', response1234)


      })();*/













   /* const payload1 = JSON.stringify(data)
    const payload = base64_encode(payload1);
    const key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
    const keyindex = '1';
    const string = "SHA256" + payload + "/pg/v1/pay" + key + "###" + keyindex;
    console.log("string", string);





   const options = {
      method: 'POST',
      url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
      headers: { accept: 'application/json', 'Content-Type': 'application/json' }
   };

   axios
      .request(options)
      .then(function (response) {
         console.log(response.data);
      })
      .catch(function (error) {
         console.error(error);
      });*/


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

                                       <div className="frm__grp">
                                          <button type="button" className="cmn--btn" onClick={Paynow} >
                                             <span>
                                                Pay now
                                             </span>
                                          </button>
                                       </div>

                                       {/*}    <GooglePayButton
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
                                       />*/}

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
