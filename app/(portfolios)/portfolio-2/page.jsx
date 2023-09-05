
import Preloader from '@/components/homes/Preloader'
import HeaderTwo from '@/components/homes/headers/HeaderTwo'
import PortfolioTwo from '@/components/homes/portfolio/PortfolioTwo'

import ResumeTwo from '@/components/homes/resume/ResumeTwo'
import React from 'react'
export const metadata = {
  title: 'Portfolio-2 || LobSmartCard - Professional portfolio NextJS Template',
  description: 'Discover Botami,the most impressive portfolio template for work showcase, blog'
}
export default function page() {
  return (
    <><Preloader/>
  
   <div className="page-wrapper page-wrapper-2"  style={{backgroundImage:'url(/assets/img/bg/page-bg-1.jpg)'}} >
     
        <HeaderTwo/>
        <PortfolioTwo/>
        </div>
  </>
   
  )
}
