import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import { useCookies } from "react-cookie";

const Menubar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const [cookies, setCookie] = useCookies(['token']);
  const [,,removeCookie] = useCookies(['token']);
  const [token,setToken] = useState("")
   useEffect(()=>{
     if(window!=undefined){
       const tokend = cookies['token'];
       console.log(tokend);
       setToken(tokend)
     }
   },[])
   const router = useRouter();
   const logout = () =>{
    alert("success")
  
    removeCookie("token",{path:"/"})
      //  window.reload() 
      if(window!=undefined){
        window.reload() 
      }
      router.refresh()
   }
  return (
    <div>
      <nav className="bg-zinc-200 p-4 fixed top-0 w-full z-50 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black font-semibold text-xl flex items-center space-x-2">
            <img src="/logo.jpg" alt="loading..." className="w-10 h-8"/>
            <span className="font-semibold">Pure Mango</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-black hover:text-neutral-500 font-semibold">
              Home
            </Link>
            <Link href="/about" className="text-black hover:text-neutral-500 font-semibold">
              About Us
            </Link>
            
           
            <Link href="/contact" className="text-black hover:text-neutral-500 font-semibold">
              Contact
            </Link>
            <Link href="/pages/feedback" className="text-black hover:text-neutral-500 font-semibold">
             Feedback
            </Link>
           { !token && <Link href="/login" className="text-black hover:text-neutral-500 font-semibold">
   Login
            </Link>}
            { token && <Link href="/dashboard/product" className="text-black hover:text-neutral-500 font-semibold">
            Dashboard
            </Link>}
            { token && <button  onClick={()=>logout()} className="text-black hover:text-neutral-500 font-semibold">
           Logout
            </button>}
           
          </div>
          <div className="md:hidden">
            <button
             id="menu-toggle"
              className="text-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden ${
            mobileMenuOpen ? "" : "hidden"
          } bg-gray-800 p-4`}
        >
          <a href="#" className="block text-white hover:text-gray-300 mb-2">
            Home
          </a>
          <Link href="/about" className="block text-white hover:text-gray-300 mb-2">
            About Us
          </Link>
          <a href="#" className="block text-white hover:text-gray-300 mb-2">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
