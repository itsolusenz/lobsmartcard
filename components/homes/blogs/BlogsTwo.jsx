"use client";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogDataTwo } from "@/data/blogs";

import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
const chunkArray = (arr, chunkSize) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

export default function BlogsTwo() {
  const [outputArray, setfirst] = useState(chunkArray(blogDataTwo, 6));
  const [modalContent, setModalContent] = useState();

  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <>
      <div className="LobSmartCard-page-area z-index-3">
        <div className="container">
          <div className="LobSmartCard-page-wrap pt-60 pl-80 pr-80">
            <div className="page-tilte-2-wrap">
              <div className="row">
                <div className="col-12">
                  <div className="LobSmartCard-page-title-wrap mb-40">
                    <h2 className="page-title">blog</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="LobSmartCard-blog-2 mb-30">
              <div className="row">
                <div className="col-12">
                  <div className="blog-slider-wrap">
                    <div className="swiper-container blog-slider-active">
                      {showSlider && (
                        <Swiper
                          // {...setting}
                          modules={[Navigation, Pagination]}
                          pagination={{
                            el: ".blog-progation-two",
                            clickable: true,
                          }}
                          // loop={true}
                          spaceBetween={10}
                          slidesPerView={1}
                          loop={true}
                        >
                          {outputArray.map((elm, i) => (
                            <SwiperSlide key={i}>
                              <div className="swiper-slide">
                                <div className="row">
                                  {elm.map((elm2, i2) => (
                                    <div key={i2} className="col-lg-4 col-md-6">
                                      <div
                                        className={`blog-slider-single  ${elm2.bgClass} `}
                                      >
                                        <a
                                          href="#"
                                          className="img"
                                          data-bs-toggle="modal"
                                          data-bs-target="#h1-blog-1"
                                        >
                                          <Image
                                            width={430}
                                            height={430}
                                            onClick={() => setModalContent(elm2)}
                                            style={{
                                              width: "100%",
                                              height: "fit-content",
                                            }}
                                            src={elm2.imgSrc}
                                            alt="blog"
                                          />
                                        </a>
                                        <div className="blog-meta">
                                          <span className="blog-date">
                                            {elm2.date}
                                          </span>
                                          <span className="blog-cetagory">
                                            {elm2.category}
                                          </span>
                                        </div>
                                        <h6
                                          className="blog-title"
                                          onClick={() => setModalContent(elm2)}
                                        >
                                          <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#h1-blog-1"
                                          >
                                            {elm2.title}
                                          </a>
                                        </h6>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      )}

                      <div className=" blog-progation blog-progation-two"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-copyright text-center pt-25 pb-25 bg-light-white-2 border-redius-20">
              <span>
                © {new Date().getFullYear()} All Rights Reserved by ib-themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Modal modalContent={modalContent} setModalContent={setModalContent} />
    </>
  );
}
