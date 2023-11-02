"use client"
import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
export default function faq() {
  const sectionRef = useRef(null);
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [bannerSectionHeight, setBannerSectionHeight] = useState(0);
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = navbarFixed ? 'navbar-fixed' : '';
  return (
    <>
      <Header value={navbarClass} />
      {/*?php
  $page = '4';
  $selid = '4';
  include 'require/header.php'; ?*/}
      <div className="breadcumnd__wrapper" ref={sectionRef}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-6 col-xl-6 col-lg-9 col-md-8 col-sm-8">
              <div className="breadcumnd__content">
                <span className="d4 mb-24 base2">FAQs</span>
                <ul className="breadcun__list flex-wrap gap-1 d-flex align-items-center">
                  <li>
                    <a href="index.html" className="fz-16 fw-400 inter ">
                      Home
                    </a>
                  </li>
                  {/* <li>
                 <i className="material-symbols-outlined text-white mt-2">
                    chevron_right
                 </i>
              </li>
              <li>
                 <a href="#0" className="fz-16 fw-400 inter text-white">
                    Pages
                 </a>
              </li> */}
                  <li>
                    <i className="material-symbols-outlined base2 mt-2">
                      chevron_right
                    </i>
                  </li>
                  <li className="fz-16 base2 fw-40 inter">FAQs</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4">
              <div className="featured__card">
                <Image src="/assets/front/img/faq/faq.png" className="w-100" alt="img" layout='responsive' width={300} height={300} />
              </div>
            </div>
          </div>
        </div>
        <div className="element1">
          <Image src="/assets/front/img/banner/chok1.png" width={10} height={10} layout='responsive' alt="element" />
        </div>
        <div className="element2">
          <Image src="/assets/front/img/banner/chok2.png" width={10} height={10} layout='responsive' alt="element" />
        </div>
        <div className="element3">
          <Image src="/assets/front/img/banner/chok2.png" width={10} height={10} layout='responsive' alt="element" />
        </div>
        <div className="element4">
          <Image src="/assets/front/img/banner/chok2.png" width={10} height={10} layout='responsive' alt="element" />
        </div>
      </div>
      {/*element*/}
      {/* <div className="element1">
      <img src="/assets/front/img/banner/chok1.png" alt="element" />
    </div>
    <div className="element2">
      <img src="/assets/front/img/banner/chok2.png" alt="element" />
    </div>
    <div className="element3">
      <img src="/assets/front/img/banner/chok4.png" alt="element" />
    </div>
    <div className="element4">
      <img src="/assets/front/img/banner/chok3.png" alt="element" />
    </div>
    <div className="element5">
      <img src="/assets/front/img/banner/chok4.png" alt="element" />
    </div> */}
      {/*element*/}
      {/* Hero Section End */}
      {/* faqs Section Here */}
      <section className="faq__section pt-120 pb-120">
        <div className="container">
          <div className="row g-3 justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>So what exactly is Lobsmart?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lobsmart is really not something complex. It's simple, it's just your visiting card but better. Imagine you are at an event and run out of visiting cards, imagine you give a client your visiting card and they just throw it out, those things do not happen when using a Lobsmart. It's one card for your life*, you just take your Lobsmart and tap on a smartphone and that's it. All your information gets transferred to that person's mobile and stays there safe. Lobsmart does this through the NFC chip embedded in the card.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary aria-controls="panel2d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>So what is NFC?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      NFC is something called Near Field Communication. It's a short range wireless technology that allows for information sharing. It's something like your wifi but with a very short wireless range. It enables the exchange of data and information between two compatible devices such as smartphones, tablets and NFC enabled cards with a simple tap. It is easy to use, as it requires minimal setup or configuration. It provides a fast and convenient way to transfer data                  </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>Do you have to pay anything after the purchase of a Lobsmart?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, you do not have to. Lobsmart is a one time investment. You just pay for the card you get and that's it, you do not have to pay a rupee more after that.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                  <AccordionSummary aria-controls="panel4d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>What to do if you change your mobile number or any other details, do you have to buy a new card then?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      See that is the difference between normal paper visiting cards and our cutting edge Lobsmart, you do not ever need to reprint. Incase in future you want to change your details, you can just login to your portal and change any information you want, anytime, anywhere, that simple. You save money, you save time and most importantly you save all that wasted paper                </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                  <AccordionSummary aria-controls="panel5d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>What to do if my client's phone does not have an NFC option?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Do not worry, we have thought this through. We have a QR code printed on every Lobsmart that is unique for every user. Your clients can just scan the QR code and get your information saved. If they are not able to scan then you can just directly share the link to your profile. With Lobsmart you can choose the option that best suits you              </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                  <AccordionSummary aria-controls="panel6d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography> What information can I share with Lobsmart?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Much much more than what you can share with a Visiting card. You can share your contact details obviously, websites, social media handles, keywords, photos and much much more.              </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                  <AccordionSummary aria-controls="panel7d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>Why should you get a Lobsmart?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You should get a Lobsmart because it works so much better than your normal paper visiting cards. It's better, smarter and so much better looking. You can also customize the design of the Lobsmart to your liking, every card is customizable. Let’s up your networking game with Lobsmart               </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                  <AccordionSummary aria-controls="panel8d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>Can I share my profile as a link on Whatsapp?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, you can easily share your Lobsmart profile as a link on Whatsapp. Simply copy the link from your profile and send it across to the people you want to connect with.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                  <AccordionSummary aria-controls="panel9d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>How to update my profile?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      To update your profile, you can log in to your Lobsmart portal using your login credentials. From there, you can easily edit and update any information you want.                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                  <AccordionSummary aria-controls="panel10d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography> What are the features and benefits of Lobsmart?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lobsmart offers several features and benefits, including:
                      Easy and convenient transfer of information through NFC technology or QR code scanning.
                      Share more than just your contact information, include your social media handles, websites and much more.
                      Secure encryption of your card details, ensuring the safety of your information.
                      No additional fees or payments required after the initial purchase
                      Environmentally friendly alternative to traditional paper business cards
                      Ability to update and change information on your card without the need for reprints.                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                  <AccordionSummary aria-controls="panel11d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography> Is there any referral bonus I get?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, you get a 10% discount on your card for a successful referral you make.                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                  <AccordionSummary aria-controls="panel12d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>What’s the delivery time for Lobsmart?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The delivery time for Lobsmart may vary depending on your location. But typically you will get your card within a week from purchase.                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                  <AccordionSummary aria-controls="panel13d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>Who is Lobsmart for?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lobsmart is suitable for anyone from professionals, entrepreneursm business owners, or just anyone who wants a more advanced and efficient way to share their contact information and make a lasting impression.                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                  <AccordionSummary aria-controls="panel14d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>Is the UI of your card Customizable?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, the UI on your card can be customized. Once you have purchased your card, you can contact us and our design team will be happy to customize your UI to your liking.                </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                  <AccordionSummary aria-controls="panel15d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>How easy is it to set up Lobsmart?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Setting up your Lobsmart is very easy. Once you get your card, you can just tap your card on your smartphone and set up your portfolio. We’ve also made a video that guides you through the setup process which you can see by tapping here.            </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

            </div>
            <div className="col-xl-6 col-lg-6">
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
                  <AccordionSummary aria-controls="panel16d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>What can I print on Lobsmart?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lobsmart is really not something complex. It's simple, it's just your visiting card but better. Imagine you are at an event and run out of visiting cards, imagine you give a client your visiting card and they just throw it out, those things do not happen when using a Lobsmart. It's one card for your life*, you just take your Lobsmart and tap on a smartphone and that's it. All your information gets transferred to that person's mobile and stays there safe. Lobsmart does this through the NFC chip embedded in the card.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
                  <AccordionSummary aria-controls="panel17d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>Does Lobsmart work on both Android and Apple?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, Lobsmart works on both Android and Apple. It works on
                      any phone that has NFC enabled in it.           </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
                  <AccordionSummary aria-controls="panel18d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>How to tap using a Lobsmart?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      To tap your Lobsmart, you simply need to hold your
                      Lobsmart card against the NFC-enabled smartphone of the
                      person you want to share your information with. Make sure
                      the NFC chip on the card comes into contact with the NFC
                      sensor area on their device. This will initiate the date
                      transfer process, and your information will be transferred
                      instantly to their smartphone.         </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
                  <AccordionSummary aria-controls="panel19d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography> How can Lobsmart make me stand out and make an impression?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lobsmart can make you stand out and leave a lasting
                      impression because they offer a unique and technologically
                      advanced way of sharing your contact information. The
                      convenience and novelty of tapping a card to instantly
                      transfer your details to someone’s phone can make you
                      memorable in networking situations         </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
                  <AccordionSummary aria-controls="panel20d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>How secure is the information stored on Lobsmart?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lobsmart is the safest NFC business card in the market.
                      Lobsmart ensures that your card details are encrypted,
                      protecting your information from unauthorized access
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
                  <AccordionSummary aria-controls="panel21d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>What are the advantages of using Lobsmart compared to
                      traditional paper cards?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Easy and instant transfer of information with a tap or
                      scan. <br />
                      - One card is all you need to carry for endless
                      networking. <br />
                      - Elimination of the need for printing and reordering
                      paper cards. <br />
                      - Customizable designs and options for personalization.{" "}
                      <br />
                      - Integration with digital platforms and the ability to
                      include additional information <br />- Enhanced
                      professionalism and a modern image
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
                  <AccordionSummary aria-controls="panel22d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>Do my clients need an app for me to tap a Lobsmart?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, you clients do not need any app in their phones for
                      you to use Lobsmart.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
                  <AccordionSummary aria-controls="panel23d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography> What if my Lobsmart stopped working?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The possibility of this happening is almost zero. But if
                      you do find yourself in a situation where your Lobsmart
                      stops working, you can contact us and we can troubleshoot
                      any issues.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
                  <AccordionSummary aria-controls="panel24d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography> If my Lobsmart gets stolen or lost, will the information on
                      my card be safe?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      If your Lobsmart card is lost or stolen, you can
                      immediately contact us to block the card. You can also
                      block the card instantly by logging into your account and
                      blocking the card.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel25'} onChange={handleChange('panel25')}>
                  <AccordionSummary aria-controls="panel25d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography> Do I get assistance with designing my Lobsmart?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, once you have placed the order with us, our design
                      team will work with you closely to design a card that best
                      fits your imagination.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel25'} onChange={handleChange('panel25')}>
                  <AccordionSummary aria-controls="panel25d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>Do I need to download an app to set up my Lobsmart?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, you do not need an app. Once you get a Lobsmart you
                      can just tap it on your mobile which will open your
                      portfolio in a browser of your choice. From here you can
                      set up your profile and make your Lobsmart account.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel26'} onChange={handleChange('panel26')}>
                  <AccordionSummary aria-controls="panel26d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>Is Lobsmart waterproof?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      They are pretty much sage for low levels and short periods
                      of water exposure such as rain for example
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel27'} onChange={handleChange('panel27')}>
                  <AccordionSummary aria-controls="panel27d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>Is Lobsmart environmentally friendly ?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      One of the reasons for us to start Lobsmart was to find an
                      eco-friendly alternative to paper visiting cards. So the
                      answer is Yes, Lobsmart is eco-friendly compared to
                      traditional paper business cards. By eliminating the need
                      for printing and reordering paper cards, Lobsmart helps
                      reduce paper waste.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel28'} onChange={handleChange('panel28')}>
                  <AccordionSummary aria-controls="panel28d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>How can Lobsmart enhance my professional image and
                      credibility?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Using Lobsmart can enhance your professional image and
                      credibility by showcasing your tech-savviness, forward
                      thinking approach and attention to detail. It demonstrates
                      that you are up to date with modern technology trends and
                      technology
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ padding: '10px 0px' }}>
                <Accordion expanded={expanded === 'panel29'} onChange={handleChange('panel29')}>
                  <AccordionSummary aria-controls="panel29d-content" id="panel1d-header" style={{ backgroundColor: '#eae4f9' }}>
                    <Typography>How can Lobsmart enhance my professional image and
                      credibility?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      With our innovative approach to networking you can get the
                      information of all your prospective clients in one place
                      making it easy for you.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
      {/* faqs Section End */}
      {/*?php include 'require/footer.php'; ?*/}
    </>

  )
}
