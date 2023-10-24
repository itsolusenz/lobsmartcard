"use client"
import React from 'react'
import Footer from '../component/footer'
import Header from '../component/header'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
export default function features() {
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
  $page = '3';
  $selid = '3';
  include 'require/header.php'; ?*/}
      <div className="breadcumnd__wrapper" ref={sectionRef}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
              <div className="breadcumnd__content">
                <span className="d4 mb-24 base2">Features</span>
                <ul className="breadcun__list flex-wrap gap-1 d-flex align-items-center">
                  <li>
                    <a href="/" className="fz-16 fw-400 inter">
                      Home
                    </a>
                  </li>
                  <li>
                    <i className="material-symbols-outlined text-white mt-2">
                      chevron_right
                    </i>
                  </li>
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
                  <li className="fz-16 base2 fw-40 inter">Features</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5">
              <div className="featured__card">
                <Image
                  src="/assets/front/img/about/abouts.png"
                  className="w-100"
                  alt="img"
                  layout='responsive'
                  width={300} height={300}
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

      <section className="additional__info bgwhite round16" style={{ justifyContent: "center", display: "flex" }}>
        <div className="title addi__head round16">
          <div className="">
            <table className="table table-borderless table-striped">
              <thead >
                <tr>
                  <th />
                  <th>PAPER BUSINESS CARD</th>
                  <th>OTHER DIGITAL BUSINESS CARD</th>
                  <th>JUST LOBS</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                <tr>
                  <th>Display Contact Info</th>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <th>Instantly Update</th>
                  <td>❌</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <th>Video Embeds</th>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <th>Custom icon, title, link</th>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <th>Advanced Analytics</th>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <th>Mobile App on ios/Android</th>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <th>Business &amp; Social Media</th>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <th>LOBS Personal(Share one link directly)</th>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <th>Lead Generation</th>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <th>Email Signature</th>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <th>Schedule Meetings</th>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <th>Multiple Theme</th>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✔</td>
                </tr>
              </tbody>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </section>


      {/* <div className="additional__info mt-40 bgwhite round16">
         <h5 className="title addi__head round16">
            Additional Information
         </h5>
         <div className="table__here">
            <table className="table">
               <tbody>
                 <tr>
                   <td className="fz-16 fw-600 inter ttile">
                     Rating
                  </td>
                   <td>
                     <span className="ratting d-flex align-items-center gap-2">
                        <i className="material-symbols-outlined ratting">
                           star
                        </i>
                        <i className="material-symbols-outlined ratting">
                           star
                        </i>
                        <i className="material-symbols-outlined ratting">
                           star
                        </i>
                        <i className="material-symbols-outlined ratting">
                           star
                        </i>
                        <i className="material-symbols-outlined ratting">
                           star
                        </i>
                     </span>
                   </td>
                   <td>
                     <span className="ratting d-flex align-items-center gap-2">
                        <i className="material-symbols-outlined ratting">
                           star
                        </i>
                        <i className="material-symbols-outlined ratting">
                           star
                        </i>
                        <i className="material-symbols-outlined ratting">
                           star
                        </i>
                        <i className="material-symbols-outlined ratting">
                           star
                        </i>
                        <i className="material-symbols-outlined ratting">
                           star
                        </i>
                     </span>
                   </td>
                 </tr>
                 <tr>
                  <td className="fz-16 fw-600 inter ttile">
                     Balance transfer
                  </td>
                   <td>
                     <i className="material-symbols-outlined base">
                        done
                     </i>
                   </td>
                   <td>
                     <i className="material-symbols-outlined base2">
                        close
                     </i>
                   </td>
                 </tr>
                 <tr>
                  <td className="fz-16 fw-600 inter ttile">
                     Cash back
                  </td>
                   <td>
                     <i className="material-symbols-outlined base">
                        done
                     </i>
                   </td>
                   <td>
                     <i className="material-symbols-outlined base">
                        done
                     </i>
                   </td>
                 </tr>
                 <tr>
                  <td className="fz-16 fw-600 inter ttile">
                     Bonus Offers
                  </td>
                   <td className="fz-16 fw-400 inter title">
                     25%
                   </td>
                   <td className="fz-16 fw-400 inter title">
                     37%
                   </td>
                 </tr>
                 <tr>
                  <td className="fz-16 fw-600 inter ttile">
                     Low interest
                  </td>
                   <td className="fz-16 fw-400 inter title">
                     5%
                   </td>
                   <td className="fz-16 fw-400 inter title">
                     10%
                   </td>
                 </tr>
                 <tr>
                  <td className="fz-16 fw-600 inter ttile">
                     Rewords
                  </td>
                   <td>
                     <i className="material-symbols-outlined base">
                        done
                     </i>
                   </td>
                   <td>
                     <i className="material-symbols-outlined base">
                        done
                     </i>
                   </td>
                 </tr>
                 <tr>
                  <td className="fz-16 fw-600 inter ttile">
                     Zero percent
                  </td>
                  <td>
                     <i className="material-symbols-outlined base2">
                        close
                     </i>
                   </td>
                   <td>
                     <i className="material-symbols-outlined base">
                        done
                     </i>
                   </td>
                 </tr>
                 <tr>
                  <td className="fz-16 fw-600 inter ttile">
                     Annual Fee
                  </td>
                   <td className="fz-16 fw-400 inter title">
                     10%
                   </td>
                   <td className="fz-16 fw-400 inter title">
                     0%
                   </td>
                 </tr>
                 <tr>
                  <td className="fz-16 fw-600 inter ttile">
                     Rewards rate
                  </td>
                   <td className="fz-16 fw-400 inter title">
                     $5
                   </td>
                   <td className="fz-16 fw-400 inter title">
                     $10
                   </td>
                 </tr>
                 <tr>
                  <td className="fz-16 fw-600 inter ttile">
                     Intro APR
                  </td>
                   <td className="fz-16 fw-400 inter title">
                    0%
                   </td>
                   <td className="fz-16 fw-400 inter title">
                     7%
                   </td>
                 </tr>
                 <tr>
                  <td className="fz-16 fw-600 inter ttile">
                     Process
                  </td>
                   <td className="fz-16 fw-400 inter title">
                     <a href="gift-card.html" className="cmn--btn outline__btn">
                        <span>
                           Apply
                        </span>
                     </a>
                   </td>
                   <td className="fz-16 fw-400 inter title">
                     <a href="gift-card.html" className="cmn--btn outline__btn">
                        <span>
                           Apply
                        </span>
                     </a>
                   </td>
                 </tr>
               </tbody>
             </table>
         </div>
      </div> */}

      {/*?php include 'require/footer.php'; ?*/}
      <Footer />
    </>

  )
}
