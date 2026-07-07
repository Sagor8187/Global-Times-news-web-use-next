import Link from "next/link";
import { FaRegSadTear } from "react-icons/fa";

export default function Newsnotfound() {
  return (
    <div className="min-h-[50vh] flex flex-col justify-center items-center text-center px-4 py-12 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-2xl mx-auto my-6">
      
      {/* Dynamic Theme Icon Frame */}
      <div className="w-20 h-20 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-6 text-4xl animate-pulse">
        <FaRegSadTear />
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
        No News Available
      </h2>

      {/* Subtitle / Description */}
      <p className="text-gray-500 mt-3 max-w-sm text-sm md:text-base leading-relaxed">
        We couldn’t find any articles published under this category right now. Try exploring another feed or check back later!
      </p>

      {/* Action Button - Global News Time Theme Color */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full justify-center px-6">
        <Link href="/" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl transition shadow-sm text-sm">
            Explore Home Feed
          </button>
        </Link>
        <Link href="/about" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium px-6 py-2.5 rounded-xl transition text-sm">
            Contact Support
          </button>
        </Link>
      </div>

    </div>
  );
}