import Header from '@/components/homes/headers/Header'
import PersonalInfo from '@/components/homes/personalInfo/PersonalInfo'
import AboutOne from '@/components/homes/about/AboutOne'
import Resume from '@/components/homes/resume/Resume'
import React from 'react'
import Preloader from '@/components/homes/Preloader'
import MenuTwo from '@/components/homes/menus/MenuTwo'


export const metadata = {
  title: 'Home-1 || LobSmartCard - Professional portfolio NextJS Template',
  description: 'Discover Botami,the most impressive portfolio template for work showcase, blog'
}


export default function page() {
  return (
    <><Preloader/>
  
   <div className="page-wrapper home-1" id='home-1' >
     
        <Header/>
        <div className="container z-index-3">
            <div className="row">
                <PersonalInfo/>
                <AboutOne/>
                <MenuTwo/>
               

            </div>
            </div>
        
        
        </div>
  </>
   
  )
}
