"use client"
import BLog from '@/components/Home/BLog'
import FeedBack from '@/components/Home/FeedBack'
import Menubar from '@/components/Home/Menubar'
import PremiumMango from '@/components/Home/PremiumMango'
import Product from '@/components/Home/Product'
import Service from '@/components/Home/Service'
import Slider from '@/components/Home/Slider'
import Layout from './customLayout/layout'
import Additional from '@/components/Home/Additional'
 

export default function Home() {
  return (
    <main >
      {/* <Layout/> */}
        {/* <Menubar/> */}
        {/* <Slider/>
        <Product/> */}
        {/* <PremiumMango/> */}
        {/* <Service/> */}
        {/* <BLog/> */}
        {/* <FeedBack/> */}
        <Layout>
        <Slider/>
        <Product/>
        {/* <PremiumMango/> */}
        {/* <Service/> */}
        {/* <BLog/> */}
        <FeedBack/>
        <Additional/>
        </Layout>
    </main>
  )
}
