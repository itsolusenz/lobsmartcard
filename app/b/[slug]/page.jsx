





import Preloader from '@/components/homes/Preloader'
import AboutThree from '@/components/homes/about/AboutThree'
import HeaderFour from '@/components/homes/headers/HeaderFour'
import HeaderThree from '@/components/homes/headers/HeaderThree'
import PersonalInfoThree from '@/components/homes/personalInfo/PersonalInfoThree'
import React from 'react'
export const metadata = {
    title: 'LobSmartCard ',
    description: 'Discover LobSmartCard,the most impressive portfolio template for work showcase, blog'
  }
export default function Page({params}) {
  
  return (
    <><Preloader/>
  
   <div className="page-wrapper home-3" >
        
        <HeaderFour/>
        <div className="container z-index-3">
            <div className="row">

                <PersonalInfoThree id={params.slug}/>
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                    <HeaderThree />
                    <AboutThree/>
                </div>


            </div>
            </div>
        </div>
  </>
   
  )
}
