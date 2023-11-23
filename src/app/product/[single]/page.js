"use client"
 
import Layout from '@/app/customLayout/layout';
import axios from '../../../components/api/axios';
import { redirect, useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import  Modal from 'react-modal';
 
const Home = () => {
    const router = useRouter()
    const d = useParams();
    const [data,setData] = useState({})
  console.log(d);
   useEffect(()=>{
    axios.get(`/product/${d?.single}`)
    .then(res=>{
      console.log(res);
      setData(res?.data.result)
    })
   },[])
   const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData,[name]: value });
    console.log(formData);
  };
const d1 = useRouter()
  const handleSave =async (e) => {
    e.preventDefault()
    try {
  
      // Replace 'your-api-endpoint' with the actual API endpoint where you want to send the data.
      const response = await axios.post('/init', {...formData,price:data?.price});
      // Handle the response (e.g., show a success message or redirect to another p 
      console.log(response);
      d1.push(response?.data?.result)
      redirect(response?.data?.result)
      console.log('Data sent successfully:', response.data);
      
    } catch (error) {
      // Handle errors (e.g., show an error message).
      console.error('Error sending data:', error.message);
    }
    
  };
    return (
      <Layout>
    <div className='container mx-auto flex justify-around space-x-6 mt-28'>
        <div className='w-full'>
            <img src={data?.img} width={100} height={50} className='h-3/4 w-full ' alt='loading'/>
            <div className='w-1/4 flex  '>
            <img src={data?.img}   className='w-full h-full my-3 ' alt='loading'/>
            <img src={data?.img}   className='w-full h-full m-3' alt='loading'/>
            <img src={data?.img}   className='w-full h-full my-3' alt='loading'/>
         </div>
         </div>
      <div className=' w-full'>
         <h1 className='text-7xl mt-5 text-lime-600'>{data?.name}</h1>
     <h2 className='text-5xl mt-5 flex items-center text-gray-500 mx-2'>  Price:{data?.price}</h2>
     <h2 className='text-2xl my-5 flex items-center text-gray-500'> <span className='w-2 h-2 bg-gray-500 rounded-full block mx-2'> </span> Purity:100% Calcium Carbide (CaC2) free | Lab tested </h2>
      <h3 className='text-2xl my-5 flex items-center text-gray-500'> <span className='w-2 h-2 bg-gray-500 rounded-full block mx-2'> </span> Collected:  Chapai Nowabgonj</h3>
      <h3 className='text-2xl my-5 flex items-center text-gray-500'> <span className='w-2 h-2 bg-gray-500 rounded-full block mx-2'> </span> Size : 5-6 piece per kg</h3>
      <h3 className='text-2xl my-5 flex items-center text-gray-500'> <span className='w-2 h-2 bg-gray-500 rounded-full block mx-2'> </span> Packing : Smart Packing</h3>
      <h3 className='text-2xl my-5 flex items-center text-gray-500'> <span className='w-2 h-2 bg-gray-500 rounded-full block mx-2'> </span> Available time : {data?.available_time}</h3>
      <h3 className='text-2xl my-5 flex items-center text-gray-500'> <span className='w-2 h-2 bg-gray-500 rounded-full block mx-2'> </span> Availability : {data?.availability}</h3>
      <h3 className='text-2xl my-5 flex items-center text-gray-500'> <span className='w-2 h-2 bg-gray-500 rounded-full block mx-2'> </span> Brix : {data?.brix}</h3>
      {/* <h4>{data?.availability}</h4> */}
     <p className='text-2xl text-red-600'>Note : থানা পর্যায়ে কুরিয়ার এর অফিস ডেলিভারি হবে</p>
    
     <div className='mt-10 border-2 text-white font-700 px-3 py-2 bg-lime-600 rounded-md text-center'> 
     <Modals handleChange={handleChange} handleSave={handleSave} setData={setData} formData={formData}/>
     </div>
      </div>
        </div>
        <div className="container mx-auto mt-28">
          <div>
            <h1 className="text-5xl underline font-semibold text-center">Lab Report</h1>
          </div>
          <div className='col-2 mt-24 mx-48'>
            <img src="/lab test.jpg" alt="loading..." />
          </div>
        </div>
      </Layout>
    );
};

export default Home;

 export const Modals = ({handleChange,handleSave,setData,formData}) =>{
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
 
  let subtitle;
  const [modalIsOpen, setIsOpen] =  useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  
  }

  function closeModal() {
    setIsOpen(false);
  }
  return(
    <div>
        <button onClick={openModal}>Buy Now</button>
        <Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
     
    <form>
    <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
      <div className="relative bg-white w-full p-4 rounded shadow-lg">
        <div className="text-right">
          <button
            className="text-gray-700 hover:text-red-500 text-2xl"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Add Contact</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-sm"
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </form>
  </Modal>
    </div>
   
  )
 }