"use client";


import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Menu({ setMenuOpen, data,slug,slug1,slug2,plen,slen }) {
  const pathname = usePathname();

  return (
    <div className="mean-bar">
      <a
        href="#nav"
        className="meanmenu-reveal"
        style={{ right: "0px", left: "auto", display: "inline" }}
      >
        <span>
          <span>
            <span></span>
          </span>
        </span>
      </a>
      <nav className="mean-nav">
       {/*} <ul>
          {data.map((elm, i) => (
            <li
              className={` ${i + 1 == data.length && "mean-last"} ${
                pathname == elm.href && "active"
              }  `}
              style={{paddingTop:'5px',paddingBottom:'4px'}}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <Link href={elm.href}>
                <span>
                  <i
                    style={{ fontSize: "18px", marginRight: "10px" }}
                    className={elm.icon}
                  ></i>
                </span>
                {elm.text}
              </Link>
            </li>
          ))}
        </ul>*/}
        <ul>
       

              <li  className={pathname == `/${slug}/${slug1}` ? "active" : ""}
              style={{paddingTop:'5px',paddingBottom:'4px'}}>
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
             
              
              
        
          </ul>
      </nav>
    </div>
  );
}
