"use client"
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'


export default function RegisterPage() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const handleregonSubmit = async (data) =>{
    const {name,email,url,password} = data
    const { data:res, error } = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password:password, // required
    image: url,
    callbackURL: "/",
});


  }
  
  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center p-4">
      
      {/* Card */}
      <div className="bg-white w-full max-w-md p-6 md:p-8 rounded-md shadow">

        {/* Header */}
        <h1 className="text-2xl font-bold text-[#403F3F] text-center mb-6">
          Register your account
        </h1>

        <hr className="border-gray-200 mb-6" />

        <form onSubmit={handleSubmit(handleregonSubmit)} className="space-y-4">

          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#403F3F]">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-[#F3F3F3] rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-gray-400 outline-none"
              {...register("name", { required: "User name Requird" })}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
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
              {...register("url")}
            
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
             {...register("email", { required: "Email must Requird" })}
            
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
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
             {...register("password", { required: "Password must Requird" })}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="terms"
              className="w-4 h-4 accent-[#403F3F] cursor-pointer"

              {...register("checkbox", { required: "Please Select Terms & Conditions" })}
            />
            {errors.checkbox && <span className="text-red-500">{errors.checkbox.message}</span>}
            <br />
            <label htmlFor="terms" className="text-sm text-[#706F6F]">
              Accept <p className="font-semibold text-[#403F3F]">Terms & Conditions</p>
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
         <Link href="/login">
            <span className="text-[#F75B5F] hover:underline text-center cursor-pointer">
              Login
            </span>
          </Link>
      </div>
    </div>
  )
}