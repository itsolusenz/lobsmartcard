"use client"
import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function page() {
   const [navbarFixed, setNavbarFixed] = useState(false);

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

   const navbarClass = navbarFixed ? 'navbar-fixed' : '';
   return (
      <>
         <Header value={navbarClass} />
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
                        <Image src="/assets/front/img/work/choose-card.png" className="w-100" alt="img" layout='responsive' width={400} height={300} />
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
                  <div className="col-xl-4 col-lg-4">
                     <div className="card__sidebar">
                        <div className="card__common__item bgwhite round16 mb-24">
                           <h4 className="head fw-600 bborderdash title pb-24 mb-24">
                              Filter
                           </h4>
                           <form action="#0" className="d-flex align-items-center mb-24 justify-content-between">
                              <input type="text" placeholder="Search by card name" />
                              <i className="material-symbols-outlined">
                                 search
                              </i>
                           </form>
                           <div className="pt-24 tborderdash bborderdash pb-24">
                              <h5 className="title mb-16">
                                 Account Category
                              </h5>
                              <div className="account__categories d-flex align-items-center flex-wrap">
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
                                 {/* <div className="account-cateitem d-flex align-items-center">
                           <input className="form-check-input" type="radio" name="flexRadioDefault" id="account3"/>
                           <label className="form-check-label fz-18 fw-500 inter title" htmlFor="account3">
                              Worldwide
                           </label>
                        </div> */}
                              </div>
                           </div>
                           <div className="bank__check__wrap pb-24">
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
                           </div>
                           <a href="#0" className="reset__filter justify-content-center fw-600 inter fz-16 d-flex align-items-center gap-2 base">
                              <i className="material-symbols-outlined base">
                                 rotate_right
                              </i>
                              Reset Filters
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-8 col-lg-8">
                     <div className="row g-4 justify-content-center">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                           <div className="popular__items popular__v2 round16">
                              <div className="card__boxleft">
                                 <Image src="/assets/front/img/cards/card2.png" alt="card" className="w-100 mb-24" layout='responsive' width={1000} height={150} />
                                 <span className="aplication ralt mb-15 d-block fz-14 fw-400 inter ptext2">1 Application – offer of 4 cards</span>
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
                                 </div>
                              </div>
                              <div className="card__boxright">
                                 <div className="d-flex mb-30 align-items-center justify-content-between flex-wrap gap-3">
                                    <h3 className="title mb-16">
                                       JK Bank Ltd
                                    </h3>
                                    <a href="listing-details.html" className="cmn--btn">
                                       <span>
                                          ADD TO CARD
                                       </span>
                                    </a>
                                 </div>
                                 <div className="d-flex card__btngrp align-items-center">
                                    <a href="#0" className="ctband__item d-flex align-items-center gap-1">
                                       <i className="material-symbols-outlined base fz-18">
                                          account_balance_wallet
                                       </i>
                                       <span className="fz-14 fw-500 inter base">
                                          Cashback
                                       </span>
                                    </a>
                                    <a href="#0" className="ctband__item d-flex align-items-center gap-1">
                                       <i className="material-symbols-outlined base fz-18">
                                          add_card
                                       </i>
                                       <span className="fz-14 fw-500 inter base">
                                          Travel Card
                                       </span>
                                    </a>
                                    <a href="#0" className="ctband__item d-flex align-items-center gap-1">
                                       <span className="material-symbols-outlined base fz-18">
                                          local_atm
                                       </span>
                                       <span className="fz-14 fw-500 inter base">
                                          Bonus Points
                                       </span>
                                    </a>
                                 </div>
                                 <div className="bank__detals d-flex align-items-center ">
                                    <ul className="bankd__wrap">
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Max credit
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $150,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Income
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $120,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Interst-free
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             35 days
                                          </span>
                                       </li>
                                    </ul>
                                    <ul className="bankd__wrap left__border">
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Max credit
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $150,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Income
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $120,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Interst-free
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             35 days
                                          </span>
                                       </li>
                                    </ul>
                                 </div>
                                 <p className="card__info fz-16 inter ptext">
                                    Credit cards are plastic or metal cards used to pay for items or services using credit.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                           <div className="popular__items popular__v2 round16">
                              <div className="card__boxleft">
                                 <Image src="/assets/front/img/cards/card1.png" alt="card" className="w-100 mb-24" layout='responsive' width={1000} height={150} />
                                 <span className="aplication ralt mb-15 d-block fz-14 fw-400 inter ptext2">1 Application – offer of 4 cards</span>
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
                                 </div>
                              </div>
                              <div className="card__boxright">
                                 <div className="d-flex mb-30 align-items-center justify-content-between flex-wrap gap-3">
                                    <h3 className="title mb-16">
                                       JK Bank Ltd
                                    </h3>
                                    <a href="listing-details.html" className="cmn--btn">
                                       <span>
                                          ADD TO CARD
                                       </span>
                                    </a>
                                 </div>
                                 <div className="d-flex card__btngrp align-items-center">
                                    <a href="#0" className="ctband__item d-flex align-items-center gap-1">
                                       <i className="material-symbols-outlined base fz-18">
                                          account_balance_wallet
                                       </i>
                                       <span className="fz-14 fw-500 inter base">
                                          Cashback
                                       </span>
                                    </a>
                                    <a href="#0" className="ctband__item d-flex align-items-center gap-1">
                                       <i className="material-symbols-outlined base fz-18">
                                          add_card
                                       </i>
                                       <span className="fz-14 fw-500 inter base">
                                          Travel Card
                                       </span>
                                    </a>
                                    <a href="#0" className="ctband__item d-flex align-items-center gap-1">
                                       <span className="material-symbols-outlined base fz-18">
                                          local_atm
                                       </span>
                                       <span className="fz-14 fw-500 inter base">
                                          Bonus Points
                                       </span>
                                    </a>
                                 </div>
                                 <div className="bank__detals d-flex align-items-center ">
                                    <ul className="bankd__wrap">
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Max credit
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $150,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Income
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $120,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Interst-free
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             35 days
                                          </span>
                                       </li>
                                    </ul>
                                    <ul className="bankd__wrap left__border">
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Max credit
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $150,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Income
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $120,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Interst-free
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             35 days
                                          </span>
                                       </li>
                                    </ul>
                                 </div>
                                 <p className="card__info fz-16 inter ptext">
                                    Credit cards are plastic or metal cards used to pay for items or services using credit.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                           <div className="popular__items popular__v2 round16">
                              <div className="card__boxleft">
                                 <Image src="/assets/front/img/cards/card3.png" alt="card" className="w-100 mb-24" layout='responsive' width={1000} height={150} />
                                 <span className="aplication ralt mb-15 d-block fz-14 fw-400 inter ptext2">1 Application – offer of 4 cards</span>
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
                                 </div>
                              </div>
                              <div className="card__boxright">
                                 <div className="d-flex mb-30 align-items-center justify-content-between flex-wrap gap-3">
                                    <h3 className="title mb-16">
                                       JK Bank Ltd
                                    </h3>
                                    <a href="listing-details.html" className="cmn--btn">
                                       <span>
                                          ADD TO CARD
                                       </span>
                                    </a>
                                 </div>
                                 <div className="d-flex card__btngrp align-items-center">
                                    <a href="#0" className="ctband__item d-flex align-items-center gap-1">
                                       <i className="material-symbols-outlined base fz-18">
                                          account_balance_wallet
                                       </i>
                                       <span className="fz-14 fw-500 inter base">
                                          Cashback
                                       </span>
                                    </a>
                                    <a href="#0" className="ctband__item d-flex align-items-center gap-1">
                                       <i className="material-symbols-outlined base fz-18">
                                          add_card
                                       </i>
                                       <span className="fz-14 fw-500 inter base">
                                          Travel Card
                                       </span>
                                    </a>
                                    <a href="#0" className="ctband__item d-flex align-items-center gap-1">
                                       <span className="material-symbols-outlined base fz-18">
                                          local_atm
                                       </span>
                                       <span className="fz-14 fw-500 inter base">
                                          Bonus Points
                                       </span>
                                    </a>
                                 </div>
                                 <div className="bank__detals d-flex align-items-center ">
                                    <ul className="bankd__wrap">
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Max credit
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $150,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Income
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $120,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Interst-free
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             35 days
                                          </span>
                                       </li>
                                    </ul>
                                    <ul className="bankd__wrap left__border">
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Max credit
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $150,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Income
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $120,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Interst-free
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             35 days
                                          </span>
                                       </li>
                                    </ul>
                                 </div>
                                 <p className="card__info fz-16 inter ptext">
                                    Credit cards are plastic or metal cards used to pay for items or services using credit.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                           <div className="popular__items popular__v2 round16">
                              <div className="card__boxleft">
                                 <Image src="/assets/front/img/cards/card4.png" alt="card" className="w-100 mb-24" layout='responsive' width={1000} height={150} />
                                 <span className="aplication ralt mb-15 d-block fz-14 fw-400 inter ptext2">1 Application – offer of 4 cards</span>
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
                                 </div>
                              </div>
                              <div className="card__boxright">
                                 <div className="d-flex mb-30 align-items-center justify-content-between flex-wrap gap-3">
                                    <h3 className="title mb-16">
                                       JK Bank Ltd
                                    </h3>
                                    <a href="listing-details.html" className="cmn--btn">
                                       <span>
                                          ADD TO CARD
                                       </span>
                                    </a>
                                 </div>
                                 <div className="d-flex card__btngrp align-items-center">
                                    <a href="#0" className="ctband__item d-flex align-items-center gap-1">
                                       <i className="material-symbols-outlined base fz-18">
                                          account_balance_wallet
                                       </i>
                                       <span className="fz-14 fw-500 inter base">
                                          Cashback
                                       </span>
                                    </a>
                                    <a href="#0" className="ctband__item d-flex align-items-center gap-1">
                                       <i className="material-symbols-outlined base fz-18">
                                          add_card
                                       </i>
                                       <span className="fz-14 fw-500 inter base">
                                          Travel Card
                                       </span>
                                    </a>
                                    <a href="#0" className="ctband__item d-flex align-items-center gap-1">
                                       <span className="material-symbols-outlined base fz-18">
                                          local_atm
                                       </span>
                                       <span className="fz-14 fw-500 inter base">
                                          Bonus Points
                                       </span>
                                    </a>
                                 </div>
                                 <div className="bank__detals d-flex align-items-center ">
                                    <ul className="bankd__wrap">
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Max credit
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $150,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Income
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $120,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Interst-free
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             35 days
                                          </span>
                                       </li>
                                    </ul>
                                    <ul className="bankd__wrap left__border">
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Max credit
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $150,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Income
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             $120,000
                                          </span>
                                       </li>
                                       <li className="d-flex align-items-center justify-content-between">
                                          <span className="fz-14 fw-400 ptext2 inter">
                                             Interst-free
                                          </span>
                                          <span className="fz-14 fw-400 inter title">
                                             35 days
                                          </span>
                                       </li>
                                    </ul>
                                 </div>
                                 <p className="card__info fz-16 inter ptext">
                                    Credit cards are plastic or metal cards used to pay for items or services using credit.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <ul className="pagination justify-content-center mt-40">
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
                     </ul>
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   )
}
