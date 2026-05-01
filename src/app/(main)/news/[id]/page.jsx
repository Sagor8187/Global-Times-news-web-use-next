import Rightside from '@/component/homepage/news/Rightside';
import { viewnewsdetail } from '@/lib/data'
import Image from "next/image";
import Link from 'next/link';
import { FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";

export default async function NewsDetailspage({ params }) {
  const { id } =await params; // ✅ safe (no need await)

  const news = await viewnewsdetail(id);

  // ✅ if no data
  if (!news) {
    return <p className="p-5">News not found</p>;
  }

  // ✅ safe image fallback
  const imageSrc =
    typeof news?.thumbnail_url === "string" &&
    news.thumbnail_url.trim() !== ""
      ? news.thumbnail_url
      : "https://via.placeholder.com/800x400";

  return (
    <div className='grid grid-cols-10'>
        <div className="max-w-4xl mx-auto my-5 col-span-7">
            <h1 className='font-bold m-3'>Dragon News</h1>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        {/* IMAGE */}
        <div className="">
          <Image
            src={imageSrc}
            alt="news"
            width={400}
            height={300}

            className="mx-auto object-cover "
          />
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-4">

          {/* TITLE */}
          <h1 className="text-2xl font-bold text-gray-800">
            {news?.title}
          </h1>

          {/* AUTHOR */}
          <div className="flex justify-between text-sm text-gray-500">
            <div>
              <p className="font-medium text-gray-700">
                {news?.author?.name}
              </p>
              <p>
                {news?.author?.published_date}
              </p>
            </div>

            <div className="flex gap-3 text-gray-500">
              <FaRegBookmark className="cursor-pointer hover:text-black" />
              <FaShareAlt className="cursor-pointer hover:text-black" />
            </div>
          </div>

          {/* DETAILS */}
          <p className="text-gray-600 leading-relaxed">
            {news?.details}
          </p>

          {/* FOOTER */}
         <div>
            <button className='font-bold bg-pink-700 text-white p-3'><Link href={`/mynews/${news.category_id}`}>See Other news this Category </Link></button>
         </div>

        </div>
      </div>
    </div>
   <div className='col-span-3'>
     <Rightside></Rightside>
   </div>
    </div>
  );
}