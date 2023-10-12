"use client";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogData } from "@/data/blogs";

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

export default function BlogsThree(props) {
  const { product,title} = props;

  console.log('product',product)
  const [outputArray, setfirst] = useState(chunkArray(blogData, 4));
  const [modalContent, setModalContent] = useState();

  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <>
      <div className="LobSmartCard-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="LobSmartCard-page-title-wrap mb-15">
            <h2 className="page-title">{title}</h2>
          </div>
        </div>

        <div className="section-wrapper pr-60 pl-60 mb-60">
          <div className="blog-slider-wrap">
            <div className="swiper-container blog-slider-active">
              {showSlider && (
                <Swiper
                  // {...setting}
                  modules={[Navigation, Pagination]}
                  pagination={{
                    el: ".blog-progation-three",
                    clickable: true,
                  }}
                  // loop={true}
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                >
                  {
                  product[0].count>0   ?
                  product.map((elm, i) => (
                    <SwiperSlide key={i}>
                      <div className="swiper-slide">
                        <div className="row">
                          {product.map((elm2, i2) => (
                            <div key={i2} className="col-lg-6 col-md-6">
                              <div
                                className={`blog-slider-single  ${elm2.bgClass} `}
                              >
                                <a
                                  href="#"
                                  className="img"
                                  data-bs-toggle="modal"
                                  data-bs-target="#h1-blog-1"
                                >
                                  {elm2.image !='' ?
                                  <Image
                                    width={430}
                                    height={430}
                                   // onClick={() => setModalContent(elm2)}
                                    style={{
                                      width: "100%",
                                      height: "fit-content",
                                    }}
                                    src={elm2.image}
                                    alt="blog"
                                  />
                                  :
                                  <Image
                                    width={430}
                                    height={430}
                                   // onClick={() => setModalContent(elm2)}
                                    style={{
                                      width: "100%",
                                      height: "fit-content",
                                    }}
                                    src={"/assets/img/blog/blog-img-1.png"}
                                    alt="blog"
                                  />
}
                                </a>
                                <div className="blog-meta">
                                  {/*<span className="blog-date">{elm2.date}</span>*/}
                                  <span className="blog-cetagory">
                                    {elm2.message}
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
                                    {elm2.name}
                                  </a>
                                </h6>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                :<>No Products ..</>
                }
                </Swiper>
              )}
              <div className="blog-progation blog-progation-three"></div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
          <span>© {new Date().getFullYear()} All Rights Reserved by ib-themes.</span>
        </div>
      </div>
      <Modal modalContent={modalContent} setModalContent={setModalContent} />
    </>
  );
                             
}
