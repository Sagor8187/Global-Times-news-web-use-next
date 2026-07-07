import Leftnews from "@/component/homepage/news/Leftnews";
import Rightside from "@/component/homepage/news/Rightside";
import Newsnotfound from "@/component/Newsnotfound";
import { categoryfunc, categorywise } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

export default async function MynewsPage({ params }) {
  const { id } = await params;

  const mydata = await categorywise(id);
  console.log(mydata);
  const data = await categoryfunc();

  const final = data.data.news_category;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 m-4 md:m-10 max-w-7xl mx-auto">
      
      {/* LEFT SIDEBAR */}
      <div className="order-2 lg:order-1 lg:col-span-3">
        <Leftnews final={final} isactive={id}></Leftnews>
      </div>
      
      {/* MAIN NEWS CONTENT FEED */}
      <div className="order-1 lg:order-2 lg:col-span-6">
        
        {/* SECTION HEADER BLOCK */}
        <div className="flex items-center gap-2.5 mb-6 pb-2 border-b border-gray-100">
          <span className="w-1.5 h-5 bg-orange-500 rounded-full"></span>
          <h2 className="text-lg font-extrabold text-slate-900 tracking-tight uppercase">
            News Articles
          </h2>
        </div>

        <div className="w-full mx-auto space-y-6">
          {mydata.length > 0 ? (
            mydata.map((news) => (
              <div
                key={news._id}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* AUTHOR & ACTIONS HEADER */}
                <div className="flex items-center justify-between p-4 bg-slate-50/50 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 ring-2 ring-slate-100 rounded-full overflow-hidden">
                      <Image
                        src={news.author?.img || "/fallback-author.png"}
                        fill
                        className="object-cover"
                        alt="author"
                      />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900 leading-tight">
                        {news.author?.name || "Editorial Desk"}
                      </h2>
                      <p className="text-xs text-gray-400 font-medium mt-0.5">
                        {news.author?.published_date || "Recent Update"}
                      </p>
                    </div>
                  </div>

                  {/* HEADER ACTION TRIGGERS */}
                  <div className="flex gap-1">
                    <button className="p-2 text-gray-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                      <FaRegBookmark className="text-sm" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                      <FaShareAlt className="text-sm" />
                    </button>
                  </div>
                </div>

                {/* CARD CONTENT LAYER */}
                <div className="p-5">
                  <h1 className="text-xl font-extrabold text-slate-900 leading-snug tracking-tight mb-4 hover:text-orange-500 transition-colors">
                    <Link href={`/news/${news._id}`}>{news.title}</Link>
                  </h1>

         {/* RESPONSIVE DISPLAY GRAPHIC FRAME */}
<div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-72 xl:h-80 rounded-lg overflow-hidden bg-slate-950 flex items-center justify-center shadow-inner">
  <Image
    src={news.thumbnail_url}
    fill
    className="object-contain group-hover:scale-102 transition-transform duration-500" // Changed to object-contain
    alt="news thumbnail"
    sizes="(max-w: 768px) 100vw, (max-w: 1200px) 50vw, 33vw"
    priority
  />
</div>

                  {/* SHORT PREVIEW CONTENT EXCERPT */}
                  <p className="text-sm text-gray-500 font-normal leading-relaxed mt-4">
                    {news.details.slice(0, 180)}...
                    <Link 
                      href={`/news/${news._id}`}
                      className="text-orange-500 hover:text-orange-600 font-bold ml-1.5 inline-flex items-center gap-0.5 hover:underline decoration-2"
                    >
                      Read more
                    </Link>
                  </p>
                </div>

                {/* FOOTER METRICS AND EXPLORE ROUTING */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50/30 border-t border-gray-100 text-sm text-slate-700 font-semibold">
                  
                  {/* Rating block */}
                  <div className="flex items-center gap-1.5 text-amber-500 bg-amber-50 px-2.5 py-1 rounded-md text-xs font-bold border border-amber-100/50">
                    <FaStar className="text-xs" /> {news.rating?.number || "4.5"}
                  </div>
                  
                  {/* Detailed Action Link */}
                  <div>
                    <Link href={`/news/${news._id}`}>
                      <button className="bg-slate-900 hover:bg-orange-500 text-white font-bold px-4 py-2 rounded-lg transition-all duration-200 text-xs shadow-sm hover:shadow-orange-500/10">
                        View Details
                      </button>
                    </Link>
                  </div>
                  
                  {/* Live Total Views Block */}
                  <div className="flex items-center gap-1.5 text-gray-400 font-medium text-xs">
                    <FaEye className="text-sm text-gray-400" /> {news.total_view || "0"}
                  </div>

                </div>
              </div>
            ))
          ) : (
            <Newsnotfound />
          )}
        </div>
      </div>
      
      {/* RIGHT SIDEBAR */}
      <div className="order-3 lg:col-span-3">
        <Rightside></Rightside>
      </div>

    </div>
  );
}