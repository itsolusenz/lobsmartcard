"use client"
import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
export default function page() {
   const [navbarFixed, setNavbarFixed] = useState(false);
   const [cardtype, setcardtype] = useState('0');
   const [pvccardtype, setpvccardtype] = useState(false);
   const [metalcardtype, setmetalcardtype] = useState(false);
   const [cartid, setcartid] = useState('');
   const [carddetails, setcarddetails] = useState('');

   useEffect(() => {
      const ListItem = async () => {
         const res = await axios.get("https://www.laabamone.com/Lobsmart/api.php?eventtype=card_list")
         console.log("resss", res.data);
         setcarddetails(res.data);
      }
      function callCart() {
         if (localStorage.getItem("CART_STOREAGE_VALUE") != null && localStorage.getItem("CART_STOREAGE_VALUE") != undefined && localStorage.getItem("CART_STOREAGE_VALUE") != '') {
            let res = localStorage.getItem("CART_STOREAGE_VALUE");
            setcartid(res);
         }
      }
      const handleScroll = () => {
         //  console.log("Scroll event triggered"); // Check if the scroll event is being triggered
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
      callCart();
      ListItem();
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
         <Header value={navbarClass} cart_id={cartid} />
         <div className="breadcumnd__wrapper">
            <div className="container">
               <div className="row align-items-center justify-content-between">
                  <div className="col-xxl-6 col-xl-6 col-lg-9 col-md-8 col-sm-8">
                     <div className="breadcumnd__content">
                        <span className="d4 mb-24 base2">
                           Buy Now
                        </span>
                        <ul className="breadcun__list flex-wrap gap-1 d-flex align-items-center">
                           <li>
                              <a href="/" className="fz-16 fw-400 inter ">
                                 Home
                              </a>
                           </li>
                           {/*  <li>
                        <i className="material-symbols-outlined text-white mt-2">
                           chevron_right
                        </i>
                     </li>
                     <li>
                        <a href="#0" className="fz-16 fw-400 inter text-white">
                           Categories
                        </a>
                     </li> */}
                           <li>
                              <i className="material-symbols-outlined base2 mt-2">
                                 chevron_right
                              </i>
                           </li>
                           <li className="fz-16 base2 fw-40 inter">
                              Buy Now
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4">
                     <div className="featured__card">
                        <Image src="/assets/front/card/new/head.png" className="w-100" alt="img" layout='responsive' width={400} height={400} />
                     </div>
                  </div>
               </div>
            </div>
            <div className="element1">
               <Image src="/assets/front/img/banner/chok1.png" width={10} height={10} layout='responsive' alt="element" />
            </div>
            <div className="element2">
               <Image src="/assets/front/img/banner/chok2.png" width={10} height={10} layout='responsive' alt="element" />
            </div>
            <div className="element3">
               <Image src="/assets/front/img/banner/chok2.png" width={10} height={10} layout='responsive' alt="element" />
            </div>
            <div className="element4">
               <Image src="/assets/front/img/banner/chok2.png" width={10} height={10} layout='responsive' alt="element" />
            </div>
         </div>
         <section className="card__details__section pt-120 pb-120 bgadd ralt">
            <div className="container">
               <div className="row g-4">
                  <div className="col-xl-12 col-lg-12">
                     <div className="card__sidebar">
                        <div className="card__common__item bgwhite round16 mb-24">
                           {/*} <h4 className="head fw-600 bborderdash title pb-24 mb-24">
                              Filter
                           </h4>
                           <form action="#0" className="d-flex align-items-center mb-24 justify-content-between">
                              <input type="text" placeholder="Search by card name" />
                              <i className="material-symbols-outlined">
                                 search
                              </i>
                           </form>*/}
                           <div className="pt-24   pb-24">
                              {/*} <h5 className="title mb-16">
                                 Card Type
                        </h5>*/}
                              <div className="account__categories d-flex align-items-center flex-wrap">

                                 {carddetails_head.map((a, i) => (


                                    <div key={i} className="account-cateitem d-flex align-items-center" >
                                       <input className="form-check-input" defaultChecked={a.id == cardtype ? true : false} type="radio" name="flexRadioDefault" id={`account${a.id}`} onClick={() => setcardtype(a.id)} />
                                       <label className="form-check-label fz-18 fw-500 inter title" htmlFor={`account${a.id}`}>
                                          {a.name}
                                       </label>
                                    </div>

                                 ))}
                              </div>

                              {/*}  <div className="account__categories d-flex align-items-center flex-wrap">
                                 <div className="account-cateitem d-flex align-items-center">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="account1" />
                                    <label className="form-check-label fz-18 fw-500 inter title" htmlFor="account1">
                                       Personal
                                    </label>
                                 </div>
                                 <div className="account-cateitem d-flex align-items-center">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="account2" defaultChecked={true} />
                                    <label className="form-check-label fz-18 fw-500 inter title" htmlFor="account2">
                                       Business
                                    </label>
                                 </div>
                                 <div className="account-cateitem d-flex align-items-center">
                           <input className="form-check-input" type="radio" name="flexRadioDefault" id="account3"/>
                           <label className="form-check-label fz-18 fw-500 inter title" htmlFor="account3">
                              Worldwide
                           </label>
                                    </div> 
                              </div>*/}
                           </div>
                           {cardtype == '1' &&
                              <div className="pt-24 tborderdash bborderdash pb-24">
                                 <h5 className="title mb-16">
                                    PVC Card Type
                                 </h5>
                                 <div className="account__categories d-flex align-items-center flex-wrap">

                                    {carddetails_pvchead.map((a, i) => (
                                       <div key={i} className="account-cateitem d-flex align-items-center" >
                                          <input className="form-check-input" defaultChecked={a.id == pvccardtype ? true : false} type="radio" name="flexRadioDefault" id={`account${a.id}`} onClick={() => setpvccardtype(a.id)} />
                                          <label className="form-check-label fz-18 fw-500 inter title" htmlFor={`account${a.id}`}>
                                             {a.name}
                                          </label>
                                       </div>



                                    ))}
                                 </div>


                              </div>
                           }
                           {cardtype == '2' &&
                              <div className="pt-24 tborderdash bborderdash pb-24">
                                 <h5 className="title mb-16">
                                    Metal Card Type
                                 </h5>
                                 <div className="account__categories d-flex align-items-center flex-wrap">

                                    {carddetails_metalhead.map((a, i) => (

                                       <div key={i} className="account-cateitem d-flex align-items-center" >
                                          <input className="form-check-input" defaultChecked={a.id == metalcardtype ? true : false} type="radio" name="flexRadioDefault" id={`account${a.id}`} onClick={() => setmetalcardtype(a.id)} />
                                          <label className="form-check-label fz-18 fw-500 inter title" htmlFor={`account${a.id}`}>
                                             {a.name}
                                          </label>
                                       </div>


                                    ))}
                                 </div>


                              </div>
                           }
                           {/*} <div className="bank__check__wrap pb-24">
                              <h5 className="title mb-16 pt-24">
                                 Bank Category
                              </h5>
                              <div className="bank__checkitem mb-8 d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="bank11" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="bank11">
                                    Retail Banks
                                 </label>
                              </div>
                              <div className="bank__checkitem mb-8 d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="bank22" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="bank22">
                                    Commercial Banks
                                 </label>
                              </div>
                              <div className="bank__checkitem mb-8 d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="bank33" />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="bank33">
                                    Investment Banks
                                 </label>
                              </div>
                              <div className="bank__checkitem mb-8 d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="bank44" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="bank44">
                                    Central Banks
                                 </label>
                              </div>
                              <div className="bank__checkitem d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="bank55" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="bank55">
                                    Cooperative Banks
                                 </label>
                              </div>
                           </div>
                          <div className="pt-24 tborderdash bborderdash pb-24">
                              <h5 className="title mb-16">
                                 Desired credit
                              </h5>
                              <div className="range__barcustom">
                                 <div className="slider">
                                    <div className="progress" style={{ left: " 25%", right: "25%" }}></div>
                                 </div>
                                 <div className="range-input mb__10">
                                    <input type="range" className="range-min" min="0" max="10000" defaultValue="2500" step="100" />
                                    <input type="range" className="range-max" min="0" max="10000" defaultValue="7500" step="100" />
                                 </div>
                                 <div className="price-input">
                                    <div className="field title">
                                       <span>$</span>
                                       <input type="number" className="input-min" defaultValue="2500" />
                                    </div>
                                    <div className="separator">-</div>
                                    <div className="field title">
                                       <span>$</span>
                                       <input type="number" className="input-max" defaultValue="7500" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="pt-24 tborderdash bborderdash pb-24">
                              <h5 className="title mb-16">
                                 Income requirements
                              </h5>
                              <div className="range__barcustom">
                                 <div className="slider">
                                    <div className="progress" style={{ left: " 25%", right: "25%" }}></div>
                                 </div>
                                 <div className="range-input mb__10">
                                    <input type="range" className="range-min" min="0" max="10000" defaultValue="2500" step="100" />
                                    <input type="range" className="range-max" min="0" max="10000" defaultValue="7500" step="100" />
                                 </div>
                                 <div className="price-input">
                                    <div className="field title">
                                       <span>$</span>
                                       <input type="number" className="input-min" defaultValue="2500" />
                                    </div>
                                    <div className="separator">-</div>
                                    <div className="field title">
                                       <span>$</span>
                                       <input type="number" className="input-ma x" defaultValue="7500" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="bank__check__wrap pb-24 tborderdash">
                              <h5 className="title mb-16 pt-24">
                                 Bank Types
                              </h5>
                              <div className="bank__checkitem mb-8 d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="bank1" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="bank1">
                                    CT Bank Ltd
                                 </label>
                              </div>
                              <div className="bank__checkitem mb-8 d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="bank2" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="bank2">
                                    AK Bank Ltd
                                 </label>
                              </div>
                              <div className="bank__checkitem mb-8 d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="bank3" />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="bank3">
                                    TD Bank Ltd
                                 </label>
                              </div>
                              <div className="bank__checkitem mb-8 d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="bank4" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="bank4">
                                    Wells Fargo Ltd
                                 </label>
                              </div>
                              <div className="bank__checkitem d-flex mb-8 align-items-center">
                                 <input className="form-check-input" type="checkbox" id="bank5" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="bank5">
                                    JK Bank Ltd
                                 </label>
                              </div>
                              <div className="bank__checkitem d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="bank5a" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="bank5a">
                                    Bank of America
                                 </label>
                              </div>
                           </div>
                           <div className="bank__check__wrap tborderdash bborderdash mb-24 pb-24">
                              <h5 className="title mb-16 pt-24">
                                 Card Categories
                              </h5>
                              <div className="bank__checkitem mb-8 d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="tra1" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="tra1">
                                    Travel Cards
                                 </label>
                              </div>
                              <div className="bank__checkitem mb-8 d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="tra2" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="tra2">
                                    Student Cards
                                 </label>
                              </div>
                              <div className="bank__checkitem mb-8 d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="tra13" />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="tra13">
                                    Balance transfer
                                 </label>
                              </div>
                              <div className="bank__checkitem mb-8 d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="tra4" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="tra4">
                                    Low-interest Cards
                                 </label>
                              </div>
                              <div className="bank__checkitem d-flex mb-8 align-items-center">
                                 <input className="form-check-input" type="checkbox" id="tra5" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="tra5">
                                    Rewards Cards
                                 </label>
                              </div>
                              <div className="bank__checkitem d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="tra6" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="tra6">
                                    Business Cards
                                 </label>
                              </div>
                              <div className="bank__checkitem d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="tra7" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="tra7">
                                    Secured Credit Cards
                                 </label>
                              </div>
                              <div className="bank__checkitem d-flex align-items-center">
                                 <input className="form-check-input" type="checkbox" id="tra8" defaultChecked={true} />
                                 <label className="form-check-label fz-16 fw-400 ptext2 inter" htmlFor="tra8">
                                    Cash Back Cards
                                 </label>
                              </div>
                           </div>*/}
                           {/*} <a href="#0" className="reset__filter justify-content-center fw-600 inter fz-16 d-flex align-items-center gap-2 base">
                              <i className="material-symbols-outlined base">
                                 rotate_right
                              </i>
                              Reset Filters
                           </a>*/}
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-12 col-lg-12">
                     <div className="row g-4 justify-content-center">

                        {cardtype == '1' &&

                           <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">

                              <div className="popular__items popular__v2 round16">


                                 <div className="card__boxleft">
                                    <Image src="/assets/front/card/new/matt_black.png" alt="card" className="w-100 mb-24" layout='responsive' width={1000} height={150} />
                                    {/*} <span className="aplication ralt mb-15 d-block fz-14 fw-400 inter ptext2">1 Application – offer of 4 cards</span>
                                    <div className="d-flex mb-16 fz-18 fw-400 inter ptext2 gap-1 align-items-center">
                                       <i className="material-symbols-outlined ratting fz-24 mb-2">
                                          star
                                       </i>
                                       4.5 (47 People Reviews)
                                    </div>
                                    <div className="d-flex flex-wrap gap-4 align-items-center">
                                       <a href="compare-card.html" className="compare__btn d-flex align-items-center">
                                          <i className="material-symbols-outlined round50 justify-content-center base d-flex align-items-center fs-16">
                                             compare_arrows
                                          </i>
                                          <span className="fz-14 fw-400 inter ">
                                             Compare
                                          </span>
                                       </a>
                                       <a href="listing-details.html" className="compare__btn d-flex align-items-center">
                                          <i className="material-symbols-outlined round50 justify-content-center base d-flex align-items-center fs-16">
                                             arrow_right_alt
                                          </i>
                                          <span className="fz-14 fw-400 inter ">
                                             Details
                                          </span>
                                       </a>
                        </div>*/}
                                 </div>










                                 <div className="card__boxright">
                                    <div className="d-flex mb-30 align-items-center justify-content-between flex-wrap gap-3">
                                       <h3 className="title mb-16">
                                          PVC Card
                                       </h3>
                                       {/*} <a href="listing-details.html" className="cmn--btn">
                                          <span>
                                             ADD TO CARD
                                          </span>
                     </a>*/}
                                    </div>

                                    <p className="card__info fz-16 inter ptext">
                                       Our PVC NFC Cards are the ultimate combination of style and durability made from high quality PVC material. These cards feature a Matte finish that’s sure to make a bold statement about your brand. With NFC technology, these cards offer seamless communication. Our PVC NFC Cards can be fully customized to showcase your brand’s personality. Upgrade your networking game and stand out from the crowd. Order yours today and experience the perfect combination of style, functionality and durability!
                                    </p>
                                 </div>
                              </div>
                           </div>

                        }
                        {cardtype == '2' &&

                           <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">

                              <div className="popular__items popular__v2 round16">


                                 <div className="card__boxleft">
                                    <Image src="/assets/front/card/new/glassy_blue.png" alt="card" className="w-100 mb-24" layout='responsive' width={1000} height={150} />

                                    {/*} <span className="aplication ralt mb-15 d-block fz-14 fw-400 inter ptext2">1 Application – offer of 4 cards</span>
         <div className="d-flex mb-16 fz-18 fw-400 inter ptext2 gap-1 align-items-center">
            <i className="material-symbols-outlined ratting fz-24 mb-2">
               star
            </i>
            4.5 (47 People Reviews)
         </div>
         <div className="d-flex flex-wrap gap-4 align-items-center">
            <a href="compare-card.html" className="compare__btn d-flex align-items-center">
               <i className="material-symbols-outlined round50 justify-content-center base d-flex align-items-center fs-16">
                  compare_arrows
               </i>
               <span className="fz-14 fw-400 inter ">
                  Compare
               </span>
            </a>
            <a href="listing-details.html" className="compare__btn d-flex align-items-center">
               <i className="material-symbols-outlined round50 justify-content-center base d-flex align-items-center fs-16">
                  arrow_right_alt
               </i>
               <span className="fz-14 fw-400 inter ">
                  Details
               </span>
            </a>
</div>*/}
                                 </div>










                                 <div className="card__boxright">
                                    <div className="d-flex mb-30 align-items-center justify-content-between flex-wrap gap-3">
                                       <h3 className="title mb-16">
                                          Metal Card
                                       </h3>
                                       {/*} <a href="listing-details.html" className="cmn--btn">
               <span>
                  ADD TO CARD
               </span>
</a>*/}
                                    </div>

                                    <p className="card__info fz-16 inter ptext">
                                       Crafted from high-quality metal, these cards offer a level of durability and elegance that is unmatched by traditional paper cards. With NFC technology embedded within, these cards enable seamless communication, making networking a breeze. What's more, you can customise these cards with your company's logo, contact information, and any other details you desire, making them the perfect representation of your brand. The utilisation of Metal NFC Cards is revolutionising the networking space. Impress your clients and partners with these sleek and professional Metal NFC Cards, and take your business to the next level.
                                    </p>
                                 </div>
                              </div>
                           </div>

                        }

                        {
                           carddetails.length > '0' &&
                           carddetails.map((b, inc) => (
                              ((pvccardtype == b.tyepid && cardtype == '1') || (pvccardtype == b.tyepid && cardtype == '2') || (cardtype == b.headid && pvccardtype == '' && metalcardtype == '') || (cardtype == 0))

                              &&

                              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">

                                 <div className="popular__items popular__v2 round16">

                                    <div className="card__boxright align-items-center">
                                       <div >
                                          <Image src={b.img} alt="card" className="w-100 mb-24" layout='responsive' width={1000} height={150} />

                                       </div>

                                       <div className="d-flex mb-5 align-items-center justify-content-between flex-wrap gap-3">

                                          <h6 className="title  ">
                                             {b.name}
                                          </h6>
                                          <h7 className="title  " style={{ color: 'blue' }}>
                                             {b.typename}
                                          </h7>
                                       </div>
                                       <div className="d-flex mb-10 align-items-center justify-content-between flex-wrap gap-3">
                                          <h5 className="title mb-0 " style={{ color: '#eaac66' }}>
                                             ₹{b.amt}
                                          </h5>
                                          {FindCartArr(b.id) == '1' ?
                                             <a href="#" onClick={() => Add_to_cart(b.id, 'remove')} className="cmn--btn outline__btn align-items-center">
                                                <span>
                                                   Remove From Cart
                                                </span>
                                             </a>
                                             :
                                             <a href="#" onClick={() => Add_to_cart(b.id, 'add')} className="cmn--btn align-items-center">
                                                <span>
                                                   Add to Cart
                                                </span>
                                             </a>
                                          }



                                       </div>


                                    </div>
                                 </div>
                              </div>

                           )
                           )}















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
