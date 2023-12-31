"use client";
import React, { useState, useEffect } from "react";
import Menu from "../menus/Menu";
import { menuItemsThree } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function HeaderFour(props) {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  const {slug, slug1,slug2,plen,slen} = props;
  const addDarkbg = () => {
    const elements = document.querySelectorAll(".home-3");
    elements.forEach((element) => {
      element.style.backgroundImage = `url(/assets/img/bg/page-bg-dark-1.jpg)`;
    });
    setDarkMode(true);
  };

  const addlightBg = () => {
    const elements = document.querySelectorAll(".home-3");
    elements.forEach((element) => {
      element.style.backgroundImage = `url(/assets/img/bg/page-bg-1.jpg)`;
    });

    setDarkMode(false);
  };
  const handleDarkmode = () => {
    const currentState = localStorage?.getItem("idDarkMode");
    if (JSON.parse(currentState) == true) {
      localStorage.setItem("idDarkMode", false);
      document.body.classList.remove("dark-theme");
      addlightBg();
    } else {
      localStorage?.setItem("idDarkMode", true);
      document.body.classList.add("dark-theme");
      addDarkbg();
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const currentState = localStorage?.getItem("idDarkMode");

    if (JSON.parse(currentState) == true) {
      document.body.classList.add("dark-theme");
      addDarkbg();
    } else {
      document.body.classList.remove("dark-theme");

      addlightBg();
    }
  }, []);
  return (
    <div className="LobSmartCard-header-area mb-30 z-index-5">
      <div className="container">
        <div className="LobSmartCard-header-wrap">
          <div className="row">
           
            <div className="col-lg-2 col-md-6 col-sm-4 col-4 d-flex align-items-center">
              <div className="LobSmartCard-header-logo">
                <Link className="site-logo" taret="_blank" href="/">
                  <Image
                    width={153}
                    height={52}
                    src="/img/favicon.png"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-10 col-md-6 col-sm-8 col-8">
              <div className="LobSmartCard-header-menu-btn text-right mb-0">
                <div className="dark-btn mode-btn" onClick={handleDarkmode}>
                {darkMode ? (
                    <i class="sunicon fa-light fa-sun-bright"></i>
           
                  ) : (
                    <i class="moonicon fa-solid fa-moon"></i>
                  )}
                </div>
              <div
                  className={`menu-btn toggle_menu d-lg-none ${
                    menuOpen && "active"
                  } `}
                  onClick={() => setMenuOpen((pre) => !pre)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-wrap">
          <div className={`mobile-menu mobile_menu_3 ${menuOpen && "active"} `}>
            <Menu setMenuOpen={setMenuOpen} data={''} slug={slug} slug1={slug1} slug2={slug2} plen={plen} slen={slen} />
          </div>
        </div>
      </div>
    </div>
  );
}
