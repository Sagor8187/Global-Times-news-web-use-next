"use client";

import { authClient } from "@/lib/auth-client";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function Rightside() {
  const signIngoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const signIngithub = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
      
      {/* PREMIUM SECTION HEADER */}
      <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-100">
        <span className="w-1.5 h-5 bg-orange-500 rounded-full"></span>
        <h2 className="text-base font-extrabold text-slate-900 tracking-tight uppercase">
          Login With Social
        </h2>
      </div>

      {/* SOCIAL OAUTH AUTHENTICATION BUTTON STACK */}
      <div className="flex flex-col gap-3">
        
        {/* Google Authentication Trigger Button */}
        <button
          onClick={signIngoogle}
          className="group flex items-center justify-center gap-3 w-full py-3 px-4 bg-white border border-gray-200 rounded-xl text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 font-bold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          <FaGoogle className="text-base text-red-500 group-hover:scale-110 transition-transform" />
          <span>Continue with Google</span>
        </button>

        {/* GitHub Authentication Trigger Button */}
        <button
          onClick={signIngithub}
          className="group flex items-center justify-center gap-3 w-full py-3 px-4 bg-slate-900 border border-slate-900 rounded-xl text-white hover:bg-slate-800 font-bold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm shadow-slate-900/10"
        >
          <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
          <span>Continue with GitHub</span>
        </button>
        
      </div>
      
    </div>
  );
}