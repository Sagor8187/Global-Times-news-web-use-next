import Link from "next/link";

export default function Leftnews({ final, isactive }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
      
      {/* SECTION HEADER */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
        <span className="w-1.5 h-5 bg-orange-500 rounded-full"></span>
        <h1 className="font-extrabold text-lg text-slate-900 tracking-tight">
          All Categories
        </h1>
      </div>

      {/* CATEGORY LIST STACK */}
      <ul className="flex flex-col gap-1.5">
        {final.map((category) => {
          const isSelected = isactive == category.category_id;
          
          return (
            <li key={category.category_id} className="block">
              <Link 
                href={`/mynews/${category.category_id}`}
                className={`
                  flex items-center w-full px-4 py-3 rounded-lg text-sm font-semibold tracking-wide
                  transition-all duration-200 select-none
                  ${isSelected 
                    ? "bg-orange-500 text-white shadow-sm shadow-orange-500/20 translation-x-1" 
                    : "bg-transparent text-gray-600 hover:bg-slate-50 hover:text-slate-900 hover:translate-x-1"
                  }
                `}
              >
                {/* Visual Dot Indicator for Active Item */}
                <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-all ${
                  isSelected ? "bg-white scale-125" : "bg-gray-300 group-hover:bg-orange-500"
                }`}></span>
                
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
      
    </div>
  );
}