"use client"
import React, { useEffect, useState } from 'react';
import axios from '../../../components/api/axios';
import Layout from '../dashboardLay/layout';

const Home = () => {
  const [formData, setFormData] = useState({
    name: 'Gopalvog',
    price: 100,
    available_time: 'June 1st week',
    availability: '10 Days',
    brix: 10,
    labtested: 'yes',
    content: 'nice am',
    CaC2:"no"
  });
  const [imageFile, setImageFile] = useState(null);
  const [data,setData] = useState([])
async function getProducts(){
  axios.get("/product")
  .then(res=>{
    console.log(res);
    setData(res?.data?.result)
  })
}
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('price', formData.price);
      data.append('available_time', formData.available_time);
      data.append('availability', formData.availability);
      data.append('brix', formData.brix);
      data.append('labtested', formData.labtested);
      data.append('content', formData.content);
      data.append('img', imageFile);
      data.append('labUrl',formData.testUrl);
      // Replace 'your-api-endpoint' with the actual API endpoint where you want to send the data.
      const response = await axios.post('/product', data);
      // Handle the response (e.g., show a success message or redirect to another page).
      console.log('Data sent successfully:', response.data);
      getProducts()
      if(response.status==200){
        alert("success")
      }
    } catch (error) {
      // Handle errors (e.g., show an error message).
      console.error('Error sending data:', error.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleChange = (e) => {     
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  
  console.log(' ');
 useEffect(()=>{
   getProducts()
 },[])
 const handleDelete = (id) =>{
  axios.delete(`/product/${id}`)
  .then(res=>{
    getProducts()
    console.log(res);
    
  })
 }
  return (
    <Layout>
    <div className="bg-gray-100   p-4 flex items-center flex-col space-y-0">
      <div className="bg-white p-8 rounded shadow-md max-w-md mb-20">
        <h1 className="text-2xl font-semibold mb-4">Post Data with Image</h1>
        <form onSubmit={handleSubmit}>
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
            <label className="block text-sm font-medium">Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Available Time:</label>
            <input
              type="text"
              name="available_time"
              value={formData.available_time}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Availability:</label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Brix:</label>
            <input
              type="number"
              name="brix"
              value={formData.brix}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Lab Tested:</label>
            <select
              name="labtested"
              value={formData.labtested}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Content:</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">CaC2:</label>
            <textarea
              name="text"
              value={formData.CaC2}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
         
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
      <div className='container mx-auto grid grid-cols-2 mt-20 gap-10 my-20'>
       { data.map(item=><div className='flex justify-between gap-5' key={item?._id}>
        <img src={item.img} className='h-32 w-32' />
       
          <h1>{item.name}</h1>
          <button className='px-3 w-20 h-10 py-2 bg-red-700 my-3 rounded-md '  onClick={()=>handleDelete(item._id)}>delete</button>
        </div>)}
      </div>
    </div>
    </Layout>
  );
};

export default Home;
