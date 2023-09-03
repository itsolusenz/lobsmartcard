import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import val from ""
import Header from './header';
import Footer from './Footer';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Product from './Product';


import BottomNav from './fixedBottomNav/bottomNav';

export default function MainPg() {

  const [Profilelist, setProfilelist] = useState([]);
  const [Profileimage, setProfileimage] = useState('');
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&uniqueid=1084285344');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        if (json[0].profileimage != '') {
          setProfileimage(json[0].profileimage);
        }
        // setCountryval(json);
        setProfilelist(json);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getProfile(); // Invoke the getCountry function

  }, []); // Empty dependency array means this effect runs once after initial render
  if (Profilelist.length > 0) {
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
                        <img src="/images/no-picture.jpg" alt="Admin" className="profile-img" width="250" />
                        <div className=" profile-name-container">
                          <h1 className='profile-name mt-3 mb-3'>{Profilelist[0].name}  {Profilelist[0].lname}</h1>
                          <p className="text-secondary">{Profilelist[0].email}<br />+{Profilelist[0].mobile}<br />{Profilelist[0].designation}</p>
                          <div className='d-flex justify-content-center'>
                            {Profilelist[0].social == "facebook" &&
                              <a href={Profilelist[0].social_url}><span className='social-btn me-2'><i class="bi bi-facebook"></i></span></a>
                            }
                            {Profilelist[0].social == "chrome" &&
                              <a href={Profilelist[0].social_url}><span className='social-btn me-2'><i class="bi bi-twitter"></i></span></a>
                            }
                            {Profilelist[0].social == "twitter" &&
                              <a href={Profilelist[0].social_url}><span className='social-btn me-2'><i class="bi bi-browser-chrome"></i></span></a>
                            }
                            {Profilelist[0].social == "linkedin" &&
                              <a href={Profilelist[0].social_url}><span className='social-btn me-2'><i class="bi bi-linkedin"></i></span></a>
                            }

                          </div>
                          <div className='qr-container'>
                            <img src="https://img.freepik.com/premium-vector/qr-code-sample-smartphone-scanning-qr-code-icon-flat-design-stock-vector-illustration_550395-108.jpg?w=2000" width={140} height={140} />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card mb-5 nav-container">

                    <Navbar />
                  </div>
                  <div className='content-box menubar-contents' id="service">
                    <AboutMe />
                  </div>

                  <div className='content-box menubar-contents' style={{ padding: '20px 0px' }}>
                    <Product />
                  </div>
                  <div className='content-box menubar-contents' style={{ padding: '20px 0px' }}>
                    <Contact />
                  </div>
                </div>



              </div>
              <Footer />
            </div>

          </div>
        </main>
        <BottomNav />
      </>
    )
  }
  else {
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
                        <img src="/no-picture.jpg" alt="Admin" className="profile-img" width="250" />
                        <div className=" profile-name-container">
                          <h1 className='profile-name mt-3 mb-3'>xxxxx</h1>
                          <h3 className="text-secondary mb-4">xxxxxx</h3>
                          <div className='d-flex justify-content-center'>
                            <a href='/'><span className='social-btn me-2'><i class="bi bi-facebook"></i></span></a>
                            <a href='/'><span className='social-btn me-2'><i class="bi bi-twitter"></i></span> </a>
                            <a href='/'><span className='social-btn me-2'><i class="bi bi-browser-chrome"></i></span></a>
                            <a href='/'><span className='social-btn'><i class="bi bi-linkedin"></i></span></a>
                          </div>
                          <div className='qr-container'>
                            <img src="https://img.freepik.com/premium-vector/qr-code-sample-smartphone-scanning-qr-code-icon-flat-design-stock-vector-illustration_550395-108.jpg?w=2000" width={140} height={140} />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card mb-5 nav-container">

                    <Navbar />
                  </div>
                  <div className='content-box menubar-contents' id="service">
                    <AboutMe />
                  </div>

                  <div className='content-box menubar-contents' style={{ padding: '20px 0px' }}>
                    <Product />
                  </div>
                  <div className='content-box menubar-contents' style={{ padding: '20px 0px' }}>
                    <Contact />
                  </div>
                </div>



              </div>
              <Footer />
            </div>

          </div>
        </main>
        <BottomNav />
      </>
    )
  }
}
