"use client"
import FeedBack from '@/components/Home/FeedBack';
import Menubar from '@/components/Home/Menubar';
import Product from '@/components/Home/Product';
import Slider from '@/components/Home/Slider';
import { useEffect, useState } from 'react';
 
const Layout = ({children}) => {
    const [data,setData] = useState([])
   
    const message = [
      {
      q:"Hi",
      a:"How can I help you?"
    },
    {
      q:"hi",
      a:"How can I help you?"
    },
      {
      q:"3",
      a:"my name is sadman"
    },
    {
      q:"am bikri suru hobe kobe theke",
      a:"June 1ts week"
    },
    
    
  ]
    const [mes,setMes] = useState("")
     const [toggle,setToggle] = useState(false)
    const handleSubmit = e =>{
       e.preventDefault()
      if(message.some(item=>item.q==mes)){
        const filter = message.filter(item=>item.q==mes)
        console.log(filter);
        setData(prev=>[...prev,...filter])
      }
      else{
        setData(prev=>[...prev,{q:"default",a:"Please contact 01730894498"}])
      }
    }
   
    useEffect(()=>{
      if(!toggle){
        setData([])
      }
    },[toggle])

    return (
        <div>
            <Menubar/>
            
            {children}
           <div>
           { !toggle &&  <button className='bg-red-900 text-white px-5 py-3 fixed bottom-4 right-2' onClick={()=>setToggle(true)}>chatboot</button>}
             
             {toggle && <div className='fixed bottom-1 right-4 h-96  w-72 overflow-y-auto   border-1 bg-gray-100 rounded-md px-3 py-2 '>
             { toggle &&  <button className='bg-red-900 text-white px-2 py-1 fixed right-6 rounded-md' onClick={()=>setToggle(false)}>x</button>}
                 {
                  data.map((item,index)=><div key={index} className=' z-50'>
        <h1>{item.a}</h1>
        </div>)
                 }
             <div className='fixed bottom-0'>
                <form onSubmit={handleSubmit}>
                <input  onChange={(e)=>setMes(e.target.value)}  className=' border-4 border-slate-950   w-40 py-2 px-2'/>
                </form> 
             </div>
              </div>}
           </div>
            <footer className='max-h-screen flex justify-end flex-col border mt-28'>
                <h2 className='text-center  bg-zinc-200 text-black font-bold py-2  '>Copyright@ Chapai Agro Product Marketicng Co. Ltd. | All rights reserved</h2>
            </footer>
        </div>
    );
};

export default Layout;