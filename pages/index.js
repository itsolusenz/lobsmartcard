
//import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Script from 'next/script'
import jsCookie from 'js-cookie';
import Main from './Main';
//const Home1 = React.lazy(() => import("./Home1.js"));
//const Home1 = lazy(() => import('./Home1'));
import Head from 'next/head';
import Helmet from "react-helmet";
import { BrowserRouter, Route } from "react-router-dom";

import axios from 'axios';


export default function Home(props) {
  // console.log('proops',props.pagemtitle)
  const [post, setpost] = useState([]);
  const [post1, setpost1] = useState([]);
  useEffect(() => {
    const pin = jsCookie.get('postcode');
    const pincode = pin ? pin : '3000';
    const pos = pin ? pin : '';
    const cit = jsCookie.get('city');
    const city = cit ? cit : 'Melbourne';

    const loadmetatag = async () => {
      const response4 = await axios.get("https://admin.darshandrivingschool.com.au/aboutusapi.php?type=metatag&type1=home&pin=" + pos + "");
      // console.log('metatag',response4.data[0]);
      setpost(response4.data[0].metatitle);
      setpost1(response4.data[0].metadescription);

    }

    loadmetatag();



  }, [])

  return (
    <div>

      <Helmet>
        <title >{props.pagemtitle}</title>
        <meta name="keywords" content={props.pagemkey} />
        <meta name="description" content={props.pagemdesc} />
        <meta name={props.pageogtag_pr0} content={props.pageogtag_co0} />
        <meta name={props.pageogtag_pr1} content={props.pageogtag_co1} />
        <meta name={props.pageogtag_pr2} content={props.pageogtag_co2} />
        <meta name={props.pageogtag_pr3} content={props.pageogtag_co3} />
        <meta name={props.pageogtag_pr4} content={props.pageogtag_co4} />
        <meta name={props.pageogtag_pr5} content={props.pageogtag_co5} />
        <meta name={props.pageogtag_pr6} content={props.pageogtag_co6} />
        <meta name={props.pageogtag_pr7} content={props.pageogtag_co7} />
        <meta name={props.pageogtag_pr8} content={props.pageogtag_co8} />
        <meta name={props.pageogtag_pr9} content={props.pageogtag_co9} />
        <meta name={props.pageogtag_pr10} content={props.pageogtag_co10} />
        <meta name={props.pageogtag_pr11} content={props.pageogtag_co11} />
        <meta name={props.pageogtag_pr12} content={props.pageogtag_co12} />
        <meta name={props.pageogtag_pr13} content={props.pageogtag_co13} />

      </Helmet>



      <Main></Main>








    </div>


  )
}
export async function getServerSideProps() {
  const pin = jsCookie.get('postcode');
  const pincode = pin ? pin : '3000';
  const pos = pin ? pin : '';

  const cit = jsCookie.get('city');
  const city = cit ? cit : 'Melbourne';
  let url = "https://admin.darshandrivingschool.com.au/aboutusapi.php?type=metatag&type1=home&pin=" + pincode + "";
  let requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(url, requestOptions);
  const resJson = await res.json();
  const mettitle = resJson[0].metatitle;
  const medesc = resJson[0].metadescription;
  const mekey = resJson[0].metakeywords;
  const ogt = resJson[0].og_tag;

  return {
    props: {
      pagemtitle: mettitle,
      pagemdesc: medesc,
      pagemkey: mekey,
      pageogtag_pr0: ogt[0].property0,
      pageogtag_co0: ogt[0].content0,
      pageogtag_pr1: ogt[1].property1,
      pageogtag_co1: ogt[1].content1,
      pageogtag_pr2: ogt[2].property2,
      pageogtag_co2: ogt[2].content2,
      pageogtag_pr3: ogt[3].property3,
      pageogtag_co3: ogt[3].content3,
      pageogtag_pr4: ogt[4].property4,
      pageogtag_co4: ogt[4].content4,
      pageogtag_pr5: ogt[5].property5,
      pageogtag_co5: ogt[5].content5,
      pageogtag_pr6: ogt[6].property6,
      pageogtag_co6: ogt[6].content6,
      pageogtag_pr7: ogt[7].property7,
      pageogtag_co7: ogt[7].content7,
      pageogtag_pr8: ogt[8].property8,
      pageogtag_co8: ogt[8].content8,
      pageogtag_pr9: ogt[9].property9,
      pageogtag_co9: ogt[9].content9,
      pageogtag_pr10: ogt[10].property10,
      pageogtag_co10: ogt[10].content10,
      pageogtag_pr11: ogt[11].property11,
      pageogtag_co11: ogt[11].content11,
      pageogtag_pr12: ogt[12].property12,
      pageogtag_co12: ogt[12].content12,
      pageogtag_pr13: ogt[13].property13,
      pageogtag_co13: ogt[13].content13,
    },
  };
}
