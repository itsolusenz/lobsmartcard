"use client"
import React from 'react'
import Header from '../component/header';
import Footer from '../component/footer';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function about() {
  const sectionRef = useRef(null);
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [bannerSectionHeight, setBannerSectionHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY;
        const sectionHeight = sectionRef.current.offsetHeight;
        console.log(sectionHeight);
        setBannerSectionHeight(sectionHeight);

        // Check if the scroll position is greater than or equal to the banner section height
        if (scrollY >= sectionHeight) {
          setNavbarFixed(true);
        } else {
          setNavbarFixed(false);
        }
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
      {/*?php
$page = '2';
$selid = '2';
include 'require/header.php'; ?*/}
      <div className="breadcumnd__wrapper" ref={sectionRef}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
              <div className="breadcumnd__content">
                <span className="d4 mb-24 base2">About us</span>
                <ul className="breadcun__list flex-wrap gap-1 d-flex align-items-center">
                  <li>
                    <a href="." className="fz-16 fw-400 inter ">
                      Home
                    </a>
                  </li>
                  {/* <li>
               <i className="material-symbols-outlined text-white mt-2">
                  chevron_right
               </i>
            </li> */}
                  {/* <li>
               <a href="#0" className="fz-16 fw-400 inter text-white">
                  Pages
               </a>
            </li> */}
                  <li>
                    <i className="material-symbols-outlined base2 mt-2">
                      chevron_right
                    </i>
                  </li>
                  <li className="fz-16 base2 fw-40 inter">About us</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5">
              <div className="featured__card">
                <Image src="/assets/front/card/new/head.png" className="w-100" alt="img" layout='responsive' width={400} height={200} />
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
      {/*element*/}
      {/* <div className="element1">
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
  </div> */}
      {/*element*/}
      {/* Hero Section End */}
      {/* How Work Here */}

      {/* How Work End */}
      {/* Provide Here */}

      <section className="provide__section ralt bgadd  pb-120">
        <div className="container">
          <div className="row  g-4 align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-7">
              <div className="choose__content">
                <div className="section__title mb-40">
                  <h4 className="sub ralt base mb-16 wow fadeInUp">Who We Are</h4>
                  <h2 className="title mb-24 wow fadeInDown">
                    We Provide Trusted Lobsmart AI business Card For This World
                  </h2>
                  <p className="ptext2 fz-16 fw-400 inter wow fadeInUp">
                    We understand that the world of Business cards overwhelming, We
                    LOBS provide smart AI business card for Professional and
                    business people.
                  </p>
                </div>
                <ul className="choose__listwrap provide__listwrap d-flex align-items-center">
                  <li className="d-flex mb-24 wow fadeInDown">
                    <i className="material-symbols-outlined base ifz32 bgwhite round50 d-flex align-items-center justify-content-center">
                      savings
                    </i>
                    <span className="contentbox">
                      <span className="fz-24 d-block mb-1 fw-600 inter title">
                        Money Saving
                      </span>
                      <span className="ptext2 fz-16 fw-400 inter">
                        Instead of printing plenty of paper business cards our
                        onestop solution is here. One smart business cards life,
                        time customizable, single tap to save contact. QR code for
                        non NFC
                      </span>
                    </span>
                  </li>
                  <li className="d-flex wow fadeInUp">
                    <i className="material-symbols-outlined icolor1 ifz32 bgwhite round50 d-flex align-items-center justify-content-center">
                      alarm_on
                    </i>
                    <span className="contentbox">
                      <span className="fz-24 d-block mb-1 fw-600 inter title">
                        Time Saving
                      </span>
                      <span className="ptext2 fz-16 fw-400 inter">
                        No waiting period for call back after supply of business
                        cards to the customer or clients since the contact can be
                        saved on their phone easily. Easy to access clients
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="provide__thumb">
                <Image src="/assets/front/img/aboutimg.png" alt="card" className="w-100" layout='responsive' width={400} height={700} />
              </div>
            </div>
          </div>
        </div>
        <div className="ball">
          <Image src="/assets/front/img/banner/ball.png" alt="ball" layout='responsive' width={450} height={300} />
        </div>
      </section>
      <section className="how__worksection2 pt-110 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section__title text-center mb-60">
                <h4
                  className="sub ralt base mb-16 wow fadeInUp"
                  data-wow-duration="0.5s"
                >
                  How It's Work
                </h4>
                <h2 className="title mb-24 wow fadeInUp" data-wow-duration="0.7s">
                  Get ready to buy our unique NFC card
                </h2>
                <p
                  className="ptext2 fz-16 fw-400 inter wow fadeInUp"
                  data-wow-duration="0.9s"
                >
                  Buying a NFC card from a LOBSMART gives you seamless sharing with
                  your networks
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-duration="0.5s"
            >
              <div className="howwork__item transition text-center">
                <div className="work__icon arrow1 d-flex align-items-center justify-content-center m-auto ralt round50 shadow1">
                  <span className="badge basebg d-flex align-items-center justify-content-center fz-18 fw-600 text-white inter round50">
                    01
                  </span>
                  <i className="material-symbols-outlined base round50 basebord">
                    travel_explore
                  </i>
                </div>
                <div className="content mt-24">
                  <h4 className="title mb-16">
                    <a href="#0">Tap and scan</a>
                  </h4>
                  <p className="fz-14 fw-400 inter title"></p>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-duration="0.5s"
            >
              <div className="howwork__item transition text-center">
                <div className="work__icon arrow2 d-flex align-items-center justify-content-center m-auto ralt round50 shadow1">
                  <span className="badge base4bg d-flex align-items-center justify-content-center fz-18 fw-600 text-white inter round50">
                    02
                  </span>
                  <i className="material-symbols-outlined base4 round50 base4bord">
                    gesture_select
                  </i>
                </div>
                <div className="content mt-24">
                  <h4 className="title mb-16">
                    <a href="#0">Customized Website</a>
                  </h4>
                  <p className="fz-14 fw-400 inter title"></p>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-duration="0.5s"
            >
              <div className="howwork__item transition text-center">
                <div className="work__icon arrow3 d-flex align-items-center justify-content-center m-auto ralt round50 shadow1">
                  <span className="badge base5bg d-flex align-items-center justify-content-center fz-18 fw-600 text-white inter round50">
                    03
                  </span>
                  <i className="material-symbols-outlined base5 round50 base5bord">
                    receipt_long
                  </i>
                </div>
                <div className="content mt-24">
                  <h4 className="title mb-16">
                    <a href="#0">Easy Access</a>
                  </h4>
                  <p className="fz-14 fw-400 inter title"></p>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-duration="0.5s"
            >
              <div className="howwork__item transition text-center">
                <div className="work__icon d-flex align-items-center justify-content-center m-auto ralt round50 shadow1">
                  <span className="badge basebg d-flex align-items-center justify-content-center fz-18 fw-600 text-white inter round50">
                    04
                  </span>
                  <i className="material-symbols-outlined base round50 basebord">
                    task_alt
                  </i>
                </div>
                <div className="content mt-24">
                  <h4 className="title mb-16">
                    <a href="#0">More Features</a>
                  </h4>
                  <p className="fz-14 fw-400 inter title"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Provide End */}
      {/*?php include 'require/footer.php'; ?*/}
      <Footer />
    </>



  )
}
