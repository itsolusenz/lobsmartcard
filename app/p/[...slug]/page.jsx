


"use client"

import React, { useEffect, useState } from "react";
import Preloader from '@/components/homes/Preloader'
import AboutThree from '@/components/homes/about/AboutThree'
import BlogsThree from '@/components/homes/blogs/BlogsThree'
import HeaderFour from '@/components/homes/headers/HeaderFour'
import HeaderThree from '@/components/homes/headers/HeaderThree'
import PersonalInfoThree from '@/components/homes/personalInfo/PersonalInfoThree'
//import React from 'react'

export default function Page({params}) {
 const slug1 = params.slug[0];
 const slug2 = params.slug[1];
 const [Profilelist, setProfilelist] = useState('');
 console.log('slug1',slug1)
 useEffect(() => { 
  const getProfile = async (pid) => {
    
    
    try {
     // console.log('---------',pid)
        const response = await fetch('https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&uriid=' + pid);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json();        
        console.log('json',json);       
        setProfilelist(json);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

    getProfile(slug1);


}, [slug1,slug2]);

if(Profilelist.length>0)
{
  console.log('---ddd---',Profilelist[0])
  return (
    <><Preloader/>
  
      <div className="page-wrapper home-3" >
        
       {/*} <HeaderFour  />*/}
        <div className="container z-index-3">
            <div className="row">

                <PersonalInfoThree id={params.slug[0]}/>
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                    <HeaderThree slug="p" slug1={slug1} slug2={slug2} plen={Profilelist[0].proudctdetails[0].count} slen={Profilelist[0].servicedetails[0].count} />
                    {params.slug[1] =='products' ?
                       <BlogsThree product={Profilelist[0].proudctdetails} title={"Products"}/>
                       : params.slug[1] =='services'  ?
                       <BlogsThree product={Profilelist[0].servicedetails} title={"Services"}/>
                   
                       :
                       <AboutThree id={params.slug[0]}/>
                    }
                </div>


            </div>
            </div>
        </div>
      
  </>
   
  )
}
else
{
  return (
    <><Preloader/>
   <div className="page-wrapper home-3" >
        
        <HeaderFour/>
        <div className="container z-index-3">
           
            </div>
        </div>
     
      
  </>
   
  )
}

  
}
{/*export async function getServerSideProps(context) {

  const slug1 = context.params.slug[0];
  const slug2 = context.params.slug[1];

  let url = 'https://www.laabamone.com/Lobsmart/api.php?eventtype=lob_Getprofile&uriid=' + slug1;
  let requestOptions = {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      },
  };

  const res = await fetch(url, requestOptions);
  const resJson = await res.json();
  const pro_cnt = resJson[0].count;
  const mettitle = resJson[0].name;
  const medesc = resJson[0].aboutcontent;
  const mekey = 'LobsmartCart' + ', ' + resJson[0].name;

  


  return {
      props: {
          param1: slug1,
          param2: slug2,
          pagemtitle: mettitle,
          pagemdesc: medesc,
          pagemkey: mekey,
          productcount: pro_cnt,
          productfull: resJson          
      },
  };
}*/}
