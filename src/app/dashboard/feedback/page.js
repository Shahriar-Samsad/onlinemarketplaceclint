"use client"
 
import axios from "../../../components/api/axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
import Layout from "../dashboardLay/layout";
const Home = () => {
    const [formData, setFormData] = useState({
        title: 'Just Perfect',
        rating:5,
        details: 'this product is awesome',
      });
      
      const [review,setReview] = useState([])
      async function getReview(){
        try {
         
            console.log(formData);
            // Replace 'your-api-endpoint' with the actual API endpoint where you want to send the data.
            const response = await axios.get('/review' );
            // Handle the response (e.g., show a success message or redirect to another page).
            console.log('Data sent successfully:', response.data);
           
            if(response.status==200){
                 setReview(response.data.result)
            }
          } catch (error) {
            toast.error(error.message)
          }
      }
      useEffect(()=>{
        getReview()
      },[])
      const handleDelete = async(id)=>{
        try {
         
         console.log(id);
            // Replace 'your-api-endpoint' with the actual API endpoint where you want to send the data.
            const response = await axios.delete(`/review/${id}` );
            // Handle the response (e.g., show a success message or redirect to another page).
            console.log('Data sent successfully:', response.data);
           
            if(response.status==200){
                getReview()
                  toast.success("delete successfully")
              
            }
          } catch (error) {
            toast.error(error.message)
          }
      }
    return (
        <Layout>
        <div className="container mx-auto">
            <div className="flex justify-center">
                
            <div className="w-full"> 
            <h1 className="capitalize text-center text-gray-600 font-bold text-2xl mt-20 mb-5"> feedback</h1>
             
            </div>
            </div> 
            
            
          <div   >

         <div className="flex items-center justify-center  h-full py-5 ">
         <Carousel
          autoPlay
          additionalTransfrom={0}
         showDots={false}
          customDot={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container mx-3"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="  bg-gray-100/20  rounded-md "
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
        responsive={{

         laptop: {
    breakpoint: {
      max: 1920,
      min: 1025,
    },
    items: 3,
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1921,
    },
    items: 5,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 465,
    },
    items: 2,
  },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
     
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        { 
        review.map((item,index)=>
         <div key={index} className="py-20 h-full w-full  ">
   
 <div className="relative bg-white px-4 py-10 rounded-md flex justify-center z-50 space-x-4 mx-3 border">
    <div className="text-center ">
    <div className="text-center flex justify-center mb-">
        <img src="/am.jpg" alt="loading"  className="w-20 h-20 rounded-full border-4 border-white absolute -top-10"/>
    </div>
   <h1 className="mt-  "> {item?.title}</h1>
   <div className="flex justify-center">
   <ReactStars
    count={5}
    size={24}
    isHalf={true}
    activeColor="#ffd700"
  value={item?.rating}
   edit={false}
  />
   </div>
 
   <p> {item?.details}</p>
   <h2> {item?.name}</h2>
   <button onClick={()=>handleDelete(item?._id)} className="border py-2 px-3 bg-gray-100 rounded-md">delete</button>
    </div>
 </div>
  
           </div>
        
        )}
      </Carousel>
         </div>
     
      
</div>
        </div>
        </Layout>
    );
};

export default Home;