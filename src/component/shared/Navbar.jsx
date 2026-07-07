"use client";

import Navlink from "./Navlink";
import { RxAvatar } from "react-icons/rx";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function Navbar() {
  const { data, isLoading } = authClient.useSession();
  const info = data?.user;

  console.log("FULL DATA:", data);
  console.log("USER:", info);

  if (isLoading) {
    return (
      <div className="bg-slate-900 text-white py-4 px-6 flex justify-between items-center shadow-sm">
        <div className="font-extrabold text-xl tracking-wider">
          Global News <span className="text-orange-500">Time</span>
        </div>
        <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 shadow-md border-b border-slate-800 sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-6 min-h-[64px] flex justify-between items-center">
        
        {/* BRAND & MOBILE DROPDOWN */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Icon Toggle */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 text-gray-300 hover:bg-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-900 text-gray-300 rounded-xl mt-3 w-52 p-3 shadow-xl border border-slate-800 gap-2 font-medium">
              <Navlink href={"/"}>Home</Navlink>
              <Navlink href={"/about"}>About</Navlink>
              <Navlink href={"/career"}>Career</Navlink>
            </ul>
          </div>

          {/* Website Logo Title */}
          <div className="font-extrabold text-lg md:text-xl tracking-wider text-white select-none">
            Global News <span className="text-orange-500">Time</span>
          </div>
        </div>

        {/* DESKTOP NAV LINKS (CENTERED STRUCTURE) */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-300 font-bold flex gap-6 tracking-wide text-sm">
            <Navlink href={"/"}>Home</Navlink>
            <Navlink href={"/about"}>About</Navlink>
            <Navlink href={"/career"}>Career</Navlink>
          </ul>
        </div>

        {/* RIGHT SIDE (AUTH CONFIGURATION STATE) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {info ? (
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Responsive text: Hidden on extra small phones, visible from 'sm' onwards */}
              <h2 className="hidden sm:block font-semibold text-sm text-gray-200">
                Hi, <span className="text-orange-400">{info?.name?.split(" ")[0]}</span>
              </h2>

              {/* Profile Avatar Frame Container */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                {info?.image ? (
                  <img
                    className="rounded-full w-8 h-8 sm:w-9 sm:h-9 object-cover border border-slate-700 shadow-inner"
                    src={info.image}
                    alt="profile"
                  />
                ) : (
                  <RxAvatar className="w-8 h-8 sm:w-9 sm:h-9 rounded-full text-gray-400" />
                )}
              </div>

              {/* Action Log-out Switcher */}
              <button
                className="bg-transparent hover:bg-slate-800 text-gray-300 hover:text-white border border-slate-700 hover:border-slate-600 font-bold px-3 py-1.5 sm:py-2 rounded-lg transition text-xs sm:text-sm"
                onClick={async () => await authClient.signOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              {/* Unified Brand Color Login Trigger */}
              <Link href="/login" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg transition text-xs sm:text-sm shadow-sm inline-block">
                Login
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}