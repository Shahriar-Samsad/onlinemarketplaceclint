import React from 'react';
import Layout from '../customLayout/layout';

const Home = () => {
    return (
        <Layout>
 <div className='flex flex-col justify-center items-center mt-28 '>
            <h1 className='text-7xl text-black font-bold my-5'>Contact us</h1>
             <div className='shadow-lg mb-5 '>
               <p className='py-3 px-2 text-lg text-gray-400 font-semibold '>Phone : 01730894498</p>
              
               <p className='py-3 px-2 text-lg text-gray-400 font-semibold '>Phone : 01730894487</p>
              
               <p className='py-3 px-2 text-lg text-gray-400 font-semibold '>Phone : 01730894499</p>
              
               <p className='py-3 px-2 text-lg text-gray-400 font-semibold '>shahriar35-536@diu.edu.bd</p>
              
             </div>
        </div>
        </Layout>
       
    );
};

export default Home;