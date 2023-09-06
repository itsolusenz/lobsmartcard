"use client"
import { contactData } from "@/data/contactData";
import { profileInfo } from "@/data/profileInfo";
import { socialMediaData } from "@/data/socials";
import Image from "next/image";
import React, { useEffect, useState } from 'react';

export default function PersonalInfoThree({id}) {
  //console.log('---',params)
    const pid = id;
    const [Profilelist, setProfilelist] = useState([]);
    const [Profileimage, setProfileimage] = useState('');
  useEffect(() => {
    const getProfile = async (pid) => {
      
        try {
          console.log('---------',pid)
            const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&uriid=' + pid);
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
    if (pid != '' && pid != null && pid != undefined) {
        getProfile(pid);
    }


}, [pid]);
const Gomap = ()=>{

  let address = Profilelist[0].flat+','+Profilelist[0].street+','+Profilelist[0].city+','+Profilelist[0].postcode+','+Profilelist[0].state+','+Profilelist[0].country+','
 // console.log(address,'add');
 address
  window.location.href='https://maps.google.com/maps?q=' + address+', _blank';
}
if (Profilelist.length > 0) {
  return (
    <>
    <div className="col-xxl-4 col-xl-4 col-lg-4">
      <div className="LobSmartCard-parsonal-info-area">
        <div className="LobSmartCard-parsonal-info-wrap">
          <div className="LobSmartCard-parsonal-info-img">
        {/*}  <img src={`${Profilelist[0].proimage}`} alt="Admin" className="profile-img" width="250" />

  */}  {Profilelist[0].proimage!='https://www.laabamone.com/Lobsmart/images/' ?
            <Image
              width={240}
              height={240}
              src={`${Profilelist[0].proimage}`}
              alt="author"
            />
            :
            <Image
              width={240}
              height={240}
              src={"https://www.laabamone.com/Lobsmart/images/16938326901493467085.jpg"}
              alt="author"
            />
}
          </div>

          <h4 className="LobSmartCard-parsonal-info-name">
            <a href="#">{Profilelist[0].name} {Profilelist[0].lname}</a>
          </h4>
          <h5 LobSmartCard-parsonal-info-contact-item>
             {Profilelist[0].org}
          </h5>

          <span className="LobSmartCard-parsonal-info-bio mb-15">{Profilelist[0].designation}</span>

              <ul className="LobSmartCard-parsonal-info-social-link mb-30">
            {socialMediaData.map((elm, i) => (
              <li key={i}>
                {elm.id=='1' && Profilelist[0].fb!='' &&
                <a style={{ color: elm.color }} href={Profilelist[0].fb}>
                  <i className={elm.className}></i>
                </a>
                 }
                 {elm.id=='4' && Profilelist[0].youtube!='' &&
                <a style={{ color: elm.color }} href={Profilelist[0].youtube}>
                  <i className={elm.className}></i>
                </a>
                 }
                 {elm.id=='2' && Profilelist[0].twitter!='' &&
                <a style={{ color: elm.color }} href={Profilelist[0].twitter}>
                  <i className={elm.className}></i>
                </a>
                 }
                 {elm.id=='3' && Profilelist[0].linkedin!='' &&
                <a style={{ color: elm.color }} href={Profilelist[0].linkedin}>
                  <i className={elm.className}></i>
                </a>
                 }
              </li>
            ))}
          </ul>

          <div className="LobSmartCard-parsonal-info-contact mb-30">
            {contactData.map((elm, i) => (
              <>
              { (elm.id=='4' && Profilelist[0].website!='' && Profilelist[0].website!=undefined && Profilelist[0].website!=null ) ?
              <div key={i} className="LobSmartCard-parsonal-info-contact-item">
                <div
                  style={{ color: `${elm.color}`, fontSize: `${elm.fontSize}` }}
                  className="icon"
                >
                  <i className={elm.iconClass}></i>
                </div>
                <div className="text">
                  <span>{elm.text.label}</span>                  
                   <p>{Profilelist[0].website}</p>
                </div>
              </div>
                  
                  :
               elm.id!='4' && 
              <div key={i} className="LobSmartCard-parsonal-info-contact-item">
                <div
                  style={{ color: `${elm.color}`, fontSize: `${elm.fontSize}` }}
                  className="icon"
                >
                  <i className={elm.iconClass}></i>
                </div>
                <div className="text">
                  <span>{elm.text.label}</span>
                  <p>{elm.text.label=='Phone' &&   `+${Profilelist[0].mobile}`}
                  {elm.text.label=='Email' &&   `${Profilelist[0].email}`}
                  {elm.text.label=='Location' &&(   
                  <>
                       { Profilelist[0].flat+','+Profilelist[0].street}<br/>
                       {Profilelist[0].landmard ? Profilelist[0].landmard +'<br/>': ''}
                       {Profilelist[0].city+' - '+Profilelist[0].postcode}<br/>
                       {Profilelist[0].state+', '+Profilelist[0].country+',' }
                  </>
                  
                  )}
                   
                  </p>
                </div>
              </div>
            }
            </>
            ))}
          </div>

         {/*} <div className="LobSmartCard-parsonal-info-btn">
            <a className="btn-2" href="/cv.pdf" download>
              <span style={{ color: "#fff" }} className="icon">
                <i className="fa-regular fa-download"></i>
              </span>
              download cv
            </a>
          </div>*/}
        </div>
      </div>
    </div>
     {/*} <div className="nav__menu nav__mobile" id="nav-menu">
      <ul className="nav__list">
     
          <li className="nav__item">
              <a href={Profilelist[0].fb} className="nav__link">
              <div  className="LobSmartCard-parsonal-info-contact-item">
                <div
                  style={{ color: `#FD7590`, fontSize: `22px` }}
                  className="icon"
                >
                  <i className="fa-duotone fa-contact-book"></i>
                </div>
              
              </div>
                 
                  
              </a>
          </li>
          
          <li className="nav__item">
              <a href={`mailto:${Profilelist[0].mail}`} className="nav__link">
              <div  className="LobSmartCard-parsonal-info-contact-item">
                <div
                  style={{ color: `#FD7590`, fontSize: `22px` }}
                  className="icon"
                >
                  <i className="fa-regular fa-envelope-open-text"></i>
                </div>
              
              </div>
                 
              
                 
              </a>
          </li>

          <li className="nav__item">
              <a href={`https://api.whatsapp.com/send?phone=${Profilelist[0].phonewhat}`}  className="nav__link">
                 
              <div  className="LobSmartCard-parsonal-info-contact-item">
                <div
                  style={{ color: `#FD7590`, fontSize: `22px` }}
                  className="icon"
                >
                 <i class="fa fa-whatsapp" aria-hidden="true"></i>

                </div>
              
              </div>
               
                 
              </a>
          </li>

          <li className="nav__item">
              <a href={Profilelist[0].mobile} className="nav__link">
              <div  className="LobSmartCard-parsonal-info-contact-item">
                <div
                  style={{ color: `#FD7590`, fontSize: `22px` }}
                  className="icon"
                >
                  <i className="fa-regular fa-mobile"></i>
                </div>
              
              </div>
                 
                
                 
              </a>
          </li>
          <li className="nav__item"> <a href="#" onClick={()=>Gomap()} className="nav__link" style={{color:'#FD7590'}}>
            <div  className="LobSmartCard-parsonal-info-contact-item">
                <div
                  style={{ color: `#FD7590`, fontSize: `22px` }}
                  className="icon"
                >
                  <i className="fa-solid fa-location-dot"></i>
                </div>
              
              </div>
                 
              </a>
          
             
          </li>
      </ul>
</div>*/}
</>
     );
 }
            else{
              return(
                <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="bostami-parsonal-info-area">
                  <div className="bostami-parsonal-info-wrap">
                  {/*}  <div className="bostami-parsonal-info-img">
                      <Image
                        width={240}
                        height={240}
                        src={profileInfo.imageSrcTwo}
                        alt="author"
                      />
                    </div>
          
                    <h4 className="bostami-parsonal-info-name">
                      <a href="#">{profileInfo.name}</a>
                    </h4>
                    <span className="bostami-parsonal-info-bio mb-15">{profileInfo.title}</span>
          
                    <ul className="bostami-parsonal-info-social-link mb-30">
                      {socialMediaData.map((elm, i) => (
                        <li key={i}>
                          <a style={{ color: elm.color }} href={elm.href}>
                            <i className={elm.className}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
          
                    <div className="bostami-parsonal-info-contact mb-30">
                      {contactData.map((elm, i) => (
                        <div key={i} className="bostami-parsonal-info-contact-item">
                          <div
                            style={{ color: `${elm.color}`, fontSize: `${elm.fontSize}` }}
                            className="icon"
                          >
                            <i className={elm.iconClass}></i>
                          </div>
                          <div className="text">
                            <span>{elm.text.label}</span>
                            <p>{elm.text.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
          
                    <div className="bostami-parsonal-info-btn">
                      <a className="btn-2" href="/cv.pdf" download>
                        <span style={{ color: "#fff" }} className="icon">
                          <i className="fa-regular fa-download"></i>
                        </span>
                        download cv
                      </a>
                      </div>*/}
                  </div>
                </div>
              </div>
              );
            }
}
