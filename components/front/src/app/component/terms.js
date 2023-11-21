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
            // console.log("Scroll event triggered"); // Check if the scroll event is being triggered
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
                                    Terms And Conditions
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
                                        Terms And Conditions
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


                            <h4 className="sub ralt base mb-16 wow fadeInUp">1. Acceptance of Terms</h4>

                            By accessing and using the website "lobsmarcard.me" (the "Website"), you agree to be bound by these Terms and Conditions and any additional terms and policies referenced herein. If you do not agree with these terms, please do not use the Website.

                            <h4 className="sub ralt base mb-16 wow fadeInUp">2. Changes to Terms</h4>

                            Laabamone Business Solutions (OPC)  Private Limited reserves the right to modify, update, or change these Terms and Conditions at any time without prior notice. Changes will become effective upon posting on the Website. You are responsible for reviewing the updated terms regularly.

                            <h4 className="sub ralt base mb-16 wow fadeInUp">3. Intellectual Property</h4>

                            The content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of Laabamone Business Solutions (OPC)  Private Limited and protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content from the Website without our express written permission.

                            <h4 className="sub ralt base mb-16 wow fadeInUp">4. Use of the Website</h4>

                            You agree to use the Website only for lawful purposes and in a manner consistent with all applicable laws and regulations. You are prohibited from engaging in any harmful, disruptive, or illegal activities on the Website.

                            <h4 className="sub ralt base mb-16 wow fadeInUp">5. Privacy Policy</h4>

                            Our Privacy Policy governs the collection, use, and sharing of your personal information when you use the Website. You can review our Privacy Policy <a href="https://www.lobsmartcard.me/privacy-policy" target="_blank"><span style={{ color: '#e88c1e' }}>here</span></a> .

                            <h4 className="sub ralt base mb-16 wow fadeInUp">6. Limitation of Liability</h4>

                            Laabamone Business Solutions (OPC)  Private Limited disclaims any liability for any direct, indirect, incidental, consequential, or special damages arising out of or in any way related to your use of the Website, even if advised of the possibility of such damages.

                            <h4 className="sub ralt base mb-16 wow fadeInUp">7. Indemnification</h4>

                            You agree to indemnify and hold Laabamone Business Solutions (OPC)  Private Limited, its officers, directors, employees, and agents harmless from any claims, losses, or damages, including reasonable attorney's fees, arising out of your use of the Website or any violation of these Terms and Conditions.

                            <h4 className="sub ralt base mb-16 wow fadeInUp">8. Links to Third-Party Websites</h4>

                            The Website may contain links to third-party websites for your convenience. Laabamone Business Solutions (OPC)  Private Limited is not responsible for the content, accuracy, or practices of these third-party websites. Your use of third-party websites is at your own risk.

                            <h4 className="sub ralt base mb-16 wow fadeInUp">9. Termination</h4>

                            Laabamone Business Solutions (OPC)  Private Limited reserves the right to terminate, suspend, or restrict your access to the Website at any time and for any reason, without prior notice.

                            <h4 className="sub ralt base mb-16 wow fadeInUp">10. Governing Law</h4>

                            These Terms and Conditions are governed by and construed in accordance with the laws of India, Tamil Nadu, without regard to its conflict of laws principles.

                            <h4 className="sub ralt base mb-16 wow fadeInUp">11. Contact Information</h4>

                            If you have any questions or concerns about these Terms and Conditions or the Website, please contact us at:

                            <br /><br />
                            <b>Laabamone Business Solutions (OPC)  Private Limited<br />
                                285-A/1,Annanagar East Cross Street,<br />
                                Sathamangalam, Madurai - 625020,<br />
                                Tamil Nadu, India.</b>


                        </p>
                    </div>


                </div>
            </section >

            <Footer />
        </>
    )
}
export default Privacy;