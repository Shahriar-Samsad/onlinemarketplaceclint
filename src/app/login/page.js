"use client"
import axios from "../../components/api/axios";
 
import Link from "next/link";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Layout from "../customLayout/layout";
import { useRouter } from "next/navigation";

const Login = () => {
  const [user,setUser] = useState({});
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const [cookies, setCookie] = useCookies(['token']);
  const router = useRouter()
  const handleLogin =(e)=>{
     e.preventDefault()
    try {
      axios.post("/user/login",{email,password})
      .then(res=>{
      //  console.log(res);
      console.log(res.data.token);
      if(res.status==200){
        router.refresh()
        setCookie('token',res.data.token, { path: '/' })
        router.push("/")
         }
      }).catch(err=>{
       console.log(err);
      })
    } catch (error) {
      console.log(error.message);
    }
  }
    return (
      <Layout>
<div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
                onChange={e=>{
                  setEmail(e.target.value)
                }}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
                onChange={e=>{
                  setPassword(e.target.value)
                }}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
            <span>already have no an account? <Link href="/register" className="hover:underline hover:text-red">register</Link></span>
          </form>
        </div>
        
        
      </div>
      </Layout>
      
    );
  };
  
  export default Login