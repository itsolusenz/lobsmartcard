import Preloader from '@/components/homes/Preloader'
import ContactTwo from '@/components/homes/contact/ContactTwo'

import HeaderTwo from '@/components/homes/headers/HeaderTwo'


import React from 'react'
export const metadata = {
  title: 'Contact-2 || LobSmartCard - Professional portfolio NextJS Template',
  description: 'Discover Botami,the most impressive portfolio template for work showcase, blog'
}
export default function page() {
  return (
    <><Preloader/>
  
  <div className="page-wrapper page-wrapper-2"  style={{backgroundImage:'url(/assets/img/bg/page-bg-1.jpg)'}} >
      
        <HeaderTwo/>
        <ContactTwo/>
        </div>
  </>
    
  )
}
