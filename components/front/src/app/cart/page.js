"use client"
import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import GooglePayButton from '@google-pay/button-react';
const axios = require('axios');
import { decode as base64_decode, encode as base64_encode } from 'base-64';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';

import { TransitionProps } from '@mui/material/transitions';
const crypto = require('crypto');
export default function page() {
   const [navbarFixed, setNavbarFixed] = useState(false);
   const [cardtype, setcardtype] = useState('0');
   const [succ, setsucc] = useState('');
   const [pvccardtype, setpvccardtype] = useState(false);
   const [metalcardtype, setmetalcardtype] = useState(false);
   const [cartid, setcartid] = useState('');
   const [cartarrid, setcartarrid] = useState([]);
   const [carttot, setcarttot] = useState('0.00');
   const [carddetails, setcarddetails] = useState('');
   const [confirmmodal, setconfirmmodal] = useState(false);
   const [removeid, setremoveid] = useState(false);

   const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
   });
   useEffect(() => {
      const handleScroll = () => {
         // console.log("Scroll event triggered"); // Check if the scroll event is being triggered
         const scrollY = window.scrollY;

         // Check if the scroll position is greater than or equal to the banner section height
         if (scrollY >= 300) {
            setNavbarFixed(true);
            //  console.log("Navbar is fixed");
         } else {
            setNavbarFixed(false);
            // console.log("Navbar is not fixed");
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
      const ListItem = async () => {
         const res = await axios.get("https://www.laabamone.com/Lobsmart/api.php?eventtype=card_list")
         console.log("resss", res.data);
         setcarddetails(res.data);
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
      ListItem();
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const Paynow = () => {

      window.location.href = "/checkout"



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

   function Add_to_cart(id, type) {
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
         let cartid = localStorage.getItem("CART_STOREAGE_VALUE");
         console.log(cartid, 'cartid')
         let position = cartid.search(search);
         let res = '';
         if (position >= 0) {
            res = cartid.replace(search, "");
            setcartid(res);
            updateCookie(res);
            console.log('res2', res);
            setsucc("item removed successfully..");
            window.location.href = "/cart";

            return false;
         }

      }



   }

   const FindCartArr = (id) => {

      let search = id + ',';
      let position = cartid.search(search);
      //  console.log('position', position);
      if (position >= 0) {
         return '1';
      }
      else {
         return '0';
      }

   }
   const Modalclose = (a) => {
      // event.preventDefault();
      setconfirmmodal(false);

      if (a == 1) {

         Add_to_cart(removeid, 'remove')
      }


   };
   const callfunc = (a) => {
      setconfirmmodal(true);
      setremoveid(a)
   }
   return (
      <>
         <Dialog
            open={confirmmodal}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
         >
            <DialogTitle style={{ color: 'red' }}>{"please confirm to remove the product from the cart? "}</DialogTitle>
            <DialogContent>
               <DialogContentText id="alert-dialog-slide-description">
                  Click `confirm`, if you want to  remove the item from the cart. otherwise click `Not, confirm`
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button type='button' onClick={() => Modalclose('2')}>Not, confirm</Button>
               <Button type='button' onClick={() => Modalclose('1')}>Confirm</Button>
            </DialogActions>
         </Dialog>
         <Header value={navbarClass} cart_id={cartid} />

         <section className="card__details__section pt-120 pb-120 bgadd ralt">
            <div className="container">
               <div className="row g-4">

                  <div className="col-xl-12 col-lg-12">
                     <div className="row g-4 justify-content-center">

                        {cartarrid.length > 0 && carddetails.length > 0 ?
                           <>
                              {carddetails.map((b, inc) => (
                                 cartarrid.map((arr, i) => (

                                    arr == b.id ?

                                       <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                                          {succ != '' &&
                                             <Alert severity='success' sx={{ color: 'green' }}>success ! {succ}</Alert>}

                                          <div className="popular__items popular__v2 round16">
                                             <div className="card__boxleft" style={{ width: '70%' }}>
                                                <div className="w-100 d-flex  align-items-center justify-content-between flex-wrap gap-2">
                                                   <img src={b.img} alt="card" style={{ width: '150px' }} className="w-10 mb-24" />

                                                   <h6 className="title mb-30  ">
                                                      {b.name}


                                                   </h6>
                                                   <h7 className="title mb-30  " style={{ color: 'blue' }}>
                                                      {b.typename}
                                                   </h7>

                                                </div>
                                             </div>

                                             <div className="card__boxright " style={{ width: '30%' }}>
                                                <div className="d-flex mb-10 align-items-center flex-wrap gap-3">
                                                   <div className="w-100 d-flex  align-items-center justify-content-between flex-wrap gap-2">

                                                      <h5 className="title mb-30 " style={{ color: '#eaac66' }}>
                                                         ₹{b.amt}
                                                      </h5>
                                                      <h7 className="title mb-30  " style={{ color: 'blue' }}>
                                                         <a href="#" onClick={() => { callfunc(b.id) }} className="cmn--btn outline__btn align-items-center">
                                                            <span>
                                                               <i className='fa fa-close'></i>
                                                            </span>
                                                         </a>
                                                      </h7>

                                                   </div>


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
                                                Checkout
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
