import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-gray-400 font-sans mt-20 w-full">
      
      {/* MAIN TOP FOOTER SECTION (ডেক্সটপে রেসপনসিভ গ্রিড ফিক্স) */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* COLUMN 1: BRAND LOGO & TAGLINE (Takes 5 cols on Desktop) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-6 bg-orange-500 rounded-full"></span>
            <h2 className="text-xl font-black text-white tracking-tight">
              Global News <span className="text-orange-500">Time</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Journalism Without Fear or Favour. Bringing you verified global insights, dynamic breaking updates, and unbiased community narratives 24/7.
          </p>
        </div>

        {/* COLUMN 2: QUICK NAV LINKS (Takes 3 cols on Desktop) */}
        <div className="lg:col-span-3 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white">
            Quick Navigation
          </h3>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/mynews/0" className="hover:text-orange-500 transition-colors">All Categories</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: SOCIAL MEDIA MODULE (Takes 4 cols on Desktop) */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white">
            Connect With Us
          </h3>
          <div className="flex gap-3">
            <a href="#" className="p-2.5 bg-slate-800 text-gray-400 hover:text-white hover:bg-orange-500 rounded-xl transition-all shadow-sm">
              <FaFacebookF className="text-sm" />
            </a>
            <a href="#" className="p-2.5 bg-slate-800 text-gray-400 hover:text-white hover:bg-orange-500 rounded-xl transition-all shadow-sm">
              <FaTwitter className="text-sm" />
            </a>
            <a href="#" className="p-2.5 bg-slate-800 text-gray-400 hover:text-white hover:bg-orange-500 rounded-xl transition-all shadow-sm">
              <FaLinkedinIn className="text-sm" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800 text-gray-400 hover:text-white hover:bg-orange-500 rounded-xl transition-all shadow-sm">
              <FaGithub className="text-sm" />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT BANNER */}
      <div className="border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          
          <p className="text-gray-500">
            © {currentYear} <span className="text-gray-300">Global News Time</span>. All rights reserved.
          </p>

          {/* SAGOR SUTRADHAR - DEVELOPER CREDIT FIXED */}
          <p className="text-gray-400">
            Designed & Developed by{" "}
            <span className="text-orange-500 font-bold hover:underline cursor-pointer tracking-wide">
              Sagor Sutradhar
            </span>
          </p>

        </div>
      </div>

    </footer>
  );
}