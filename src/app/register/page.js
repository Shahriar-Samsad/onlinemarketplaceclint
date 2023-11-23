"use client";
// import axios from 'axios';
import axios from "../../components/api/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCookies } from "react-cookie";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",

    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const [cookies, setCookie] = useCookies(["token"]);

  const router = useRouter();
  const handleRegister = (e) => {
    e.preventDefault();
    try {
      axios
        .post("/user/register", formData)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            router.refresh()
            setCookie("token", res.data.token, { path: "/" });
            router.push("/");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Insert Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Insert password"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Retype Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              placeholder="confirm password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Register
          </button>
          <span>
            already have an account?{" "}
            <Link href="/login" className="hover:underline hover:text-red">
              login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Registration;
