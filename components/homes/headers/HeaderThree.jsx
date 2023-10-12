"use client";

import { menuItemsThree } from "@/data/menu";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeaderThree(props) {
  const pathname = usePathname();
  const {slug, slug1,slug2,plen,slen} = props;
console.log(plen,'plen');
  return (
    <div className="text-right">
      <div className="LobSmartCard-main-menu-wrap">
        <nav className="bastami-main-menu main_menu_3">
          <ul>
              <li  className={pathname == `/${slug}/${slug1}` ? "active" : ""}>
                <Link
                  href={`/${slug}/${slug1}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "24px", marginBottom: "12px" }}>
                    <i className="fa-light fa-user"></i>
                  </span>
                  <div>About</div>
                </Link>
              </li>
              {plen > 0 && 
              <li  className={pathname == `/${slug}/${slug1}/products` ? "active" : ""}>
              <Link
                href={`/${slug}/${slug1}/products`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "24px", marginBottom: "12px" }}>
                  <i className="fa-light fa-user"></i>
                </span>
                <div>Product</div>
              </Link>
              </li>
               }
               {slen >0 &&
                <li  className={pathname == `/${slug}/${slug1}/services` ? "active" : ""}>
                <Link
                  href={`/${slug}/${slug1}/services`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "24px", marginBottom: "12px" }}>
                    <i className="fa-light fa-user"></i>
                  </span>
                  <div>Services</div>
                </Link>
                </li>
               }
             
              
              
          {/*}  {menuItemsThree.map((elm, i) => (
              <li key={i} className={pathname == elm.href ? "active" : ""}>
                <Link
                  href={elm.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "24px", marginBottom: "12px" }}>
                    <i className={elm.icon}></i>
                  </span>
                  <div> {elm.text}</div>
                </Link>
              </li>
            ))}*/}
          </ul>
        </nav>
      </div>
    </div>
  );
}
