import Hero from "@/components/preview/Hero";
import Buy from "@/components/preview/Buy";
import CopyRight from "@/components/preview/CopyRight";
import Demo from "@/components/preview/Demo";
import Features from "@/components/preview/Features";
import Home3 from "@/app/(homes)/home-3/page";

import "../public/assets/css/style.css";
import Preloader from "@/components/homes/Preloader";
export const metadata = {
  title: 'Preview || LobSmartCard - Professional portfolio NextJS Template',
  description: 'Discover Botami,the most impressive portfolio template for work showcase, blog'
}
export default function page() {
  return (
    <>
  {/*<Hero/>
<Demo/>
<Features/>
<Buy/>

  <CopyRight/>*/}
   
   <Home3 />
   
  


</>
  )
}
