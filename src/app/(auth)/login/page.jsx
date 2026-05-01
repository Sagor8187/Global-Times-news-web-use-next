"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginPage() {

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  const handlelogonSubmit = (data) => console.log(data)
  return (
    <div className="bg-[#F3F3F3] flex items-center justify-center min-h-screen p-4">
      
      {/* Card */}
      <div className="bg-white w-full max-w-md p-6 md:p-8 rounded-md shadow">

        {/* Header */}
        <h1 className="text-2xl font-bold text-[#403F3F] text-center mb-6">
          Login your account
        </h1>

        <hr className="border-gray-200 mb-6" />

        <form onSubmit={handleSubmit(handlelogonSubmit)} className="space-y-4">
          
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#403F3F]">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#F3F3F3] rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-gray-400 outline-none"
                 {...register("email",{required:"Email must requird"})}
                
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
               {...register("password",{required:"password must requird"})}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#403F3F] text-white font-semibold py-3 rounded-md text-sm hover:bg-[#2b2a2a]"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-6 text-sm text-[#706F6F]">
          Don't have an account?{" "}
          <Link href="/registration">
            <span className="text-[#F75B5F] hover:underline cursor-pointer">
              Register
            </span>
          </Link>
        </p>

      </div>
    </div>
  );
}