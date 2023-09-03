
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


import Image from 'next/image'
import Link from 'next/link';
import axios from 'axios';
import jsCookie from 'js-cookie';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import Helmet from "react-helmet";


//const Boxes4 = lazy(() => import('./boxes4home'));
import Head from 'next/head'
function Home1() {

    const pin = jsCookie.get('postcode');
    const pincode = pin ? pin : '3000';
    const pos = pin ? pin : '';
    const cit = jsCookie.get('city');
    const city = cit ? cit : 'Melbourne';


    const [ninjashome1, setUsershome1] = useState([]);
    const [ninjascount, setUserscount] = useState([]);
    const [userm, setMeta] = useState([]);
    const [users3, setUsers3] = useState([]);
    const [getgeneral_phoneno, setgeneral_phoneno] = useState([]);
    const [bannerimg, setbannerimg] = useState([]);
    const [bannercont, setbannercont] = useState([]);
    useEffect(() => {





    }, [])




    return (



        <div className="page-wrapper">
            <div>hi</div>

            {/*  <div className="loader-wrap">
        <div className="preloader"><div className="preloader-close">Preloader Close</div></div>
        <div className="layer layer-one"><span className="overlay"></span></div>
        <div className="layer layer-two"><span className="overlay"></span></div>        
        <div className="layer layer-three"><span className="overlay"></span></div>        
    </div>*/}




        </div>

    );

}

export default Home1;
