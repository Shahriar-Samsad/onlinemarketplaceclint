import  { useEffect, useState } from "react";
import axios from "../api/axios";
import Link from "next/link";
const Additional = () => {
  const [blog,setBlog] = useState([]);
  useEffect(()=>{
    axios.get("/blog")
    .then(res=>{
      console.log(res);
      setBlog(res?.data?.result)
    })
    .catch(err=>{
      console.log(err.message);
    })
  },[])
  return (
    <div className="container mx-auto my-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-gray-500">
          <img src="am.jpg" className="w-20 h-20" alt="loading" />
          <p className="my-10">
            Our mission is making the CaC2 free mangos of Chapai Nowabgonj available to the people of the country. 
          </p>
          <h3 className="text-2xl">Office</h3>
          <p>Alompur, Gomostapur, Chapai Nowabgonj</p>
          <p>01730894487</p>
        </div>
        <div className="text-gray-500">
          <h1 className="capitalize my-5">POSTS</h1>

         { blog.slice(0,4).map((item,index)=> <Link href={`/blog/${item._id}`} className="flex space-x-2 my-2" key={index}>
            <img src={item?.img} className="w-20 h-20" alt="loading" />
            <div>
              <p> {item?.name}</p>
              <p>{item?.createdAt} </p>
            </div>
          </Link>)}
        </div>
        <div className="text-gray-500">
          
          <h1>USEFULL LINKS</h1><br/>
          <Link href="/condition">Terms and Condition</Link>
        </div>
        <div className="text-gray-500">
          <h1>COUIER PICKUP LOCATION</h1><br/>
          <p>128/2 East Tejturi Bazar, Karwan Bazar, Dhaka </p>
              <p>H# 432, Kallyanpur, Dhaka </p>
              <p>Mirpur 10</p>
              <p>A.K khan, Chattogram</p>
        </div>
      </div>
    </div>
  );
};

export default Additional;
