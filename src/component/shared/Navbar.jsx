"use client"
import { authClient } from "@/lib/auth-client";
import Navlink from "./Navlink";
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";

export default  function Navbar() {


const { data: session } =  authClient.useSession()
const info = session?.user
console.log(session)

  
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <Navlink href={"/"}>Home</Navlink>
    <Navlink href={"/about"}>About</Navlink>
         <Navlink href={"/career"}>Career</Navlink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-gray-500 font-bold flex gap-5">
        <Navlink href={"/"}>Home</Navlink>
    <Navlink href={"/about"}>About</Navlink>
         <Navlink href={"/career"}>Career</Navlink>
    </ul>
  </div>
  {info?
  <div className="navbar-end flex gap-3">
    <h2 className="font-bold text-pink-700">Wellcome {info?.name}</h2>
    <div className="w-10 rounded-full">
          { <img 
  className="rounded-full w-[40px] h-[40px] object-cover"
  src={info?.image}
  alt="profile"
/>||  <RxAvatar className="w-10 h-10 rounded-full"/>}
        </div>

    <button className="btn" onClick={async()=>await authClient.signOut()}>Logout </button>
  </div>
  :<div className="navbar-end flex gap-3">
    <div className="w-10 rounded-full">
          
           
        </div>

    <button className="btn"><Navlink href={"/login"} >Login</Navlink></button>
  </div>}
</div>
    </div>
  );
}
