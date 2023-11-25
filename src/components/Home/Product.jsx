import axios from "../api/axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Product = () => {
    const [data,setData] = useState([])
    console.log(' ');
   useEffect(()=>{
    axios.get("/product")
    .then(res=>{
      console.log(res);
      setData(res?.data?.result)
    })
   },[])
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col justify-center items-center">
       <h1 className="text-center mb-10 text-2xl font-bold">Categories</h1>
      </div>
      <div className="grid grid-cols-4 gap-y-6">
        {data?.map((item, index) => (
         <>
         <Mango key={index} data={item} />  
          </>
        ))}
      </div>
      
    </div>
  );
};

export default Product;
const Mango = ({data}) => {
  console.log(data);
  return (
    <Link href={`/product/${data?._id}`} className="p-5 border-2 mx-2">
      <div className="relative hover:overflow-hidden">
        <img
          src={data?.img}
          className="w-full h-48 hover:scale-125 transition-transform transition-500"
        />
        <span className="rounded-md absolute top-1 left-1 bg-red-500 text-white p-1 text-[12px]">
          Available from next season
        </span>
      </div>
      <div className="flex flex-col items-center">
        <h1>  {data?.name}</h1>
        <p className="text-green-700">Price  {data?.price}</p>
      </div>
    </Link>
  );
}; 

 