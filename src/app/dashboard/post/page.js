"use client"
import React, { useEffect, useState } from 'react';
import axios from '../../../components/api/axios';
import Layout from '../dashboardLay/layout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: 'Gopalvog',
    price: 'descripe',
    
  });
  const [value, setValue] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [data,setData] = useState([])
  async function getProducts(){
    axios.get("/blog")
    .then(res=>{
      console.log(res);
      setData(res?.data?.result)
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('title', formData.name);
      data.append('description', value);
      
      data.append('img', imageFile);
       console.log(formData);
      // Replace 'your-api-endpoint' with the actual API endpoint where you want to send the data.
      const response = await axios.post('/blog', data);
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
  };
  useEffect(()=>{
    getProducts()
  },[])
  const handleDelete = (id) =>{
   axios.delete(`/blog/${id}`)
   .then(res=>{
    console.log(id);
     getProducts()
     console.log(res);
     
   })
  }
  return (
    <Layout>
    <div className=" container mx-auto bg-gray-100 space-y-10  p-4 flex  flex-col items-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
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
            <label className="block text-sm font-medium">details:</label>
            {/* <textarea
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm"
            /> */}
            <ReactQuill  
              value={value} onChange={setValue}></ReactQuill>
          </div>
          
         
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
     <div className='grid grid-cols-2 gap-4 '>
     { data.map(item=><div className='flex justify-between gap-5' key={item?._id}>
        <img src={item.img} className='h-32 w-32' alt='loading' />
       
          <h1>{item.title}</h1>
          <button className='px-3 py-1 w-20 h-10 bg-red-700 my-3 rounded-md '  onClick={()=>handleDelete(item._id)}>delete</button>
        </div>)}
     </div>
    </div>
    </Layout>
  );
};

export default Home;
