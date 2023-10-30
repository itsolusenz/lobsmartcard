// import Image from 'next/image'
// import Head from "next/head"
"use client"
import Footer from "./component/footer"
import Header from "./component/header"
import Image from 'next/image';

// import AOS from 'aos';
// import 'aos/dist/aos.css';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
//import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination } from 'swiper/core';
SwiperCore.use([Pagination]);

// import "./layout"




export default function Home() {
  const odometerRef = useRef(null);
  const [odometerValue1, setOdometerValue1] = useState(0);
  const [odometerValue2, setOdometerValue2] = useState(0);
  const [odometerValue3, setOdometerValue3] = useState(0);
  const [odometerValue4, setOdometerValue4] = useState(0);
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

  useEffect(() => {
    // Function to increment the decimal part of the odometer values
    const incrementOdometers = () => {
      if (odometerValue1 < 2.5) {
        setOdometerValue1(parseFloat((odometerValue1 + 0.1).toFixed(1)));
      }
      if (odometerValue2 < 3.8) {
        setOdometerValue2(parseFloat((odometerValue2 + 0.1).toFixed(1)));
      }
      if (odometerValue3 < 7.5) {
        setOdometerValue3(parseFloat((odometerValue3 + 0.1).toFixed(1)));
      }
      if (odometerValue4 < 60) {
        setOdometerValue4(parseFloat((odometerValue4 + 1).toFixed(1)));
      }

    };


    // Create an IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        // entries is an array of observed elements
        entries.forEach((entry) => {
          // If the element is intersecting (visible)
          if (entry.isIntersecting) {
            // Call your incrementOdometers function
            incrementOdometers();
            // Stop observing after one run if needed
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // You can configure the root, threshold, and other options here
      }
    );

    // Start observing the element
    if (odometerRef.current) {
      observer.observe(odometerRef.current);
    }


    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [odometerValue1, odometerValue2, odometerValue3, odometerValue4]);



  return (
    <>
      <Header value={navbarClass} />
      <section className="banner__section bgadd overhid ralt">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-6">
              <div className="banner__content ralt">
                <h4
                  className="sub ralt base mb-16 wow fadeInDown"
                  data-wow-duration="0.4s"
                >
                  Welcome to LOBSMART
                </h4>
                <span
                  className="d1 mb-24 title wow fadeInDown"
                  data-wow-duration="0.6s"
                >
                  Find the <span className="gratext">Personalized</span> NFC Cards
                </span>
                <p className="mb-40 title wow fadeInDown" data-wow-duration="0.8s">
                  LOBS Smart Personalized NFC Cards are digitally interactive business cards that can be customized with user information
                </p>
                <div
                  className="btn__grp d-flex align-items-center wow fadeInDown"
                  data-wow-duration="1s"
                >
                  <a href="/features" className="cmn--btn">
                    <span>More about NFC Card ?</span>
                  </a>
                  <a href="/about" className="cmn--btn outline__btn">
                    <span>Who We Are</span>
                  </a>
                </div>
                <div className="ball">
                  <img src="/assets/front/img/backroll1.png" height={800} width={800} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="banner__shapethumb ralt">
                <div className="thumb">
                  <Image
                    src="/assets/front/img/banner/banner1.png"
                    className="w-100"
                    height={400} width={500}
                    layout="responsive"
                    alt="banner"
                  />
                </div>
                <div className="circle__thumb">
                  <img src="/assets/front/img/banner/banner-thumbbg1.png" alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wallet">
          <Image src="/assets/front/img/banner/wallet.png" height={80} width={100} layout="responsive" alt="img" />
        </div>
        <div className="hand-wallet">
          <Image src="/assets/front/img/banner/hand-wallet.png" height={200} width={200} layout="responsive" alt="img" />
        </div>
        <div className="mobile-wallet">
          <Image src="/assets/front/img/banner/mobile-wallet.png" height={110} width={110} layout="responsive" alt="img" />
        </div>
      </section>

      {/* <!-- App Here --> */}

      <section className="app__section  pb-120 pt-120 ">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5 position-relative">
              <div className="app__thumb ralt">
                <Image src="/assets/front/img/app/app.png" height={500} width={500} alt="card" layout="responsive" className="w-100" priority />
              </div>
              <div className="shape__ball">
                <Image src="/assets/front/img/banner/ball.png" height={500} width={500} layout="responsive" alt="ball" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="app__content">
                <div className="section__title mb-30">
                  <h4 className="sub ralt base mb-16 wow fadeInDown">
                    Download Our Apps
                  </h4>
                  <h3 className="title mb-24 wow fadeInUp">
                    Follow Four Quick Steps To Buy Our Card With Confidence
                  </h3>
                  <p className="ptext2 fz-16 fw-400 inter wow fadeInDown" style={{ textAlign: 'left', textAlign: 'justify' }}>
                    Our NFC Cards are the ultimate combination of style and durability made from high quality PVC material. These cards feature a Matte finish that’s sure to make a bold statement about your brand. With NFC technology, these cards offer seamless communication.
                    Our NFC Cards can be fully customized to showcase your brand’s personality. Upgrade your networking game and stand out from the crowd.
                    Order yours today and experience the perfect combination of style, functionality and durability!



                    {/*} Take your credit card search on the go with our easy-to-use mobile apps. Download them today and get access to our powerful credit card search tools anytime, anywhere. With our apps, you can*/}
                  </p>
                </div>
                <ul className="app__listwrap mb-40">
                  <li>
                    <a href="#0" className="d-flex align-items-center wow fadeInUp">
                      <i className="material-symbols-outlined round50 d-flex align-items-center justify-content-center text-white">
                        south
                      </i>
                      <span className="fz-20 fw-500 inter title">
                        Download App
                      </span>
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="#0" className="d-flex align-items-center wow fadeInUp">
                      <i className="material-symbols-outlined round50 d-flex align-items-center justify-content-center text-white">
                        south
                      </i>
                      <span className="fz-20 fw-500 inter title">
                        Search and Compare
                      </span>
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="#0" className="d-flex align-items-center wow fadeInUp">
                      <i className="material-symbols-outlined round50 d-flex align-items-center justify-content-center text-white">
                        south
                      </i>
                      <span className="fz-20 fw-500 inter title">
                        Select a Card
                      </span>
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="#0" className="d-flex align-items-center wow fadeInUp">
                      <i className="material-symbols-outlined round50 d-flex align-items-center justify-content-center text-white">
                        south
                      </i>
                      <span className="fz-20 fw-500 inter title">
                        Apply for the Card
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="app__store d-flex align-items-center gap-3 flex-wrap wow fadeInDown">
                  <a href="#">
                    <Image src="/assets/front/img/app/appstore.png" height={100} width={100} layout="responsive" alt="app" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.lobsmartcardnew.lobs&hl=en-IN" target="_blank">
                    <Image src="/assets/front/img/app/googlepaly.png" height={100} width={100} layout="responsive" alt="app" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- App End --> */}

      {/* HOW IS IT CARD */}
      <section className="how__worksection ralt bgadd pt-110 pb-120" style={{ backgroundColor: 'white', borderTop: '1px solid black' }}>
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
                  Buying an NFC-enabled AI business card from LOBSMART gives you a more professional way to handle and organize your circle
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInDown"
              data-wow-duration="0.5s"
            >
              <div className="howwork__item transition text-center">
                <div className="thumb transition tershape1 m-auto round50 shadow1">
                  <Image src="/assets/front/img/tab.png" height={50} width={50} layout="responsive" alt="work" />
                </div>
                <div className="content mt-24">
                  <h4 className="title mb-16">
                    <a href="#0">TAB</a>
                  </h4>
                  <p className="fz-14 fw-400 inter title">
                    {/* First, you'll need to search and compare credit cards offered on the credit card marketplace website */}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 custom-120 wow fadeInDown"
              data-wow-duration="0.9s"
            >
              <div className="howwork__item transition text-center">
                <div className="thumb transition tershape2 m-auto round50 shadow1">
                  <Image src="/assets/front/img/shar.png" height={50} width={50} layout="responsive" alt="work" />
                </div>
                <div className="content mt-24">
                  <h4 className="title mb-16">
                    <a href="#0">SHARE</a>
                  </h4>
                  <p className="fz-14 fw-400 inter title">
                    {/* Once you've compared the different options, select a card that meets your needs and click on it for more information */}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInDown"
              data-wow-duration="0.9s"
            >
              <div className="howwork__item transition text-center">
                <div className="thumb transition m-auto round50 shadow1">
                  <Image src="/assets/front/img/hand.png" height={50} width={50} layout="responsive" alt="work" />
                </div>
                <div className="content mt-24">
                  <h4 className="title mb-16">
                    <a href="#0">CONNECT</a>
                  </h4>
                  <p className="fz-14 fw-400 inter title">
                    {/* If you decide to proceed with the card, you'll be directed to the issuer's website or application form to complete */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 pt-60 justify-content-center">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="select__cardbox boxes1 d-flex align-items-center">
                <div className="thumb transition d-flex align-items-center justify-content-center" style={{ backgroundImage: `url("/assets/front/img/work/account.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                  {/* <Image src="/assets/front/img/work/account.png" height={0} width={0} objectFit="cover" layout="responsive" alt="img" /> */}
                </div>
                <h4 className="title">SEAMLESS SHARING</h4>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-duration="1.2s"
            >
              <div className="select__cardbox boxes2 d-flex align-items-center">
                <div className="thumb transition d-flex align-items-center justify-content-center" style={{ backgroundImage: `url("/assets/front/img/work/monitizeation.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                  {/* <Image src="/assets/front/img/work/monitizeation.png" height={0} width={0} objectFit="cover" layout="responsive" alt="img" /> */}
                </div>
                <h4 className="title">MOTIVATE GO GREEN</h4>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-duration="1.5s"
            >
              <div className="select__cardbox boxes3 d-flex align-items-center">
                <div className="thumb transition d-flex align-items-center justify-content-center" style={{ backgroundImage: `url("/assets/front/img/work/search.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                  {/* <Image src="/assets/front/img/work/search.png" height={0} width={0} objectFit="cover" layout="responsive" alt="img" /> */}
                </div>
                <h4 className="title">PAPERLESS PROCESS</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END CARD */}


      <section className="choose__section  pb-120 pt-120">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="choose__thumb ralt">
                <Image
                  src="/assets/front/img/why_we_are_img.png"
                  alt="card"
                  height={25} width={25} layout="responsive"
                  className="choose__mthumb w-100"
                />
                <Image
                  src="/assets/front/img/work/map.png"
                  alt="map-img"
                  height={25} width={25} layout="responsive"
                  className="mapthumb"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="choose__content">
                <div className="section__title mb-40">
                  <h4
                    className="sub ralt base mb-16 wow fadeInUp"
                    data-wow-duration="1.1s"
                  >
                    Why Choose Us
                  </h4>
                  <h2 className="title mb-24 wow fadeInUp" data-wow-duration="1.2s">
                    The Benefits of Our NFC CARDS
                  </h2>
                  <p
                    className="ptext2 fz-16 fw-400 inter wow fadeInUp"
                    data-wow-duration="1.4s"
                  >
                    Tired of reaching peoples with the old method to reach your
                    customers, change it to Modern technology and resolve your
                    problems quicker
                  </p>
                </div>
                <ul className="choose__listwrap">
                  <li
                    className="d-flex mb-24 align-items-center wow fadeInUp"
                    data-wow-duration="1.7s"
                  >
                    <i className="material-symbols-outlined base ifz32 bord round50 d-flex align-items-center justify-content-center">
                      handshake
                    </i>
                    <span className="contentbox">
                      <span className="fz-24 d-block mb-1 fw-600 inter title">
                        Trustworthiness
                      </span>
                      <span className="ptext2 fz-16 fw-400 inter">
                        Your NFC Card has a reputation for being trustworthy
                      </span>
                    </span>
                  </li>
                  <li
                    className="d-flex align-items-center wow fadeInUp"
                    data-wow-duration="1.9s"
                  >
                    <i className="material-symbols-outlined base2 ifz32 bord2 round50 d-flex align-items-center justify-content-center">
                      arming_countdown
                    </i>
                    <span className="contentbox">
                      <span className="fz-24 d-block mb-1 fw-600 inter title">
                        Security &amp; Support
                      </span>
                      <span className="ptext2 fz-16 fw-400 inter">
                        Store your information with safe and secure cards
                      </span>
                    </span>
                  </li>
                </ul>
                {/* <div className="marketplace__user pt-40 d-flex align-items-center flex-wrap wow fadeInDown">
            <div className="d-flex janas__item gap-3 align-items-center">
               <div className="icon">
                  <img src="assets/img/work/janos.png" alt="img">
               </div>
               <div className="content">
                  <span className="fz-18 fw-500 d-block  title mb-1">
                     Jonas Dahito
                  </span>
                  <span className="fz-14 ptext">
                     CEO & Co Founder
                  </span>
               </div>
            </div>
            <a href="listing-card.html" className="cmn--btn">
               <span>
                  Read More
               </span>
            </a>
         </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="top__reted ralt bgadd pb-120 pt-120" >
        <div className="counter__wrap pb-120 px-4 round16 container">
          <div className="row g-3 justify-content-center">
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-8">
              <div className="counter__items odometer-item wow fadeInDown">
                <div className="counter__content justify-content-center d-flex align-items-center">
                  <div className="iconbox d-flex align-items-center justify-content-center round50 boxes1">
                    <i className="material-symbols-outlined base">add_card</i>
                  </div>
                  <div className="content">
                    <div className="d-flex mb-1 align-items-center">
                      <span className="odometer base" data-odometer-final="2.5">
                        {odometerValue1}
                      </span>
                      <span className="added base">k</span>
                    </div>
                    <span className="fz-16 fw-400 ptext2 inter">Total Card</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-8">
              <div className="counter__items odometer-item wow fadeInUp">
                <div className="counter__content justify-content-center d-flex align-items-center">
                  <div className="iconbox d-flex align-items-center justify-content-center round50 boxes2">
                    <i className="material-symbols-outlined icolor1">monitoring</i>
                  </div>
                  <div className="content">
                    <div className="d-flex mb-1 align-items-center">
                      <span className="odometer icolor1" data-odometer-final="3.8" ref={odometerRef}>
                        {odometerValue2}
                      </span>
                      <span className="added icolor1">k</span>
                    </div>
                    <span className="fz-16 fw-400 ptext2 inter">Total Sale</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-8">
              <div className="counter__items odometer-item wow fadeInDown">
                <div className="counter__content justify-content-center d-flex align-items-center">
                  <div className="iconbox d-flex align-items-center justify-content-center round50 boxes3">
                    <i className="material-symbols-outlined icolor2">handshake</i>
                  </div>
                  <div className="content">
                    <div className="d-flex mb-1 align-items-center">
                      <span className="odometer icolor2" data-odometer-final="7.5">
                        {odometerValue3}
                      </span>
                      <span className="added icolor2">k</span>
                    </div>
                    <span className="fz-16 fw-400 ptext2 inter">
                      Clients Satisfied
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-8">
              <div className="counter__items odometer-item wow fadeInUp">
                <div className="counter__content justify-content-center d-flex align-items-center">
                  <div className="iconbox d-flex align-items-center justify-content-center round50 boxes1">
                    <i className="material-symbols-outlined base">
                      social_leaderboard
                    </i>
                  </div>
                  <div className="content">
                    <div className="d-flex mb-1 align-items-center">
                      <span className="odometer base" data-odometer-final={60}>
                        {odometerValue4}
                      </span>
                      <span className="added base">+</span>
                    </div>
                    <span className="fz-16 fw-400 ptext2 inter">Total Cities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial__section pb-120 pt-120">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-8">
              <div className="testimonial__thumb ralt wow fadeInDown">
                <Image
                  src="/assets/front/img/testimonial/testimonial1.png"
                  alt="card"
                  height={25} width={25} layout="responsive"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="testimonial__content mb-20">
                <div className="section__title mb-5">
                  <h4 className="sub ralt base mb-2 wow fadeInDown">Testimonial</h4>
                  <h2 className="title mb-3 wow fadeInUp">
                    Feedback From Our Valued Customers For Marketplace
                  </h2>
                  <p className="ptext2 fz-16 fw-400 inter wow fadeInDown">
                    We understand that choosing a NFC card can be overwhelming,
                    especially with so many options available. That's why we've
                    created a user-friendly platform
                  </p>

                </div>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={'auto'}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  autoplay={{ delay: 500 }} // Enable auto-swiping and set the delay in milliseconds
                  pagination={{ clickable: true }}
                  grabCursor={true}
                  centeredSlides={true}
                >
                  <SwiperSlide> <div className="testimonial__slider owl-theme owl-carousel wow fadeInUp">
                    <div className="testimonial__items ralt bgadd round16">
                      <div className="ratting mb-16 d-flex align-items-center gap-2">
                        <i className="material-symbols-outlined ratting">star</i>
                        <i className="material-symbols-outlined ratting">star</i>
                        <i className="material-symbols-outlined ratting">star</i>
                        <i className="material-symbols-outlined ratting">star</i>
                        <i className="material-symbols-outlined ratting">star</i>
                      </div>
                      <p className="ptext3 inter fz-18 fw-400 mb-30">
                        Thanks to the LOBSMARTCARD website, I was able to
                        find the perfect NFC card to fit my needs. The website was
                        easy to navigate and provided me with all the information
                      </p>
                      <div className="d-flex align-items-center gap-3">
                        <div className="thumb">
                          <Image src="/assets/front/img/testimonial/annetee.png" height={25} width={25} layout="responsive" alt="annette" />
                        </div>
                        <div className="cont">
                          <span className="fz-20 fw-600 inter ptext">
                            Annette Black
                          </span>
                          <span className="fz-16 d-block ptext fw-400 inter">
                            Canada
                          </span>
                        </div>
                      </div>
                    </div>
                  </div></SwiperSlide>
                  <SwiperSlide><div className="testimonial__slider owl-theme owl-carousel wow fadeInUp">
                    <div className="testimonial__items ralt bgadd round16">
                      <div className="ratting mb-16 d-flex align-items-center gap-2">
                        <i className="material-symbols-outlined ratting">star</i>
                        <i className="material-symbols-outlined ratting">star</i>
                        <i className="material-symbols-outlined ratting">star</i>
                        <i className="material-symbols-outlined ratting">star</i>
                        <i className="material-symbols-outlined ratting">star</i>
                      </div>
                      <p className="ptext3 inter fz-18 fw-400 mb-30">
                        Thanks to the credit card marketplace website, I was able to
                        find the perfect credit card to fit my needs. The website was
                        easy to navigate and provided me with all the information
                      </p>
                      <div className="d-flex align-items-center gap-3">
                        <div className="thumb">
                          <Image src="/assets/front/img/testimonial/annetee.png" height={25} width={25} layout="responsive" alt="annette" />
                        </div>
                        <div className="cont">
                          <span className="fz-20 fw-600 inter ptext">
                            Annette Black
                          </span>
                          <span className="fz-16 d-block ptext fw-400 inter">
                            Canada
                          </span>
                        </div>
                      </div>
                    </div>
                  </div></SwiperSlide>
                  <SwiperSlide><div className="testimonial__slider owl-theme owl-carousel wow fadeInUp">
                    <div className="testimonial__items ralt bgadd round16">
                      <div className="ratting mb-16 d-flex align-items-center gap-2">
                        <i className="material-symbols-outlined ratting">star</i>
                        <i className="material-symbols-outlined ratting">star</i>
                        <i className="material-symbols-outlined ratting">star</i>
                        <i className="material-symbols-outlined ratting">star</i>
                        <i className="material-symbols-outlined ratting">star</i>
                      </div>
                      <p className="ptext3 inter fz-18 fw-400 mb-30">
                        Thanks to the credit card marketplace website, I was able to
                        find the perfect credit card to fit my needs. The website was
                        easy to navigate and provided me with all the information
                      </p>
                      <div className="d-flex align-items-center gap-3">
                        <div className="thumb">
                          <Image src="/assets/front/img/testimonial/annetee.png" height={25} width={25} layout="responsive" alt="annette" />
                        </div>
                        <div className="cont">
                          <span className="fz-20 fw-600 inter ptext">
                            Annette Black
                          </span>
                          <span className="fz-16 d-block ptext fw-400 inter">
                            Canada
                          </span>
                        </div>
                      </div>
                    </div>
                  </div></SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {/* <script data-cfasync="false" src="/scripts/5c5dd728/cloudflare-static/email-decode.min.js" defer></script>
      <script src="/js/jquery-3.7.0.min.js"></script>
      <script src="/js/bootstrap.bundle.min.js"></script>
      <script src="/js/viewport.jquery.js"></script>
      <script src="/js/odometer.min.js"></script>
      <script src="/js/jquery.magnific-popup.min.js"></script>
      <script src="/js/countdown.min.js"></script>
      <script src="/js/wow.min.js"></script>
      <script src="/js/owl.carousel.min.js"></script>
      <script src="/js/moment.min.js"></script>
      <script src="/js/daterangepicker.min.js"></script>
      <script src="/js/jquery.nice-select.min.js" defer></script>
      <script src="/js/main.js"></script> */}

    </>

  )
}
