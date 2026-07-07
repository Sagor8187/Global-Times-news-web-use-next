"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handlelogonSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const { data: res, error } = await authClient.signIn.email({
        email: email,
        password: password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        console.error(error.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 flex items-center justify-center min-h-screen p-4 font-sans">
      
      {/* Premium Wrapped Card Panel */}
      <div className="bg-white w-full max-w-md p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100/80 transition-all">

        {/* Brand Accent Pill */}
        <div className="flex justify-center mb-4">
          <span className="w-12 h-1.5 bg-orange-500 rounded-full"></span>
        </div>

        {/* Header Typography */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-2 tracking-tight">
          Login your account
        </h1>
        <p className="text-xs text-gray-400 text-center mb-6 font-medium">
          Log in to continue to Global News Time
        </p>

        <hr className="border-slate-100 mb-6" />

        <form onSubmit={handlelogonSubmit} className="space-y-5">
          
          {/* Email Address Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Email address
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all text-slate-900 placeholder-gray-400"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-medium outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all text-slate-900 placeholder-gray-400"
            />
          </div>

          {/* Premium Submission Button with Active Spinner */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-slate-900 hover:bg-orange-500 text-white font-bold rounded-xl text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 disabled:bg-slate-700 disabled:cursor-not-allowed select-none mt-2"
          >
            {loading ? (
              <>
                {/* CSS Spinner Circle */}
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Logging in...</span>
              </>
            ) : (
              <span>Login</span>
            )}
          </button>
        </form>

        {/* Footer Redirection Meta Links */}
        <p className="text-center mt-6 text-sm text-gray-500 font-medium">
          Don't have an account?{" "}
          <Link href="/registration">
            <span className="text-orange-500 font-bold hover:underline cursor-pointer pl-0.5">
              Register
            </span>
          </Link>
        </p>

      </div>
    </div>
  );
}