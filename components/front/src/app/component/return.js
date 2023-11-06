"use client"
import React from 'react'
import Header from './header'
import Footer from './footer'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

function Privacy() {
    const [navbarFixed, setNavbarFixed] = useState(false);

    //  const handleLinkClick = (event) => {
    //   // Prevent the default behavior of the anchor tag
    //   event.preventDefault();

    //   // Add your custom logic or navigation code here
    //   // For example, you can use React Router or perform any other action
    // };
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
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcumnd__content">
                                <span className="d4 mb-24 base2">
                                    Return and Refund Policy
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
                                    Return and Refund Policy
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4">
                            {/*}  <div className="featured__card">
                                <Image src="/assets/front/card/new/head.png" className="w-100" alt="img" layout='responsive' width={400} height={400} />
                    </div>*/}
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
                    <div style={{ color: 'black' }}>
                        <p className='ptext2 fz-16 fw-400 inter wow fadeInDown' style={{ TextAlign: "justify" }}>

                            <span style={{ display: 'flex' }}><h6 className="sub ralt base mb-16 wow fadeInUp">  Effective Date:</h6>&nbsp; <b>01-Apr-2023</b></span>
                            <span style={{ display: 'flex' }}><h6 className="sub ralt base mb-16 wow fadeInUp"> Last updated:</h6>&nbsp; <b>01-Apr-2023</b></span>


                            Thank you for shopping with Laabamone Business Solutions (OPC) Private Limited on "lobsmarcard.me." We value your satisfaction and aim to provide you with the best possible customer experience. If you are not completely satisfied with your purchase, please review our return and refund policy below.

                            <h4 className="sub ralt base mb-16 wow fadeInUp"> 1. Returns</h4>

                            <h6 className='fz-16 base2 fw-40 inter'>1.1. Eligibility for Returns:</h6> You may be eligible for a return if you meet the following conditions:

                            You received a damaged or defective product.
                            You received the wrong item.
                            The product does not meet the description or specifications as stated on our website.
                            <h6 className='fz-16 base2 fw-40 inter'> 1.2. Time Limit for Returns:</h6> To initiate a return, please contact our customer support within 3 days from the date of delivery. Returns requested after this period may not be accepted.

                            <h6 className='fz-16 base2 fw-40 inter'> 1.3. Return Process:</h6> To request a return, please contact our customer support team at support@laabamone.com. Provide your order number, a detailed description of the issue, and any relevant supporting documentation, such as photos. We will guide you through the return process.

                            <h6 className='fz-16 base2 fw-40 inter'> 1.4. Return Conditions:</h6> When returning a product, please ensure that:

                            The product is in its original packaging.
                            All original accessories and tags are included.
                            The product is unused and in the same condition as when you received it.
                            <h4 className="sub ralt base mb-16 wow fadeInUp">2. Refunds</h4>

                            <h6 className='fz-16 base2 fw-40 inter'>  2.1. Refund Process:</h6> Upon approval of your return request, we will process your refund. Refunds will be issued to the original payment method used for the purchase. Please allow 3 business days for the refund to be reflected in your account.

                            <h6 className='fz-16 base2 fw-40 inter'> 2.2. Non-Refundable Items: </h6>Certain items, such as digital downloads or personalized products, may not be eligible for refunds. Any such exclusions will be clearly stated on the product page.

                            <h4 className="sub ralt base mb-16 wow fadeInUp">3. Cancellations</h4>

                            <h6 className='fz-16 base2 fw-40 inter'> 3.1. Cancellation Policy:</h6> If you wish to cancel an order, please contact us as soon as possible. We will make every effort to accommodate your request, but if the order has already been processed or shipped, it may not be possible to cancel.
                            <h4 className="sub ralt base mb-16 wow fadeInUp">4. Contact Information</h4>

                            If you have any questions or concerns about these Terms and Conditions or the Website, please contact us at:

                            <br /><br />
                            <b>Laabamone Business Solutions (OPC)  Private Limited<br />
                                285-A/1,Annanagar East Cross Street,<br />
                                Sathamangalam, Madurai - 625020,<br />
                                Tamil Nadu, India.</b>

                            <h4 className="sub ralt base mb-16 wow fadeInUp">  5. Changes to this Policy</h4>

                            Laabamone Business Solutions (OPC) Private Limited reserves the right to modify or update this return and refund policy at any time. Changes will become effective upon posting on our website. We recommend reviewing this policy regularly for any updates.

                        </p>
                    </div>


                </div>
            </section >

            <Footer />
        </>
    )
}
export default Privacy;