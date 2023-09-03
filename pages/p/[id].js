import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import val from ""
import Header from '../header';
import Footer from '../Footer';
import Navbar from '../Navbar';
import AboutMe from '../AboutMe';
import Contact from '../Contact';
import Product from '../Product';
import { useParams } from 'react-router';


import BottomNav from '../fixedBottomNav/bottomNav';

export default function MainPg(props) {

    // console.log('jj', props.profileuniqueid);
    const pid = props.profileuniqueid;
    const [Profilelist, setProfilelist] = useState([]);
    const [Profileimage, setProfileimage] = useState('');
    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&uniqueid=' + pid);
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
            getProfile();
        }


    }, [pid]); // Empty dependency array means this effect runs once after initial render
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
                                    <div className='content-box menubar-contents' id="#service">
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
                loading..
            </>
        )
    }
}
export async function getServerSideProps(context) {



    // const router = useRouter()
    const type1 = context.params.id;
    //  console.log('--------------', type1);


    /* const pin = jsCookie.get('postcode');
     const pincode = pin ? pin : '3000';
     const pos = pin ? pin : '';
     
     const cit = jsCookie.get('city');
     const city = cit ? cit : 'Melbourne';
     let url = "https://admin.darshandrivingschool.com.au/aboutusapi.php?type=metatagblog&type1="+type1+"&pin="+pincode+"&location="+city+"";
     let requestOptions = {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
       },
     };
    
     const res = await fetch(url, requestOptions);
     const resJson = await res.json();
     const mdesc = resJson[0].metadescription;
    // const mymdesc = mdesc.substring(0,50);
     const mettitle = resJson[0].metatitle;
     const medesc = mdesc;
     const mekey = resJson[0].metakeywords;
     const ogt = resJson[0].og_tag;
   
     return {
       props: {
         pagemtitle: mettitle,
         pagemdesc :medesc, 
         pagemkey  : mekey,
         pageogtag_pr0 : ogt[0].property0,
         pageogtag_co0 : ogt[0].content0, 
         pageogtag_pr1 : ogt[1].property1,
         pageogtag_co1 : ogt[1].content1,
         pageogtag_pr2 : ogt[2].property2,
         pageogtag_co2 : ogt[2].content2,
         pageogtag_pr3 : ogt[3].property3,
         pageogtag_co3 : ogt[3].content3,
         pageogtag_pr4 : ogt[4].property4,
         pageogtag_co4 : ogt[4].content4,
         pageogtag_pr5 : ogt[5].property5,
         pageogtag_co5 : ogt[5].content5,
         pageogtag_pr6 : ogt[6].property6,
         pageogtag_co6 : ogt[6].content6,
         pageogtag_pr7 : ogt[7].property7,
         pageogtag_co7 : ogt[7].content7,
         pageogtag_pr8 : ogt[8].property8,
         pageogtag_co8 : ogt[8].content8,
         pageogtag_pr9 : ogt[9].property9,
         pageogtag_co9 : ogt[9].content9,
         pageogtag_pr10 : ogt[10].property10,
         pageogtag_co10 : ogt[10].content10,
         pageogtag_pr11 : ogt[11].property11,
         pageogtag_co11 : ogt[11].content11,
         pageogtag_pr12 : ogt[12].property12,
         pageogtag_co12 : ogt[12].content12,
         pageogtag_pr13 : ogt[13].property13,
         pageogtag_co13 : ogt[13].content13,
       },
     };*/
    return {
        props: {
            profileuniqueid: type1,
        }
    };
}
