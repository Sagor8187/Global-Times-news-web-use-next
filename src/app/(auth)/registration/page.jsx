import React from 'react'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center p-4">
      
      {/* Card */}
      <div className="bg-white w-full max-w-md p-6 md:p-8 rounded-md shadow">

        {/* Header */}
        <h1 className="text-2xl font-bold text-[#403F3F] text-center mb-6">
          Register your account
        </h1>

        <hr className="border-gray-200 mb-6" />

        <form className="space-y-4">

          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#403F3F]">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-[#F3F3F3] rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-gray-400 outline-none"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#403F3F]">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="w-full bg-[#F3F3F3] rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-gray-400 outline-none"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#403F3F]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#F3F3F3] rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-gray-400 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#403F3F]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-[#F3F3F3] rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-gray-400 outline-none"
              required
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="terms"
              className="w-4 h-4 accent-[#403F3F] cursor-pointer"
            />
            <label htmlFor="terms" className="text-sm text-[#706F6F]">
              Accept <span className="font-semibold text-[#403F3F]">Terms & Conditions</span>
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#403F3F] text-white font-semibold py-3 rounded-md text-sm hover:bg-[#2b2a2a]"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  )
}