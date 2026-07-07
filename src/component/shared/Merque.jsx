import Marquee from "react-fast-marquee";

export default function Merque() {
  const news = [
    {
      id: 1,
      title: "AI Technology Growing Rapidly",
      description: "Artificial Intelligence is transforming industries worldwide.",
      category: "Technology",
      date: "2026-05-01",
      author: "John Doe"
    },
    {
      id: 2,
      title: "Global Economy Shows Signs of Recovery",
      description: "Markets are stabilizing after recent economic challenges.",
      category: "Business",
      date: "2026-05-01",
      author: "Sarah Khan"
    },
    {
      id: 3,
      title: "New Advances in Space Exploration",
      description: "Scientists discover new possibilities for deep space missions.",
      category: "Science",
      date: "2026-04-30",
      author: "Alex Smith"
    },
    {
      id: 4,
      title: "Climate Change Awareness Increasing",
      description: "More countries are taking action to reduce carbon emissions.",
      category: "Environment",
      date: "2026-04-30",
      author: "Maria Lopez"
    },
    {
      id: 5,
      title: "Sports Championship Finals Announced",
      description: "Top teams are ready to compete in the final match.",
      category: "Sports",
      date: "2026-04-29",
      author: "David Lee"
    }
  ];

  return (
    /* Container updated with slate-900 theme, margins optimized for clean layout separation */
    <div className="flex items-center gap-0 my-4    bg-slate-900  overflow-hidden shadow-md border border-slate-800">
      
      {/* LATEST NEWS BADGE */}
      <div className="bg-orange-500 text-white font-extrabold px-5 py-3 text-xs md:text-sm tracking-wider uppercase select-none relative z-10 shadow-[4px_0_10px_rgba(0,0,0,0.3)]">
        Latest
      </div>

      {/* TICKER INNER STREAM */}
      <Marquee 
        pauseOnHover={true} 
        speed={45} 
        className="text-gray-200 py-2.5 text-xs md:text-sm font-medium"
      >
        {news.map((n) => (
          <div key={n.id} className="flex items-center gap-2 mr-16">
            
            {/* Category Marker Tag */}
            <span className="text-[10px] uppercase tracking-widest font-extrabold px-2 py-0.5 bg-slate-800 text-orange-400 rounded border border-slate-700">
              {n.category}
            </span>

            {/* Title text */}
            <span className="font-bold text-white hover:text-orange-400 cursor-pointer transition-colors">
              {n.title}
            </span>

            {/* Separator dash */}
            <span className="text-gray-500">—</span>

            {/* Description context body */}
            <span className="text-gray-400 font-normal">
              {n.description}
            </span>
            
          </div>
        ))}
      </Marquee>

    </div>
  );
}