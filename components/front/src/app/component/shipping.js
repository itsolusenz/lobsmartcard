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
                                    Shipping and Delivery Policy
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
                                        Shipping and Delivery Policy
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


                            Thank you for shopping with Laabamone Business Solutions (OPC) Private Limited on "lobsmarcard.me." We want to provide you with a transparent and reliable shipping and delivery experience. Please take a moment to review our shipping and delivery policy below.

                            <h4 className="sub ralt base mb-16 wow fadeInUp"> 1. Shipping Information</h4>

                            <h6 className='fz-16 base2 fw-40 inter'>  1.1. Shipping Locations:</h6>  We currently offer shipping services to India. If your location is not listed, please contact our customer support for further assistance.

                            <h6 className='fz-16 base2 fw-40 inter'>  1.2. Shipping Times:</h6>  Orders are typically processed and shipped within 3 business days. Shipping times may vary based on your location and the shipping method selected during the checkout process. You will be provided with an estimated delivery date during the order confirmation.

                            <h6 className='fz-16 base2 fw-40 inter'>  1.3. Shipping Charges: </h6> Shipping charges, if applicable, will be calculated based on your location and the weight of your order. You will see the shipping cost during the checkout process.

                            <h4 className="sub ralt base mb-16 wow fadeInUp">  2. Delivery Methods</h4>

                            <h6 className='fz-16 base2 fw-40 inter'>    2.1. Delivery Service Providers:</h6>  We partner with trusted courier and delivery services to ensure that your order reaches you safely and on time.

                            <h6 className='fz-16 base2 fw-40 inter'>    2.2. Delivery Times:</h6>  Delivery times may vary based on your location and the selected shipping method. While we make every effort to ensure timely delivery, we cannot guarantee specific delivery times. You will be provided with an estimated delivery date during the order confirmation.

                            <h4 className="sub ralt base mb-16 wow fadeInUp"> 3. Tracking Your Order</h4>

                            <h6 className='fz-16 base2 fw-40 inter'>    3.1. Order Tracking:</h6>  Once your order is shipped, you will receive a tracking number and a link to track your order. You can use this information to monitor the progress of your shipment.

                            <h4 className="sub ralt base mb-16 wow fadeInUp">4. International Shipping</h4>

                            <h6 className='fz-16 base2 fw-40 inter'>   4.1. International Orders:</h6>  We offer international shipping to select countries. International shipping times and charges may vary significantly. Import duties, taxes, and customs fees may apply, and these are the responsibility of the recipient.

                            <h4 className="sub ralt base mb-16 wow fadeInUp"> 5. Lost or Delayed Shipments</h4>

                            <h6 className='fz-16 base2 fw-40 inter'>   5.1. Lost Shipments:</h6>  In the rare event that your order is lost in transit, please contact our customer support team. We will initiate an investigation with the delivery service provider and work to resolve the issue.

                            <h6 className='fz-16 base2 fw-40 inter'>  5.2. Delayed Shipments:</h6> If your order is significantly delayed beyond the estimated delivery date, please contact our customer support for assistance.

                            <h4 className="sub ralt base mb-16 wow fadeInUp">6. Contact Information</h4>

                            If you have any questions or concerns about these Terms and Conditions or the Website, please contact us at:

                            <br /><br />
                            <b>Laabamone Business Solutions (OPC)  Private Limited<br />
                                285-A/1,Annanagar East Cross Street,<br />
                                Sathamangalam, Madurai - 625020,<br />
                                Tamil Nadu, India.</b>

                            <h4 className="sub ralt base mb-16 wow fadeInUp">7. Changes to this Policy</h4>

                            Laabamone Business Solutions (OPC) Private Limited reserves the right to modify or update this shipping and delivery policy at any time. Changes will become effective upon posting on our website. We recommend reviewing this policy regularly for any updates.

                            Customize this template to reflect your specific shipping and delivery practices, including shipping locations, times, and charges, and ensure it complies with applicable laws and regulations in your jurisdiction.
                        </p>
                    </div>


                </div>
            </section >

            <Footer />
        </>
    )
}
export default Privacy;