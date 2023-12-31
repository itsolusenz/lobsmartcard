"use client";

import { items, itemsTwo } from "@/data/jobFeatures";
import React, { useEffect, useState } from "react";
import { clientLogos } from "@/data/clientLogos";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { bioData } from "@/data/bioData";
import Image from "next/image";

export default function AboutThree({id}) {
  const [showSlider, setShowSlider] = useState(false);
  const [Profilelist, setProfilelist] = useState([]);
  const pid = id;
  useEffect(() => {
    setShowSlider(true);
   
    const getProfile = async (pid) => {
      
      try {
       // console.log('---------',pid)
          const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&uriid=' + pid);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const json = await response.json();
          
          // setCountryval(json);
          setProfilelist(json);

      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  if (pid != '' && pid != null && pid != undefined) {
      getProfile(pid);
  }

  }, [pid]);
  if (Profilelist.length > 0) {
  return (
    <div className="LobSmartCard-page-content-wrap">
      <div className="section-wrapper pl-60 pr-60 pt-60">
        <div className="LobSmartCard-page-title-wrap mb-15">
          <h2 className="page-title">about</h2>
          <p>{Profilelist[0].aboutcontent}</p>
         
        </div>
      </div>

     {/*} <div className="section-wrapper pl-60 pr-60">
        <div className="LobSmartCard-section-title-wrap mb-30">
          <h3 className="section-title">What I do!</h3>
        </div>

        <div className="LobSmartCard-what-do-wrap mb-30">
          <div className="row">
            {items.map((elm, i) => (
              <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 ">
                <div className={`LobSmartCard-what-do-item ${elm.bg}`}>
                  <div className="icon" style={{ margin: "0 auto" }}>
                    <Image
                      height={40}
                      width={160}
                      style={{ margin: "0 auto" }}
                      alt="about"
                      src={elm.icon}
                    />
                  </div>
                  <div className="text">
                    <h4 className="title">{elm.title}</h4>
                    <p>{elm.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
        <div className="LobSmartCard-section-title-wrap text-center mb-50">
          <h3 className="section-title">clinet</h3>
        </div>

        <div className="LobSmartCard-client-slider">
          <div className="swiper-container client_slide_active">
            {showSlider && (
              <Swiper
                // {...setting}
                modules={[Navigation, Pagination, Autoplay]}
                // loop={true}
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                autoplay={{
                  delay: 3000, // Time between each slide (in milliseconds)
                  disableOnInteraction: false, // Set to false if you want the auto slider to continue even when the user interacts with the slider (e.g., clicking on a slide).
                }}
                breakpoints={{
                  // when window width is >= 576px
                  450: {
                    slidesPerView: 3,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 4,
                  },
                  1200: {
                    // when window width is >= 992px
                    slidesPerView: 5,
                  },
                }}
              >
                {clientLogos.map((elm, i) => (
                  <SwiperSlide key={i}>
                    <div className="swiper-slide">
                      <Image
                        height={62}
                        width={264}
                        style={{ height:'62px',width:'fit-content'}}
                        className="LobSmartCard-client-slider-logo"
                        src={elm.imgSrc}
                        alt="client"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>*/}

      <div className="footer-copyright text-center pt-25 pb-25">
      <a href="/privacy-policy">Privacy Policy </a> &nbsp;&nbsp; 
        <span>
          © {new Date().getFullYear()} All Rights Reserved by LobSmartCard.
        </span>
      </div>
    </div>
  );
                }
                else{
                  return (
                    <div className="LobSmartCard-page-content-wrap">
                      <div className="section-wrapper pl-60 pr-60 pt-60">
                        <div className="LobSmartCard-page-title-wrap mb-15">
                          <h2 className="page-title">about</h2>
                          <p>{bioData.descOne}</p>
                          <p>{bioData.descTwo}</p>
                        </div>
                      </div>
                
                     {/*} <div className="section-wrapper pl-60 pr-60">
                        <div className="LobSmartCard-section-title-wrap mb-30">
                          <h3 className="section-title">What I do!</h3>
                        </div>
                
                        <div className="LobSmartCard-what-do-wrap mb-30">
                          <div className="row">
                            {items.map((elm, i) => (
                              <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 ">
                                <div className={`LobSmartCard-what-do-item ${elm.bg}`}>
                                  <div className="icon" style={{ margin: "0 auto" }}>
                                    <Image
                                      height={40}
                                      width={160}
                                      style={{ margin: "0 auto" }}
                                      alt="about"
                                      src={elm.icon}
                                    />
                                  </div>
                                  <div className="text">
                                    <h4 className="title">{elm.title}</h4>
                                    <p>{elm.description}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                
                      <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
                        <div className="LobSmartCard-section-title-wrap text-center mb-50">
                          <h3 className="section-title">clinet</h3>
                        </div>
                
                        <div className="LobSmartCard-client-slider">
                          <div className="swiper-container client_slide_active">
                            {showSlider && (
                              <Swiper
                                // {...setting}
                                modules={[Navigation, Pagination, Autoplay]}
                                // loop={true}
                                spaceBetween={30}
                                slidesPerView={2}
                                loop={true}
                                autoplay={{
                                  delay: 3000, // Time between each slide (in milliseconds)
                                  disableOnInteraction: false, // Set to false if you want the auto slider to continue even when the user interacts with the slider (e.g., clicking on a slide).
                                }}
                                breakpoints={{
                                  // when window width is >= 576px
                                  450: {
                                    slidesPerView: 3,
                                  },
                                  // when window width is >= 768px
                                  768: {
                                    slidesPerView: 4,
                                  },
                                  1200: {
                                    // when window width is >= 992px
                                    slidesPerView: 5,
                                  },
                                }}
                              >
                                {clientLogos.map((elm, i) => (
                                  <SwiperSlide key={i}>
                                    <div className="swiper-slide">
                                      <Image
                                        height={62}
                                        width={264}
                                        style={{ height:'62px',width:'fit-content'}}
                                        className="LobSmartCard-client-slider-logo"
                                        src={elm.imgSrc}
                                        alt="client"
                                      />
                                    </div>
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            )}
                          </div>
                        </div>
                      </div>*/}
                
                      <div className="footer-copyright text-center pt-25 pb-25" style={{paddingTop:'20px',backgroundColor:'#e7f0ed'}}>
                      <a href="/privacy-policy">Privacy Policy </a> &nbsp;&nbsp; 
                        <span>
                          © {new Date().getFullYear()} All Rights Reserved by LobSmartCard.
                        </span>
                      </div>
                    </div>
                  );

                }
}
