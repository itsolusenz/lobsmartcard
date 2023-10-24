import Hero from "@/components/preview/Hero";
import Buy from "@/components/preview/Buy";
import CopyRight from "@/components/preview/CopyRight";
import Demo from "@/components/preview/Demo";
import Features from "@/components/preview/Features";
import Home4 from "@/components/front/src/app/page";
import Footer from "./footer";

import "../public/assets/css/style.css";
import Preloader from "@/components/homes/Preloader";
export const metadata = {
  title: 'Preview || LobSmartCard ',
  description: 'LobSmartCard'
}
export default function page() {
  return (
    <>
  {/*<Hero/>
<Demo/>
<Features/>
<Buy/>

  <CopyRight/>*/}
   
   <Home4 />
  
  


</>
  )
}
