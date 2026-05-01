
import Link from "next/link"
import { FaRegSadTear } from "react-icons/fa";

export default function Newsnotfound() {
  return (
    <div className="h-[60vh] flex flex-col justify-center items-center text-center">
      
      {/* icon */}
      <FaRegSadTear className="text-6xl text-gray-400 mb-4" />

      {/* title */}
      <h2 className="text-2xl font-bold text-gray-700">
        No News Found
      </h2>

      {/* subtitle */}
      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, we couldn’t find any news in this category right now.  
        Please try another category or check back later.
      </p>

      {/* button */}
      <Link href={"/"}>
       <button className="mt-5 px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
        Go Back
      </button>
      </Link>
     

    </div>
  );
}