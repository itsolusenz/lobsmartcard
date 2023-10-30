"use client"
import React from 'react'
import Footer from '../component/footer'
import Header from '../component/header'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function contact() {
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
$page = '5';
$selid = '5';
include 'require/header.php';

?*/}
      <div className="breadcumnd__wrapper" ref={sectionRef}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
              <div className="breadcumnd__content">
                <span className="d4 mb-24 base2">Contact Us</span>
                <ul className="breadcun__list flex-wrap gap-1 d-flex align-items-center">
                  <li>
                    <a href="/" className="fz-16 fw-400 inter ">
                      Home
                    </a>
                  </li>
                  {/* <li>
               <i className="material-symbols-outlined text-white mt-2">
                  chevron_right
               </i>
            </li>
            <li>
               <a href="#0" className="fz-16 fw-400 inter text-white">
                  Pages
               </a>
            </li> */}
                  <li>
                    <i className="material-symbols-outlined base2 mt-2">
                      chevron_right
                    </i>
                  </li>
                  <li className="fz-16 base2 fw-40 inter">Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-5">
              <div className="featured__card">
                <Image
                  src="/assets/front/img/banner/contactus.png"
                  className="w-100"
                  alt="img"
                  layout='responsive'
                  width={250} height={250}
                />
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
        {/* <div className="element5">
          <img src="/assets/front/img/banner/chok4.png" alt="element" />
        </div> */}
      </div>
      {/*element*/}

      {/*element*/}
      {/* Hero Section End */}
      {/* contact section Here */}
      <section className="contact__section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="search__content">
                <div className="section__title text-center mb-60">
                  <h2 className="title mb-24 wow fadeInDown">
                    Get in touch with us.
                  </h2>
                  <p className="ptext2 fz-16 fw-400 inter wow fadeInUp">
                    Fill up the form and our team will get back to you within 24
                    hours
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact__wrapper round16 bgwhite">
                <form action="#0" className="write__review">
                  <div className="row g-4 justify-content-center ">
                    <div className="col-lg-6">
                      <div className="frm__grp">
                        <label
                          htmlFor="name"
                          className="fz-18 fw-500 inter title mb-16"
                        >
                          Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          required="required"
                          id="name"
                          placeholder="Enter Your Name..."
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="frm__grp">
                        <label
                          htmlFor="enamee"
                          className="fz-18 fw-500 inter title mb-16"
                        >
                          Email
                        </label>
                        <input
                          name="email"
                          type="text"
                          id="enamee"
                          placeholder="Enter Your Email..."
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="frm__grp">
                        <label
                          htmlFor="numbers"
                          className="fz-18 fw-500 inter title mb-16"
                        >
                          Phone
                        </label>
                        <input
                          name="phone"
                          type="text"
                          required="required"
                          id="numbers"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">

                      <div className="frm__grp">

                        <label htmlFor="country" className="fz-18 fw-500 inter title mb-16">Country</label>

                        <div className="input-group mb-3 rounded-pill">

                          <select name="country" id="country" className="form-select country-style" aria-label="Country">

                            <option value="IN">India</option>

                            {/*} <option value="PK">PK</option>

      <option value="BN">BN</option>*/}

                          </select>

                        </div>

                      </div>

                    </div>

                    <div className="col-lg-12">
                      <div className="frm__grp">
                        <label className="fz-18 fw-500 inter title mb-16">
                          Message
                        </label>
                        <textarea
                          name="comment"
                          cols={30}
                          rows={5}
                          placeholder="Enter Your Message..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="frm__grp">
                        <button type="submit" className="cmn--btn">
                          <span>Sent Message</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact section End */}
      {/* contact section Here */}
      <section className="help__email pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section__title text-center mb-60">
                <h2 className="title mb-24 wow fadeInDown">Need more help?</h2>
                <p className="ptext2 fz-16 fw-400 inter wow fadeInUp">
                  Queries, complaints and feedback. We will be happy to serve you
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="help__emailitem text-center round16">
                <div className="icon round50 bgwhite d-flex align-items-center justify-content-center">
                  <i className="material-symbols-outlined">phone_in_talk</i>
                </div>
                <h5 className="fw-600 title mb-16">Call Now</h5>
                <span className="fz-16 d-block inter title">(907) 555-0101</span>
                <span className="fz-16 d-block inter title">(252) 555-0126</span>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="help__emailitem text-center round16">
                <div className="icon round50 bgwhite d-flex align-items-center justify-content-center">
                  <i className="material-symbols-outlined">mark_as_unread</i>
                </div>
                <h5 className="fw-600 title mb-16">Email Address</h5>
                <span className="fz-16 d-block inter title">
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="fd94939b92bd98859c908d9198d39e9290"
                  >
                    [email&nbsp;protected]
                  </a>
                </span>
                <span className="fz-16 d-block inter title">
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="b3daddd5dcf3d6cbd2dec3dfd69dd0dcde"
                  >
                    [email&nbsp;protected]
                  </a>
                </span>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="help__emailitem text-center round16">
                <div className="icon round50 bgwhite d-flex align-items-center justify-content-center">
                  <i className="material-symbols-outlined">distance</i>
                </div>
                <h5 className="fw-600 title mb-16">Location</h5>
                <span className="fz-16 d-block inter title">
                  Royal Ln. Mesa, New Jersey 45463
                </span>
                <span className="fz-16 d-block inter title">
                  Thornridge Cir. Shiloh, Hawaii 81063
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact section End */}
      {/*?php include 'require/footer.php'; ?*/}
      <Footer />
    </>

  )
}
