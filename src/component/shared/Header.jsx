

import { format } from "date-fns";
import Merque from "./Merque";

export default function Header() {
  return (
    <div className="w-full bg-white pt-6 border-b border-gray-100">
      <div className="flex flex-col items-center text-center space-y-3 px-4 max-w-7xl mx-auto">
        
     

        {/* WEBSITE BRAND TYPOGRAPHY */}
        <h1 className="font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
          Global News <span className="text-orange-500 font-black">Time</span>
        </h1>
        
        {/* TAGLINE MOTTO */}
        <div className="flex items-center gap-2">
          <span className="h-[1px] w-6 bg-orange-400 hidden sm:inline-block"></span>
          <h2 className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-semibold font-serif italic">
            Journalism Without Fear or Favour
          </h2>
          <span className="h-[1px] w-6 bg-orange-400 hidden sm:inline-block"></span>
        </div>
        
        {/* DYNAMIC CALENDAR STAMP */}
        <div className="bg-slate-900 text-gray-200 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm tracking-wide inline-block mt-1">
           {format(new Date(), "EEEE, MMMM dd, yyyy")}
        </div>
        
      </div>
      
      {/* MARQUEE STREAM SLIDER */}
      <div className="mt-6">
        <Merque />
      </div>
    </div>
  );
}