"use client"
import { authClient } from '@/lib/auth-client';
import { FaGoogle, FaGithub } from 'react-icons/fa';
export default function Rightside() {

  const signIngoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });

 
};
 const signIngithub = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}
  return (
    <div className="max-w-sm p-4">
      {/* Title */}
      <h2 className="text-xl font-bold text-[#333] mb-4">Login With</h2>

      <div className="flex flex-col gap-3">
        {/* Google Login Button */}
        <button onClick={()=>signIngoogle()} className="flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-blue-500 rounded-md text-blue-500 hover:bg-blue-50 transition-colors font-medium">
          <FaGoogle className="text-lg" />
          <span>Login with Google</span>
        </button>

        {/* Github Login Button */}
        <button onClick={()=>signIngithub()} className="flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-gray-800 rounded-md text-gray-800 hover:bg-gray-50 transition-colors font-medium">
          <FaGithub className="text-xl" />
          <span>Login with Github</span>
        </button>
      </div>
    </div>
  )
}
