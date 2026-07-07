"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleregonSubmit = async (data) => {
    const { name, email, url, password } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: url,
      callbackURL: "/", // সফল হলে হোম পেজে নিয়ে যাবে
    });

    if (error) {
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div className="bg-slate-50 flex items-center justify-center min-h-screen p-4 font-sans">
      
      {/* Premium Wrapped Card Panel */}
      <div className="bg-white w-full max-w-md p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100/80 transition-all">
        
        {/* Brand Accent Indicator */}
        <div className="flex justify-center mb-4">
          <span className="w-12 h-1.5 bg-orange-500 rounded-full"></span>
        </div>

        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-2 tracking-tight">
          Create an account
        </h1>
        <p className="text-xs text-gray-400 text-center mb-6 font-medium">
          Join Global News Time community today
        </p>

        <hr className="border-slate-100 mb-6" />

        <form onSubmit={handleSubmit(handleregonSubmit)} className="space-y-4">
          
          {/* Name Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className={`w-full bg-slate-50 border ${
                errors.name ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:ring-orange-100 focus:border-orange-500"
              } rounded-xl py-2.5 px-4 text-sm font-medium outline-none focus:ring-4 transition-all text-slate-900`}
              {...register("name", { required: "User name is required" })}
            />
            {errors.name && (
              <span className="text-xs font-semibold text-red-500 block pl-1">
                ⚠️ {errors.name.message}
              </span>
            )}
          </div>

          {/* Photo URL Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="https://example.com/avatar.jpg"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm font-medium outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all text-slate-900"
              {...register("url")}
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className={`w-full bg-slate-50 border ${
                errors.email ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:ring-orange-100 focus:border-orange-500"
              } rounded-xl py-2.5 px-4 text-sm font-medium outline-none focus:ring-4 transition-all text-slate-900`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-xs font-semibold text-red-500 block pl-1">
                ⚠️ {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className={`w-full bg-slate-50 border ${
                errors.password ? "border-red-400 focus:ring-red-100" : "border-slate-200 focus:ring-orange-100 focus:border-orange-500"
              } rounded-xl py-2.5 px-4 text-sm font-medium outline-none focus:ring-4 transition-all text-slate-900`}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-xs font-semibold text-red-500 block pl-1">
                ⚠️ {errors.password.message}
              </span>
            )}
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="pt-2">
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded text-orange-500 focus:ring-orange-500 border-slate-300 accent-slate-900 cursor-pointer mt-0.5"
                {...register("checkbox", { required: "You must accept the terms" })}
              />
              <label htmlFor="terms" className="text-xs font-medium text-gray-500 leading-tight cursor-pointer select-none">
                I accept the <span className="font-bold text-slate-900 hover:underline">Terms & Conditions</span> & Privacy Policy.
              </label>
            </div>
            {errors.checkbox && (
              <span className="text-xs font-semibold text-red-500 block mt-1 pl-1">
                ⚠️ {errors.checkbox.message}
              </span>
            )}
          </div>

          {/* Premium Submit Button with Spinner */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-slate-900 hover:bg-orange-500 text-white font-bold rounded-xl text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 disabled:bg-slate-700 disabled:cursor-not-allowed select-none mt-4"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Creating Account...</span>
              </>
            ) : (
              <span>Register</span>
            )}
          </button>

        </form>

        {/* Footer Link */}
        <p className="text-center mt-6 text-sm text-gray-500 font-medium">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-orange-500 font-bold hover:underline cursor-pointer pl-0.5">
              Login
            </span>
          </Link>
        </p>

      </div>
    </div>
  );
}