"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePathname } from 'next/navigation'



export default function Header(props) {
  const router = usePathname();
  console.log('router', router);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    // Toggle the isActive state when the button is clicked
    setIsActive(!isActive);
    console.log("hello");
  };

  // Determine the class name based on the isActive state
  const buttonClassName = isActive ? 'active' : '';

  useEffect(() => {
    // Simulate an API call or some async operation
    if (localStorage.getItem("CART_STOREAGE_VALUE") != null && localStorage.getItem("CART_STOREAGE_VALUE") != undefined && localStorage.getItem("CART_STOREAGE_VALUE") != '') {
      let cartid = localStorage.getItem("CART_STOREAGE_VALUE");
      //alert(cartid);
    }
    setTimeout(() => {
      setIsLoading(false);

    }, 2000);
  }, [router]);

  return (
    <>


      {/* < Helmet> */}
      <link rel="shortcut icon" href="/assets/front/img/favilob.png" />
      {/*Bootstarp min css*/}
      {/* <link rel="stylesheet" href="/assets/css/bootstrap.min.css" /> */}
      {/*Bootstarp map css*/}
      {/* <link rel="stylesheet" href="/assets/css/bootstrap.css.map" /> */}

      {/* <link rel="stylesheet" href="/assets/css/odometer.css" /> */}
      {/*Animate css*/}
      {/* <link rel="stylesheet" href="/assets/css/animate.css" /> */}
      {/*Magnifiq Popup css*/}
      {/* <link rel="stylesheet" href="/assets/css/magnific-popup.css" /> */}
      {/*All min css*/}
      <link rel="stylesheet" href="/assets/front/css/all.min.css" />
      {/*Owl Carousel min css*/}
      <link rel="stylesheet" href="/assets/front/css/owl.carousel.min.css" />
      {/*Owl Carousel theme css*/}
      {/* <link rel="stylesheet" href="/assets/css/owl.theme.default.css" /> */}
      {/*Owl Nice select css*/}
      <link rel="stylesheet" href="/assets/front/css/nice-select.css" />
      {/*Glyphter icon css*/}
      <link rel="stylesheet" href="/assets/front/css/google-font.css" />
      {/*Date Ranger css*/}
      <link rel="stylesheet" href="/assets/front/css/daterangepicker.css" />
      {/*main css*/}
      <link rel="stylesheet" href="/assets/front/css/main.css" />

      {/* </Helmet> */}
      {/* <script data-cfasync="false" src="/assets/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
      <script src="/assets/js/bootstrap.bundle.min.js"></script>
    
  <script src="/assets/js/jquery-3.7.0.min.js"></script>
      <script src="/assets/js/viewport.jquery.js"></script>
      <script src="/assets/js/odometer.min.js"></script>
      <script src="/assets/js/jquery.magnific-popup.min.js"></script>
      <script src="/assets/js/countdown.min.js"></script>
      <script src="/assets/js/wow.min.js"></script>
      <script src="/assets/js/owl.carousel.min.js"></script>
      <script src="/assets/js/moment.min.js"></script>
      <script src="/assets/js/daterangepicker.min.js"></script>
      <script src="/assets/js/jquery.nice-select.min.js"></script>
       */}
      {/* <script src="/assets/js/main.js"></script> */}


      {isLoading ?
        <div className="preloader__wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center", zIndex: "9999", backgroundColor: "rgba(255, 255, 255, 0.938)", position: "fixed", width: "100%", height: "100%" }}>
          <div className="preloader__box" style={{ position: "fixed", zIndex: "1" }}>
            <div className="circle">
              <Image src="/assets/front/img/logo/preloader.png" height={100} width={100} style={{ width: "100%" }} layout='responsive' alt="preloader" />
            </div>
            <div className="recharge" style={{ position: "absolute", top: "10px", width: "35px", left: "45%", opacity: "0" }}>
              <Image src="/assets/front/img/favicon.png" height={100} width={100} style={{ width: "100%" }} layout='responsive' alt="rechage" />
            </div>
            <span className="pretext">LOBSMART</span>
          </div>
        </div>
        : null
      }

      <section className={`banner__breadcumn overhid ralt ${props.value}`}>
        <header className="header-section header__sectiontwo animated slideInUp">
          {/*?php } else { ?*/}
          <header className={`header-section bgadd animated ${props.value != '' ? `menu-fixed` : ``} fadeInDown`}>
            {/*?php } ?*/}
            <div className="container">
              <div className="header-wrapper">
                <div className="logo-menu">
                  <a href="." className="logo">
                    <Image src="/assets/front/img/lobs.png" height={1000} width={1000} layout='responsive' alt="logo" />
                  </a>
                  <a href="." className="small__logo d-xl-none">
                    <Image src="/assets/front/img/lobs.png" height={1000} width={1000} alt="logo" />
                  </a>
                </div>


                <ul className={`main-menu ${buttonClassName}`}>
                  <li>
                    <Link href="/" className={router == "/" ? 'active' : ''}>Home</Link>
                  </li>
                  <li>
                    <Link href="/about" className={router == "/about" ? 'active' : ''}>Who we are</Link>
                  </li>
                  <li>
                    <Link href="/features" className={router == "/features" ? 'active' : ''}>Features</Link>
                  </li>
                  <li>
                    <Link href="/faq" className={router == "/faq" ? 'active' : ''}>Have Query</Link>
                  </li>
                  <li>
                    <Link href="/contact" className={router == "/contact" ? 'active' : ''}>Contact</Link>
                  </li>
                </ul>

                <div className="menu__right__components d-flex align-items-center">
                  <div className="menu__components">
                    <div className="tolly__shop">
                      <a href="/cart"><span className="badge badge-light">9</span>
                        <i className="material-symbols-outlined">shopping_cart</i>

                      </a>
                    </div>
                    <a href="/cardDetails" className="cmn--btn">
                      <span>Buy Now</span>
                    </a>
                  </div>
                  <div className={`header-bar d-lg-none  ${buttonClassName}`} onClick={toggleActive}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </header>
        </header>
      </section >
    </>

  )
}
