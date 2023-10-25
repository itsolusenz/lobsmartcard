import React from 'react'
import Image from 'next/image';


function Footer() {
  //  const handleLinkClick = (event) => {
  //   // Prevent the default behavior of the anchor tag
  //   event.preventDefault();

  //   // Add your custom logic or navigation code here
  //   // For example, you can use React Router or perform any other action
  // };
  return (
    <>
      <footer className="footer__section bgadd">

        <div className="subcribtion">
          <div className="container">
            <div className="subcribtion__wrapper ralt">
              <div className="subscribe__content">
                <h2 className="mb-24 title wow fadeInDown">
                  Join Our Newsletter for Updates
                </h2>
                <p className="mb-40 title wow fadeInUp">
                  Subscribe to get notified about new templates and updates
                </p>
                <form
                  action="#0"
                  className="d-flex align-items-center wow fadeInDown"
                >
                  <input type="text" placeholder="Enter Email Address" />
                  <button type="submit" className="cmn--btn">
                    <span>Subscribe</span>
                  </button>
                </form>
              </div>
              <div className="ball">
                <Image src="/assets/front/img/banner/ball.png" height={25} width={25} layout="responsive" alt="ball" />
              </div>
              <div className="rarrow1">
                <Image src="/assets/front/img/footer/rocket-arrow.png" height={25} width={25} layout="responsive" alt="img" />
              </div>
              <div className="rarrow2">
                <Image src="/assets/front/img/footer/rocket-arrowright.png" height={25} width={25} layout="responsive" alt="img" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer__top pt-120 pb-120">
            <div className="row g-4">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer__item">
                  <a href="." className="footer__logo mb-24 d-block">
                    <Image
                      src="/assets/front/img/lobs.png"
                      alt="logo"
                      width={275}
                      height={65}
                      layout="responsive"
                    />
                  </a>
                  <p className="pfz-16 inter fw-400 text-white mb-30">
                    Buying a NFC enabled AI Business card from a LOBSMART gives you
                    more professional way to handle and organize your circle
                  </p>
                  <ul className="social d-flex align-items-center">
                    <li>
                      <a
                        href="https://www.facebook.com/laabamoneerp/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://plus.google.com/+laabamonedotcom"
                        target="_blank"
                      >
                        <i className="fab fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/laabamoneerp/"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/laabamone-business-solutions-private-limited/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/c/LaabamOne" target="_blank">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6">
                <div className="footer__item">
                  <a
                    href="#"
                    className="footer__title fz-24 fw-600 inter text-white mb-24 d-block"

                  >
                    Quick Link
                  </a>
                  <ul className="quick__link">
                    <li>
                      <a href="." className="fz-16 fw-400 inter text-white d-block">
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="about.html"
                        className="fz-16 fw-400 inter text-white d-block"
                      >
                        Who We are
                      </a>
                    </li>
                    <li>
                      <a
                        href="features.html"
                        className="fz-16 fw-400 inter text-white d-block"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="faq.html"
                        className="fz-16 fw-400 inter text-white d-block"
                      >
                        Have Query ?
                      </a>
                    </li>
                    <li>
                      <a
                        href="contact.html"
                        className="fz-16 fw-400 inter text-white d-block"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer__item">
                  <a
                    href="#"
                    className="footer__title fz-24 fw-600 inter text-white mb-24 d-block"

                  >
                    Contact
                  </a>
                  <ul className="footer__contact">
                    <li>
                      <a
                        href="tel:+919585123995"
                        className="fz-16 d-flex align-items-center gap-3 fw-400 inter text-white d-block"
                      >
                        <i className="material-symbols-outlined cmn__icon">
                          phone_in_talk
                        </i>
                        <span>(+91) 95851 23995</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@laabamone.com"
                        className="fz-16 d-flex align-items-center gap-3 fw-400 inter text-white d-block"
                      >
                        <i className="material-symbols-outlined cmn__icon">
                          mark_as_unread
                        </i>
                        <span>
                          <span>info@laabamone.com</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a target="_blank"
                        href="https://maps.app.goo.gl/CRhcBYU7yvykeTWu9"
                        className="fz-16 d-flex align-items-center gap-3 fw-400 inter text-white d-block"

                      >
                        <i className="material-symbols-outlined cmn__icon">
                          distance
                        </i>
                        <span>Madurai, TN, IN</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer__item">
                  <a
                    href="#"
                    className="footer__title fz-24 fw-600 inter text-white mb-24 d-block"

                  >
                    Newsletter
                  </a>
                  <p className="pfz-16 fw-400 inter mb-24">
                    Subscribe our newsletter to get our latest update &amp; adress
                  </p>
                  <form action="#0" className="d-flex align-items-center">
                    <input type="text" placeholder="Email address" />
                    <button type="submit" className="cmn--btn">
                      <span>
                        <i className="material-symbols-outlined">send</i>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom d-flex align-items-center">
            <p className="fz-16 fw-400 inter text-white">
              Copyright © {/*?=date("Y")?*/}{" "}
              <a href="#" className="base2" >
                LaabamOne.
              </a>
            </p>
            <ul className="help__support d-flex align-items-center">
              <li>
                <a
                  href="privacy-policy.html"
                  className="text-white fz-16 fw-400 inter"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="terms-and-conditions.html"
                  className="text-white fz-16 fw-400 inter"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="scroll_2nd active">
        <a aria-label="whatsapp-icon" href="https://api.whatsapp.com/send?phone=9585123995" target="_blank" rel="noreferrer nofollow">
          <img src="/assets/front/img/whtap.webp" alt="whatsapp" style={{ height: '50px' }} className="lazyload" /></a>


      </div>

    </>
  )
}
export default Footer;