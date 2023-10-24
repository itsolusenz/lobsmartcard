"use client"
import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function faq() {
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
  $page = '4';
  $selid = '4';
  include 'require/header.php'; ?*/}
      <div className="breadcumnd__wrapper" ref={sectionRef}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-6 col-xl-6 col-lg-9 col-md-8 col-sm-8">
              <div className="breadcumnd__content">
                <span className="d4 mb-24 base2">FAQs</span>
                <ul className="breadcun__list flex-wrap gap-1 d-flex align-items-center">
                  <li>
                    <a href="index.html" className="fz-16 fw-400 inter ">
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
                  <li className="fz-16 base2 fw-40 inter">FAQs</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4">
              <div className="featured__card">
                <Image src="/assets/front/img/faq/faq.png" className="w-100" alt="img" layout='responsive' width={300} height={300} />
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
      {/* faqs Section Here */}
      <section className="faq__section pt-120 pb-120">
        <div className="container">
          <div className="row g-3 justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div className="accordion__wrap">
                <div className="accordion" id="accordionExample">
                  {/*Accordion items 1*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="0.7s"
                  >
                    <div className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        So what exactly is Lobsmart?
                      </button>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Lobsmart is really not something complex. It's simple,
                            it's just your visiting card but better. Imagine you are
                            at an event and run out of visiting cards, imagine you
                            give a client your visiting card and they just throw it
                            out, those things do not happen when using a Lobsmart.
                            It's one card for your life*, you just take your
                            Lobsmart and tap on a smartphone and that's it. All your
                            information gets transferred to that person's mobile and
                            stays there safe. Lobsmart does this through the NFC
                            chip embedded in the card.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 2*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="0.9s"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        So what is NFC?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          NFC is something called Near Field Communication. It's a
                          short range wireless technology that allows for
                          information sharing. It's something like your wifi but
                          with a very short wireless range. It enables the exchange
                          of data and information between two compatible devices
                          such as smartphones, tablets and NFC enabled cards with a
                          simple tap. It is easy to use, as it requires minimal
                          setup or configuration. It provides a fast and convenient
                          way to transfer data
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 3*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1s"
                  >
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Is Lobsmart Safe?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes. Lobsmart is the safest NFC Business card in the
                          market. Your card details are completely encrypted with us
                          and will be forever safe.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 4*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingThree4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree4"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Do you have to pay anything after the purchase of a
                        Lobsmart?
                      </button>
                    </h2>
                    <div
                      id="collapseThree4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          No, you do not have to. Lobsmart is a one time investment.
                          You just pay for the card you get and that's it, you do
                          not have to pay a rupee more after that.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 5*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingThree4s1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree4s1"
                        aria-expanded="false"
                      >
                        What to do if you change your mobile number or any other
                        details, do you have to buy a new card then?
                      </button>
                    </h2>
                    <div
                      id="collapseThree4s1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4s1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          See that is the difference between normal paper visiting
                          cards and our cutting edge Lobsmart, you do not ever need
                          to reprint. Incase in future you want to change your
                          details, you can just login to your portal and change any
                          information you want, anytime, anywhere, that simple. You
                          save money, you save time and most importantly you save
                          all that wasted paper
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 6*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="0.7s"
                  >
                    <div className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What to do if my client's phone does not have an NFC option?
                      </button>
                      <div
                        id="one"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Do not worry, we have thought this through. We have a QR
                            code printed on every Lobsmart that is unique for every
                            user. Your clients can just scan the QR code and get
                            your information saved. If they are not able to scan
                            then you can just directly share the link to your
                            profile. With Lobsmart you can choose the option that
                            best suits you
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 7*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="0.9s"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#two"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What information can I share with Lobsmart?
                      </button>
                    </h2>
                    <div
                      id="two"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Much much more than what you can share with a Visiting
                          card. You can share your contact details obviously,
                          websites, social media handles, keywords, photos and much
                          much more.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 8*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1s"
                  >
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#three"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Why should you get a Lobsmart?
                      </button>
                    </h2>
                    <div
                      id="three"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          You should get a Lobsmart because it works so much better
                          than your normal paper visiting cards. It's better,
                          smarter and so much better looking. You can also customize
                          the design of the Lobsmart to your liking, every card is
                          customizable. Let’s up your networking game with Lobsmart
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 9*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingThree4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#four"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Can I share my profile as a link on Whatsapp?
                      </button>
                    </h2>
                    <div
                      id="four"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, you can easily share your Lobsmart profile as a link
                          on Whatsapp. Simply copy the link from your profile and
                          send it across to the people you want to connect with.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 10*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingThree4s1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#five"
                        aria-expanded="false"
                      >
                        How to update my profile?
                      </button>
                    </h2>
                    <div
                      id="five"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4s1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          To update your profile, you can log in to your Lobsmart
                          portal using your login credentials. From there, you can
                          easily edit and update any information you want.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 11*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="0.7s"
                  >
                    <div className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#six"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What are the features and benefits of Lobsmart?
                      </button>
                      <div
                        id="six"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Lobsmart offers several features and benefits,
                            including: <br />
                            Easy and convenient transfer of information through NFC
                            technology or QR code scanning. <br />
                            Share more than just your contact information, include
                            your social media handles, websites and much more.{" "}
                            <br />
                            Secure encryption of your card details, ensuring the
                            safety of your information. <br />
                            No additional fees or payments required after the
                            initial purchase <br />
                            Environmentally friendly alternative to traditional
                            paper business cards <br />
                            Ability to update and change information on your card
                            without the need for reprints. <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 12*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="0.9s"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#seven"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Is there any referral bonus I get?
                      </button>
                    </h2>
                    <div
                      id="seven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, you get a 10% discount on your card for a successful
                          referral you make.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 13*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1s"
                  >
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#eight"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What’s the delivery time for Lobsmart?
                      </button>
                    </h2>
                    <div
                      id="eight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          The delivery time for Lobsmart may vary depending on your
                          location. But typically you will get your card within a
                          week from purchase.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 14*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingThree4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#nine"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Who is Lobsmart for?
                      </button>
                    </h2>
                    <div
                      id="nine"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lobsmart is suitable for anyone from professionals,
                          entrepreneursm business owners, or just anyone who wants a
                          more advanced and efficient way to share their contact
                          information and make a lasting impression.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 15*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingThree4s1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#ten"
                        aria-expanded="false"
                      >
                        Is the UI of your card Customizable?
                      </button>
                    </h2>
                    <div
                      id="ten"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4s1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, the UI on your card can be customized. Once you have
                          purchased your card, you can contact us and our design
                          team will be happy to customize your UI to your liking.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingThree4s1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#eleven"
                        aria-expanded="false"
                      >
                        How easy is it to set up Lobsmart?
                      </button>
                    </h2>
                    <div
                      id="eleven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4s1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Setting up your Lobsmart is very easy. Once you get your
                          card, you can just tap your card on your smartphone and
                          set up your portfolio. We’ve also made a video that guides
                          you through the setup process which you can see by tapping
                          here.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="accordion__wrap">
                <div className="accordion" id="accordionExamplea">
                  {/*Accordion items 16*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="0.7s"
                  >
                    <div className="accordion-header" id="headingTwoa">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#twelve"
                        aria-expanded="false"
                        aria-controls="collapseTwoa"
                      >
                        What can I print on Lobsmart?
                      </button>
                      <div
                        id="twelve"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwoa"
                        data-bs-parent="#accordionExamplea"
                      >
                        <div className="accordion-body">
                          <p>
                            You can print details that include your name, job title,
                            company name, contact details such as phone number and
                            email address, typically anything that you can print on
                            a paper visiting card.. But when you tap a Lobsmart, you
                            can share further information such as your social media
                            handles, websites, location and many more
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 17*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="0.9s"
                  >
                    <h2 className="accordion-header" id="headingOnea">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#thirteen"
                        aria-expanded="true"
                        aria-controls="collapseOnea"
                      >
                        Does Lobsmart work on both Android and Apple?
                      </button>
                    </h2>
                    <div
                      id="thirteen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOnea"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, Lobsmart works on both Android and Apple. It works on
                          any phone that has NFC enabled in it.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 18*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1s"
                  >
                    <h2 className="accordion-header" id="headingThreea">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fourteen"
                        aria-expanded="false"
                        aria-controls="collapseThreea"
                      >
                        How to tap using a Lobsmart?
                      </button>
                    </h2>
                    <div
                      id="fourteen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThreea"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body">
                        <p>
                          To tap your Lobsmart, you simply need to hold your
                          Lobsmart card against the NFC-enabled smartphone of the
                          person you want to share your information with. Make sure
                          the NFC chip on the card comes into contact with the NFC
                          sensor area on their device. This will initiate the date
                          transfer process, and your information will be transferred
                          instantly to their smartphone.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 19*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingThree4a">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fifteen"
                        aria-expanded="false"
                        aria-controls="collapseThreea"
                      >
                        How can Lobsmart make me stand out and make an impression?
                      </button>
                    </h2>
                    <div
                      id="fifteen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4a"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body">
                        <p>
                          Lobsmart can make you stand out and leave a lasting
                          impression because they offer a unique and technologically
                          advanced way of sharing your contact information. The
                          convenience and novelty of tapping a card to instantly
                          transfer your details to someone’s phone can make you
                          memorable in networking situations
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 20*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingThree4a1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sixteen"
                        aria-expanded="false"
                      >
                        How secure is the information stored on Lobsmart?
                      </button>
                    </h2>
                    <div
                      id="sixteen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4a1"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body">
                        <p>
                          Lobsmart is the safest NFC business card in the market.
                          Lobsmart ensures that your card details are encrypted,
                          protecting your information from unauthorized access
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 21*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="0.7s"
                  >
                    <div className="accordion-header" id="headingTwoa">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#seventeen"
                        aria-expanded="false"
                        aria-controls="collapseTwoa"
                      >
                        What are the advantages of using Lobsmart compared to
                        traditional paper cards?
                      </button>
                      <div
                        id="seventeen"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwoa"
                        data-bs-parent="#accordionExamplea"
                      >
                        <div className="accordion-body">
                          <p>
                            Easy and instant transfer of information with a tap or
                            scan. <br />
                            - One card is all you need to carry for endless
                            networking. <br />
                            - Elimination of the need for printing and reordering
                            paper cards. <br />
                            - Customizable designs and options for personalization.{" "}
                            <br />
                            - Integration with digital platforms and the ability to
                            include additional information <br />- Enhanced
                            professionalism and a modern image
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 22*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="0.9s"
                  >
                    <h2 className="accordion-header" id="headingOnea">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#eighteen"
                        aria-expanded="true"
                        aria-controls="collapseOnea"
                      >
                        Do my clients need an app for me to tap a Lobsmart?
                      </button>
                    </h2>
                    <div
                      id="eighteen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOnea"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body">
                        <p>
                          No, you clients do not need any app in their phones for
                          you to use Lobsmart.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 23*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1s"
                  >
                    <h2 className="accordion-header" id="headingThreea">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#nineteen"
                        aria-expanded="false"
                        aria-controls="collapseThreea"
                      >
                        What if my Lobsmart stopped working?
                      </button>
                    </h2>
                    <div
                      id="nineteen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThreea"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body">
                        <p>
                          The possibility of this happening is almost zero. But if
                          you do find yourself in a situation where your Lobsmart
                          stops working, you can contact us and we can troubleshoot
                          any issues.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 24*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingThree4a">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#twenty"
                        aria-expanded="false"
                        aria-controls="collapseThreea"
                      >
                        If my Lobsmart gets stolen or lost, will the information on
                        my card be safe?
                      </button>
                    </h2>
                    <div
                      id="twenty"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4a"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body">
                        <p>
                          If your Lobsmart card is lost or stolen, you can
                          immediately contact us to block the card. You can also
                          block the card instantly by logging into your account and
                          blocking the card.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 25*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingThree4a1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#twentyone"
                        aria-expanded="false"
                      >
                        Do I get assistance with designing my Lobsmart?
                      </button>
                    </h2>
                    <div
                      id="twentyone"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4a1"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, once you have placed the order with us, our design
                          team will work with you closely to design a card that best
                          fits your imagination.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 26*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="0.7s"
                  >
                    <div className="accordion-header" id="headingTwoa">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#twentytwo"
                        aria-expanded="false"
                        aria-controls="collapseTwoa"
                      >
                        Do I need to download an app to set up my Lobsmart?
                      </button>
                      <div
                        id="twentytwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwoa"
                        data-bs-parent="#accordionExamplea"
                      >
                        <div className="accordion-body">
                          <p>
                            No, you do not need an app. Once you get a Lobsmart you
                            can just tap it on your mobile which will open your
                            portfolio in a browser of your choice. From here you can
                            set up your profile and make your Lobsmart account.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 27*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="0.9s"
                  >
                    <h2 className="accordion-header" id="headingOnea">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#twentythree"
                        aria-expanded="true"
                        aria-controls="collapseOnea"
                      >
                        Is Lobsmart waterproof?
                      </button>
                    </h2>
                    <div
                      id="twentythree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOnea"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body">
                        <p>
                          They are pretty much sage for low levels and short periods
                          of water exposure such as rain for example
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 28*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1s"
                  >
                    <h2 className="accordion-header" id="headingThreea">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#twentyfour"
                        aria-expanded="false"
                        aria-controls="collapseThreea"
                      >
                        Is Lobsmart environmentally friendly ?
                      </button>
                    </h2>
                    <div
                      id="twentyfour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThreea"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body">
                        <p>
                          One of the reasons for us to start Lobsmart was to find an
                          eco-friendly alternative to paper visiting cards. So the
                          answer is Yes, Lobsmart is eco-friendly compared to
                          traditional paper business cards. By eliminating the need
                          for printing and reordering paper cards, Lobsmart helps
                          reduce paper waste.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 29*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingThree4a">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#twentyfive"
                        aria-expanded="false"
                        aria-controls="collapseThreea"
                      >
                        How can Lobsmart enhance my professional image and
                        credibility?
                      </button>
                    </h2>
                    <div
                      id="twentyfive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4a"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body">
                        <p>
                          Using Lobsmart can enhance your professional image and
                          credibility by showcasing your tech-savviness, forward
                          thinking approach and attention to detail. It demonstrates
                          that you are up to date with modern technology trends and
                          technology
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items 20*/}
                  <div
                    className="accordion-item wow fadeInDown"
                    data-wow-duration="1.4s"
                  >
                    <h2 className="accordion-header" id="headingThree4a1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#twentysix"
                        aria-expanded="false"
                      >
                        Can Lobsmart help me with Lead Management?
                      </button>
                    </h2>
                    <div
                      id="twentysix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4a1"
                      data-bs-parent="#accordionExamplea"
                    >
                      <div className="accordion-body">
                        <p>
                          With our innovative approach to networking you can get the
                          information of all your prospective clients in one place
                          making it easy for you.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*Accordion items*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* faqs Section End */}
      {/*?php include 'require/footer.php'; ?*/}
    </>

  )
}
