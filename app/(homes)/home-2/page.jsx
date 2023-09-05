import Preloader from '@/components/homes/Preloader'
import HeaderFive from '@/components/homes/headers/HeaderFive'
import HeaderTwo from '@/components/homes/headers/HeaderTwo'
import PersonalInfoTwo from '@/components/homes/personalInfo/PersonalInfoTwo'
import React from 'react'

export const metadata = {
  title: 'Home-2 || LobSmartCard - Professional portfolio NextJS Template',
  description: 'Discover Botami,the most impressive portfolio template for work showcase, blog'
}
export default function page() {
  return (
    <><Preloader/>
   <div className="page-wrapper page-wrapper-2" >
      
        <HeaderFive/>
        <div className="LobSmartCard-page-area z-index-3">
            <div className="container">
              

                <PersonalInfoTwo/>

            </div>

            </div>
        </div>
  
  </>
   
  )
}
