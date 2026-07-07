import Rightside from '@/component/homepage/news/Rightside';
import { viewnewsdetail } from '@/lib/data'
import Image from "next/image";
import Link from 'next/link';
import { FaRegBookmark, FaShareAlt, FaArrowLeft } from "react-icons/fa";

export default async function NewsDetailspage({ params }) {
  const { id } = await params; 

  const news = await viewnewsdetail(id);

  if (!news) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="p-6 bg-red-50 text-red-500 font-bold rounded-xl border border-red-100">
          ⚠️ News article could not be found.
        </p>
      </div>
    );
  }

  const imageSrc =
    typeof news?.thumbnail_url === "string" &&
    news.thumbnail_url.trim() !== ""
      ? news.thumbnail_url
      : "https://via.placeholder.com/800x400";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 m-4 md:m-10 max-w-7xl mx-auto items-start">
      
      {/* MAIN DETAILED NEWS BOX */}
      <div className="col-span-1 lg:col-span-7 space-y-4">
        
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <span className="w-1.5 h-5 bg-orange-500 rounded-full"></span>
          <h1 className="font-extrabold text-lg text-slate-900 tracking-tight uppercase">
            Global News Detail
          </h1>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">

          {/* 🔴 পরিবর্তন ১: fill বাদ দিয়ে h-auto এবং object-contain ব্যবহার করা হয়েছে যাতে ফুল ছবি আসে */}
          <div className="w-full bg-slate-50 border-b border-gray-100 overflow-hidden">
            <img
              src={imageSrc}
              alt="news cover picture"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>

          <div className="p-6 md:p-8 space-y-6">

            <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight">
              {news?.title}
            </h1>

            {/* AUTHOR DETAILS */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                {/* 🔴 পরিবর্তন ২: লেখকের ছবিতেও object-contain দেওয়া হয়েছে যেন চেহারা না কাটে */}
                <div className="w-10 h-10 bg-slate-100 rounded-full overflow-hidden relative ring-2 ring-white flex items-center justify-center">
                  <Image
                    src={news?.author?.img || "/fallback-author.png"}
                    fill
                    className="object-contain"
                    alt="author face"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-tight">
                    {news?.author?.name || "Editorial Staff"}
                  </p>
                  <p className="text-xs text-gray-400 font-semibold mt-0.5">
                    {news?.author?.published_date || "Recent Update"}
                  </p>
                </div>
              </div>

              <div className="flex gap-1">
                <button className="p-2.5 text-gray-400 hover:text-slate-900 hover:bg-white rounded-lg transition-all shadow-sm border border-transparent hover:border-gray-100">
                  <FaRegBookmark className="text-sm" />
                </button>
                <button className="p-2.5 text-gray-400 hover:text-slate-900 hover:bg-white rounded-lg transition-all shadow-sm border border-transparent hover:border-gray-100">
                  <FaShareAlt className="text-sm" />
                </button>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed font-normal text-sm md:text-base whitespace-pre-line border-b border-gray-100 pb-6">
              {news?.details}
            </p>

            <div className="pt-2">
              <Link href={`/mynews/${news?.category_id}`}>
                <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-md hover:shadow-orange-500/10 group">
                  <FaArrowLeft className="text-xs group-hover:-translate-x-0.5 transition-transform" /> 
                  <span>See Other News in This Category</span>
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-3 lg:sticky lg:top-20">
        <Rightside />
      </div>

    </div>
  );
}