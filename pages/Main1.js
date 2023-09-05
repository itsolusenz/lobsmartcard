"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import val from ""
import Header from './header';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import BottomNav from './fixedBottomNav/bottomNav';
export default function MainPg() {
  const [Countrylist, setCountryList] = useState([]);
  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&uniqueid=202300010144');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        // setCountryval(json);
        setCountryList(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getCountry(); // Invoke the getCountry function

  }, []); // Empty dependency array means this effect runs once after initial render

  //  console.log(Countrylist[0]);
  if (Countrylist.length > 0) {

    return (
      <>
        <main className='main-container'>
          <div className='container-md'>
            <div className="main-body">
              <Header />

              <div className="row  gutters-sm">
                <div className="col-lg-4 profile-container  ">
                  <div className="card border-rad">
                    <div className="card-body position-relative">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img src="https://bostami-nextjs.netlify.app/_ipx/w_256,q_75/%2Fimages%2Fabout%2Favatar.jpg?url=%2Fimages%2Fabout%2Favatar.jpg&w=256&q=75" alt="Admin" className="profile-img" width="250" />
                        <div className=" profile-name-container">
                          <h1 className='profile-name mt-3 mb-3'>{Countrylist[0].name}  {Countrylist[0].lname}</h1>
                          <h3 className="text-secondary mb-4">{Countrylist[0].designation}</h3>
                          <div className='d-flex justify-content-center'>
                            {Countrylist[0].social == "facebook" &&
                              <a href={Countrylist[0].social_url}><span className='social-btn me-2'><i class="bi bi-facebook"></i></span></a>
                            }

                            <a href='/'><span className='social-btn me-2'><i class="bi bi-twitter"></i></span> </a>
                            <a href='/'><span className='social-btn me-2'><i class="bi bi-browser-chrome"></i></span></a>
                            <a href='/'><span className='social-btn'><i class="bi bi-linkedin"></i></span></a>
                          </div>
                          <div className='qr-container pt-3'>
                            <img src="https://img.freepik.com/premium-vector/qr-code-sample-smartphone-scanning-qr-code-icon-flat-design-stock-vector-illustration_550395-108.jpg?w=2000" width={140} height={140} />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card  container nav-container">

                    <Navbar />
                  </div>
                  <div className='content-box menubar-contents'>
                    <AboutMe />
                  </div>

                </div>



              </div>
            </div>

          </div>
        </main>
        <BottomNav />
      </>
    )
  }
  else {
    return (<div>Loading...</div>)
  }
}
