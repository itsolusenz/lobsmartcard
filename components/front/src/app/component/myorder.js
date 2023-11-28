"use client"
import React from 'react'
import Footer from './footer'
import Header from './header'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
export default function features() {
  const sectionRef = useRef(null);
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [bannerSectionHeight, setBannerSectionHeight] = useState(0);
  const [Orderlist, setOrderlist] = useState('');
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
    const Getorderlist = async (a) => {
      const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_createorder&viewtype=list&cusid=' + a);
      const json = await response.json();
      console.log("---", json);
      setOrderlist(json);


    }
    let cus1id = localStorage.getItem("LOGIN_USER_ID");
    console.log('---', cus1id);
    if (cus1id != null && cus1id != undefined && cus1id != '') {

      Getorderlist(cus1id);



    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = navbarFixed ? 'navbar-fixed' : '';
  return (
    <>

      <section className="compare__section ralt bgadd ">
        <div className="container">
          <div className="additional__info mt-10 bgwhite round16">

            <h5 className="title addi__head round16">
              My Order
            </h5>
            <div className="table__here">

              <table className="table">
                <thead>
                  <tr >

                    <td className="fz-16 fw-600 inter ttile">
                      S.NO
                    </td>
                    <td className="fz-16 fw-600 inter ttile">
                      ORDER ID

                    </td>
                    <td className="fz-16 fw-600 inter ttile">
                      DATE
                    </td>
                    <td className="fz-16 fw-600 inter ttile">
                      SHIPPING TO
                    </td>
                    <td className="fz-16 fw-600 inter ttile">
                      ORDER TOTAL
                    </td>
                    <td className="fz-16 fw-600 inter ttile">
                      STATUS
                    </td>
                    <td className="fz-16 fw-600 inter ttile">

                    </td>
                  </tr>
                </thead>
                {Orderlist.length > 0 ?

                  Orderlist[0]['count'] > 0 ?

                    <tbody>
                      {Orderlist.map((a, b) =>

                        <tr>
                          <td className="fz-16 fw-600 inter ttile">
                            {a.id}
                          </td>
                          <td className="fz-16 fw-600 inter ttile">
                            {a.orderid}
                          </td>
                          <td>
                            {a.date}
                          </td>
                          <td>
                            {a.cusname}
                          </td>
                          <td>
                            {a.total}
                          </td>
                          <td>
                            {a.status == '1' ? 'Pending' :
                              a.status == '2' ? 'Paid' :
                                a.status == '3' ? 'Processing' :
                                  a.status == '4' ? 'Cancelled' :
                                    ''
                            }
                          </td>
                          <td>
                            <a href="/orderdetails" target="_blank" style={{ color: 'blue' }}>View</a>
                          </td>
                        </tr>

                      )}
                    </tbody>
                    :
                    <tbody>
                      <tr><td colSpan={7} style={{ textAlign: 'center' }}>{Orderlist[0]['count']}No data Available.</td></tr>
                    </tbody>

                  :
                  <>Loading..</>
                }
              </table>


            </div>
          </div></div>
      </section>



    </>

  )
}
