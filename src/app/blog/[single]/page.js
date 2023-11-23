 
"use client"
import Layout from "../../customLayout/layout";
import { useParams } from "next/navigation";
import { useState } from "react";
import axios from "../../../components/api/axios";
import { useEffect } from "react";

const Home = () => {
  const d = useParams();
  const [data,setData] = useState({})
console.log(d);
 useEffect(()=>{
  axios.get(`/blog/${d?.single}`)
  .then(res=>{
   
    setData(res?.data?.result)
  })
 },[])
  return (
    <Layout>
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-2   items-center place-content-center gap-6">
          <div>
            <img src={data?.img} alt="loading..." />
          </div>
          <div>
            {/* lab test related page  */}
            <h1 className="text-5xl font-bold my-5">Description</h1>
            <span className="block w-28 h-1 bg-black mb-5"></span>
            <p className="text-xl justify-end">
             {data?.description}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
