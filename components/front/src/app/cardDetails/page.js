"use client"
import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function page() {
   const [navbarFixed, setNavbarFixed] = useState(false);
   const [cardtype, setcardtype] = useState('0');
   const [pvccardtype, setpvccardtype] = useState(false);
   const [metalcardtype, setmetalcardtype] = useState(false);
   const [cartid, setcartid] = useState('');

   useEffect(() => {
      function callCart() {
         if (localStorage.getItem("CART_STOREAGE_VALUE") != null && localStorage.getItem("CART_STOREAGE_VALUE") != undefined && localStorage.getItem("CART_STOREAGE_VALUE") != '') {
            let res = localStorage.getItem("CART_STOREAGE_VALUE");
            setcartid(res);
         }
      }
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
      callCart();
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
   const carddetails = [
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '1',
         name: 'Black',
         tyepid: '1',
         img: '/assets/front/card/new/matt_black.png',
         typename: 'PVC MATT CARD',
         amt: '2000',

      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '2',
         name: 'California Gold',
         tyepid: '1',
         img: '/assets/front/card/new/matt_californiagold.png',
         amt: '2000',
         typename: 'PVC MATT CARD'
      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '3',
         name: 'Gold',
         tyepid: '1',
         img: '/assets/front/card/new/matt_gold.png',
         amt: '2000',
         typename: 'PVC MATT CARD'
      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '4',
         name: 'Olive',
         tyepid: '1',
         img: '/assets/front/card/new/matt_olive.png',
         amt: '2000',
         typename: 'PVC MATT CARD'
      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '5',
         name: 'Silver',
         tyepid: '1',
         img: '/assets/front/card/new/matt_silver.png',
         amt: '2000',
         typename: 'PVC MATT CARD'
      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '6',
         name: 'White',
         tyepid: '1',
         img: '/assets/front/card/new/matt_white.png',
         amt: '2000',
         typename: 'PVC MATT CARD'
      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '7',
         name: 'Blue',
         tyepid: '2',
         img: '/assets/front/card/new/glassy_blue.png',
         amt: '2000',
         typename: 'PVC GLASSY CARD'

      },
      {
         headid: '1',//PVC
         headname: 'PVC Card',
         id: '8',
         name: 'Braze',
         tyepid: '2',
         img: '/assets/front/card/new/glassy_braze.png',
         amt: '2000',
         typename: 'PVC GLASSY CARD'

      },
      {
         headid: '1',//Metal
         headname: 'PVC Card',//Metal
         id: '9',
         name: 'Gold',
         tyepid: '2',
         img: '/assets/front/card/new/glassy_gold.png',
         amt: '2000',
         typename: 'PVC GLASSY CARD'

      },
      {
         headid: '1',//Metal
         headname: 'Glassy Card',//Metal
         id: '10',
         name: 'Silver',
         tyepid: '2',
         img: '/assets/front/card/new/glassy_silver.png',
         amt: '2000',
         typename: 'METAL GLASSY CARD'

      },

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
               <div>

                  <h4> Last updated: September 04, 2023</h4>

                  This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

                  We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.


                  <h4>Interpretation and Definitions </h4>
                  <h4>Interpretation </h4>
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.


                  <h4>Definitions </h4>
                  For the purposes of this Privacy Policy:

                  Account means a unique account created for You to access our Service or parts of our Service.

                  Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.

                  Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Laabam One Business Solutions (OPC) Private Limited, 285 A, Anna Nagar East Cross Street, Sathamangalam, Madurai 625020, Tamilnadu, India.

                  Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.

                  Country refers to: Tamil Nadu, India

                  Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.

                  Personal Data is any information that relates to an identified or identifiable individual.

                  Service refers to the Website.

                  Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.

                  Third-party Social Media Service refers to any website or any social network website through which a User can log in or create an account to use the Service.

                  Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).

                  Website refers to LobSmartCard, accessible from<b>https://lobsmartcard.me/</b>

                  You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.


                  <h4>Collecting and Using Your Personal Data </h4>
                  <h6>Types of Data Collected </h6>
                  <h7>Personal Data </h7>
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:

                  Email address

                  First name and last name

                  Phone number

                  Address, State, Province, ZIP/Postal code, City

                  Usage Data


                  Usage Data
                  Usage Data is collected automatically when using the Service.

                  Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

                  When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.

                  We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.

                  Information from Third-Party Social Media Services
                  The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:

                  Google
                  Facebook
                  Instagram
                  Twitter
                  LinkedIn
                  If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.

                  You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.


                  <h4>Tracking Technologies and Cookies </h4>
                  We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:

                  Cookies or Browser Cookies. A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
                  Web Beacons. Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                  Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the Free Privacy Policy website article.

                  We use both Session and Persistent Cookies for the purposes set out below:

                  Necessary / Essential Cookies

                  Type: Session Cookies

                  Administered by: Us

                  Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.

                  Cookies Policy / Notice Acceptance Cookies

                  Type: Persistent Cookies

                  Administered by: Us

                  Purpose: These Cookies identify if users have accepted the use of cookies on the Website.

                  Functionality Cookies

                  Type: Persistent Cookies

                  Administered by: Us

                  Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.

                  For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.


                  <h4>Use of Your Personal Data </h4>
                  The Company may use Personal Data for the following purposes:

                  To provide and maintain our Service, including to monitor the usage of our Service.

                  To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.

                  For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.

                  To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.

                  To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.

                  To manage Your requests: To attend and manage Your requests to Us.

                  For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.

                  For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.

                  We may share Your personal information in the following situations:

                  With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
                  For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
                  With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                  With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.
                  With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.
                  With Your consent: We may disclose Your personal information for any other purpose with Your consent.

                  <h4>Retention of Your Personal Data </h4>
                  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.

                  The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.


                  <h4>Transfer of Your Personal Data </h4>
                  Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.

                  Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.

                  The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.


                  <h4>Delete Your Personal Data </h4>
                  You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.

                  Our Service may give You the ability to delete certain information about You from within the Service.

                  You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.

                  Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.


                  <h4>Disclosure of Your Personal Data</h4>
                  <h6>Business Transactions </h6>
                  If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.


                  <h6>Law enforcement </h6>
                  Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).


                  <h6>Other legal requirements</h6>
                  The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:

                  Comply with a legal obligation
                  Protect and defend the rights or property of the Company
                  Prevent or investigate possible wrongdoing in connection with the Service
                  Protect the personal safety of Users of the Service or the public
                  Protect against legal liability

                  <h6>Security of Your Personal Data </h6>
                  The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.


                  <h6>Children's Privacy </h6>
                  Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.

                  If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.


                  <h4>Links to Other Websites </h4>
                  Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.

                  We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.


                  <h4>Changes to this Privacy Policy </h4>
                  We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.

                  We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.

                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.


                  <h4>Contact Us</h4>
                  If you have any questions about this Privacy Policy, You can contact us:


                  By email: info@laabamone.com
               </div>

            </div>
         </section >
         <Footer />
      </>
   )
}
