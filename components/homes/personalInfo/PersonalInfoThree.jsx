"use client"
import { contactData } from "@/data/contactData";
import { profileInfo } from "@/data/profileInfo";
import { socialMediaData } from "@/data/socials";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import '../../../public/assets/css/styles.css'
var vCardsJS = require('vcards-js');
import { decode as base64_decode, encode as base64_encode } from 'base-64';

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
            console.log('json',json);
            if (json[0].proimage != '') {
                setProfileimage(base64_decode(json[0].proimage));
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

const GetVcard = ()=>{

  var vCard = vCardsJS();

  //set properties
  vCard.firstName = Profilelist[0].name;
  //vCard.middleName = 'J';
  vCard.lastName =  Profilelist[0].lname;
  vCard.organization = Profilelist[0].org;
  vCard.email = Profilelist[0].email;  
  vCard.photo.attachFromUrl(`${Profileimage}`);
  if(Profilelist[0].phonew!='' && Profilelist[0].phonew!=null && Profilelist[0].mobile!= 'null' && Profilelist[0].phonew!=undefined)
  {
  vCard.workPhone = '+' + Profilelist[0].phonew;
  }
  if(Profilelist[0].phonep !='' && Profilelist[0].phonep!= null && Profilelist[0].mobile!= 'null' && Profilelist[0].phonep!=undefined)
  {
    vCard.homePhone =  '+' + Profilelist[0].phonep;
  }  
  if(Profilelist[0].mobile !='' && Profilelist[0].mobile!= null && Profilelist[0].mobile!= 'null' && Profilelist[0].mobile!= undefined)
  {
    vCard.cellPhone =  '+' + Profilelist[0].mobile;
  }
  vCard.homeAddress.label = 'Address';
  vCard.homeAddress.street = Profilelist[0].flat;
  vCard.homeAddress.city =  Profilelist[0].city;
  vCard.homeAddress.stateProvince =  Profilelist[0].state;
  vCard.homeAddress.postalCode = Profilelist[0].postcode;
  vCard.homeAddress.countryRegion = Profilelist[0].country;
 
 // vCard.birthday = new Date(1985, 0, 1);
  vCard.title = Profilelist[0].designation;
  vCard.socialUrls['facebook'] = Profilelist[0].fb;
  vCard.socialUrls['linkedIn'] =Profilelist[0].linkedin;
  vCard.socialUrls['twitter'] = Profilelist[0].twitter;
  vCard.socialUrls['instagram'] = Profilelist[0].insta;
  vCard.socialUrls['youtube'] = Profilelist[0].youtube;
 
  vCard.url = 'https://www.lobsmartcard.me/'+Profilelist[0].type+'/'+Profilelist[0].uriid;
 // vCard.note = 'Notes on Eric';
 vCard.version = '4.0';
  //save to file
  //vCard.saveToFile('eric-nesser.vcf');
  //vCard.send(vCard.getFormattedString());

 // var blob = new Blob([vCard], { type: "text/vcard" });
 // var url = URL.createObjectURL(blob);
  var blob = new Blob([vCard.getFormattedString()], {
    type: "text/vcard"
  });
  var url = URL.createObjectURL(blob);
  if (navigator.share) {
  
    navigator.share({
    
      title: 'New Contacts',
      text: 'Save contacts',
      files: [new File([blob], 'newcontact.vcf', { type: 'text/vcard' })],
    }).then(() => { });

  } else {
      const newLink = document.createElement('a');
      newLink.download =  Profilelist[0].name + ".vcf";
      newLink.textContent = "Contact Save";
      newLink.href = url;

      newLink.click();

      // window.close();
  
  }

var blob = new Blob([vCard.getFormattedString()], {
    type: "text/vcard"
  });
  var url = URL.createObjectURL(blob);
  
  const newLink = document.createElement('a');
  newLink.download = Profilelist[0].name + ".vcf";
  newLink.textContent = "Contact Save";
  newLink.href = url;
  
  newLink.click();
  
  //get as formatted string
  console.log(vCard.getFormattedString());

}
const Gosocial = (a)=>{
  if(a=='0')
  {
    window.location.href="tel:"+Profilelist[0].mobile;
  }
  if(a=='1')
  {
   // window.location.href= "mailto:"+ Profilelist[0].mail;
    window.open("mailto:"+Profilelist[0].email, "_blank");
  }
  if(a=='2')
  {
    Gomap();
  }
  if(a=='3')
  {
    window.open("https://"+Profilelist[0].website, "_blank");
   // window.location.href = "https://"+Profilelist[0].website+ ", _blank";
  }
}

const Gomap = ()=>{

  let address = Profilelist[0].flat+','+Profilelist[0].street+','+Profilelist[0].city+','+Profilelist[0].postcode+','+Profilelist[0].state+','+Profilelist[0].country+','
 // console.log(address,'add');
   window.open("https://maps.google.com/maps?q="+ address + ", _blank");
 // window.location.href='https://maps.google.com/maps?q=' + address+', _blank';
}
if (Profilelist.length > 0) {
  return (
    <>
    <div className="col-xxl-4 col-xl-4 col-lg-4">
      <div className="LobSmartCard-parsonal-info-area">
        <div className="LobSmartCard-parsonal-info-wrap">
          <div className="LobSmartCard-parsonal-info-img">
        {/*}  <img src={`${Profilelist[0].proimage}`} alt="Admin" className="profile-img" width="250" />
 
  */} 
  {/*}  <Image              
              width={240}
              height={240}
              src={`${Profileimage}`}
              alt="author"
/>*/}
   {Profileimage!='https://www.laabamone.com/Lobsmart/images/' ?
            <img src={`${Profileimage}`}  width={240}
            height={240} alt="Profile" />
         
            :
            <Image
              width={240}
              height={240}
              src={"https://www.laabamone.com/Lobsmart/images/16938326901493467085.jpg"}
              alt="author"
            />
}
          </div>

          <span className="LobSmartCard-parsonal-info-name">
            <a href="#">{Profilelist[0].name} {Profilelist[0].lname}</a>
          </span>
          
          <h4 >
             {Profilelist[0].org}
          </h4>

          <span className="LobSmartCard-parsonal-info-bio mb-15">{Profilelist[0].designation}</span>
          <ul className="LobSmartCard-parsonal-info-social-link">
                <li>
                  <a style={{ color: "#1773EA" }} href="#" onClick={()=>GetVcard()}>
                    <i className="fa-duotone fa-contact-book"></i>
                  </a>
                </li> 
                <li >
                    <a style={{ color: "green" }} target="_blank" href={`https://api.whatsapp.com/send?phone=${Profilelist[0].phonewhat}`}>
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                </li> 
                </ul>
              <ul className="LobSmartCard-parsonal-info-social-link">
               
            {socialMediaData.map((elm, i) =>(<> 
              
              {elm.id=='1' && Profilelist[0].fb!='' &&
                  <li key={i} >
                <a style={{ color: elm.color }} target="_blank" href={`https://${Profilelist[0].fb}`}>
                  <i className={elm.className}></i>
                </a>
                </li>  
                 }  
                      
                 {elm.id=='2' && Profilelist[0].twitter!='' &&
                    <li key={i}>      
                          <a style={{ color: elm.color }} target="_blank" href={`https://${Profilelist[0].twitter}`}>
                            <i className={elm.className}></i>
                          </a>
                    </li>  
                 }                 
                 
                
                  {elm.id=='3' && Profilelist[0].insta!='' &&
                  <li key={i}>
                <a style={{ color: elm.color }} target="_blank" href={`https://${Profilelist[0].insta}`}>
                  <i className={elm.className}></i>
                </a>
                </li>  
                 }
                 {elm.id=='4' && Profilelist[0].linkedin!='' &&
                 <li key={i}>
                <a style={{ color: elm.color }} target="_blank" href={`https://${Profilelist[0].linkedin}`}>
                  <i className={elm.className}></i>
                </a>
                </li>  
                 }
                
                  {elm.id=='5' && Profilelist[0].youtube!='' &&
                  <li key={i}>
                    <a style={{ color: elm.color }} target="_blank" href={`https://${Profilelist[0].youtube}`}>
                      <i className={elm.className}></i>
                    </a>
                  </li> 
                 }
             
             </>))}
          </ul>

          <div className="LobSmartCard-parsonal-info-contact ">
            {contactData.map((elm, i) => (
              <>
              { (elm.id=='4' && Profilelist[0].website!='' && Profilelist[0].website!=undefined && Profilelist[0].website!=null ) ?
              <div key={i} style={{cursor:'pointer'}} onClick={()=>Gosocial(i)} className="LobSmartCard-parsonal-info-contact-item">
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
              <div key={i} onClick={()=>Gosocial(i)} style={{cursor:'pointer'}} className="LobSmartCard-parsonal-info-contact-item">
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
                       { Profilelist[0].flat  +' '+Profilelist[0].street}                    
                       {(Profilelist[0].landmark !='' && Profilelist[0].landmark !='null' &&  Profilelist[0].landmark !=undefined) ? ', '+ Profilelist[0].landmark :''}
                       <br></br>
                       {(Profilelist[0].city !='' && Profilelist[0].city !=null &&  Profilelist[0].city !=undefined) ? Profilelist[0].city :''}

                       {(Profilelist[0].postcode !='' && Profilelist[0].postcode !=null &&  Profilelist[0].postcode !=undefined) ? ' - '+Profilelist[0].postcode +',':''}
                            <br></br>
                       {(Profilelist[0].state !='' && Profilelist[0].state !=null &&  Profilelist[0].state !=undefined) ? Profilelist[0].state :''}
                       {(Profilelist[0].country !='' && Profilelist[0].country !=null &&  Profilelist[0].country !=undefined) ? ', '+Profilelist[0].country +'.':''}

                     
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
     <div className="nav__menu nav__mobile" id="nav-menu">
      <ul className="nav__list">
     
          <li className="nav__item">
              <a href="#" onClick={()=>GetVcard()} className="nav__link">
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
              <a  href="#" onClick={()=>Gosocial(1)} className="nav__link">
              <div  className="LobSmartCard-parsonal-info-contact-item">
                <div
                  style={{ color: `#6AB5B9`, fontSize: `22px` }}
                  className="icon"
                >
                  <i className="fa-regular fa-envelope-open-text"></i>
                </div>
              
              </div>
                 
              
                 
              </a>
          </li>

          <li className="nav__item">
              <a href={`https://api.whatsapp.com/send?phone=${Profilelist[0].phonewhat}`}  target="_blank" className="nav__link">
                 
              <div  className="LobSmartCard-parsonal-info-contact-item">
                <div
                  style={{ color: `#FD7590`, fontSize: `22px` }}
                  className="icon"
                >
                 <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>

                </div>
              
              </div>
               
                 
              </a>
          </li>

          <li className="nav__item">
              <a href="#" onClick={()=>Gosocial(0)}  className="nav__link">
              <div  className="LobSmartCard-parsonal-info-contact-item">
                <div
                  style={{ color: `#6AB5B9`, fontSize: `22px` }}
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
</div>
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
