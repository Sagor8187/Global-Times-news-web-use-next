import Leftnews from "@/component/homepage/news/Leftnews"
import Rightside from "@/component/homepage/news/Rightside"
import Image from "next/image";
import { FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";

const categoryfunc = async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")

    const output = await res.json()
    return output
}


export default async function MynewsPage({params}) {
     const {id}=await params

     const categorywise =async (id)=>{
      const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
      const output = await res.json()

      return output.data
     }
     const mydata =await categorywise(id)
     console.log(mydata)
  const data = await categoryfunc()

  const final = data.data.news_category
  return (
    <div className="grid grid-cols-12  m-10">
      <div className=" col-span-3 text-md font-bold">
        
     <Leftnews final={final} isactive={id}></Leftnews>
        
        </div>
      <div className=" col-span-6 text-md font-bold" >
           <div className="max-w-6xl mx-auto p-4">
      {mydata.length > 0? mydata.map((news) => (
        <div key={news._id} className="bg-white shadow-md rounded-md mb-6">

          {/* HEADER */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <Image
                src={news.author.img}
                width={40}
                height={40}
                className=" object-contain  rounded-full"
                alt="author"
              />
              <div>
                <h2 className="text-sm font-semibold">{news.author.name}</h2>
                <p className="text-xs text-gray-500">
                  {news.author.published_date}
                </p>
              </div>
            </div>

            {/* icons */}
            <div className="flex gap-3 text-gray-500">
              <FaRegBookmark className="cursor-pointer" />
              <FaShareAlt className="cursor-pointer" />
            </div>
          </div>

          {/* TITLE */}
          <div className="p-4">
            <h1 className="text-lg font-bold mb-3">{news.title}</h1>

            <img
              src={news.thumbnail_url}
              className="w-full h-[300px] object-cover rounded-md"
              alt="news"
            />

            <p className="text-sm text-gray-600 mt-3">
              {news.details.slice(0, 200)}...
              <span className="text-orange-500 cursor-pointer">
                {" "}Read More
              </span>
            </p>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between p-4 border-t text-sm text-gray-600">
            <div className="flex items-center gap-1 text-orange-400">
              ⭐ {news.rating.number}
            </div>

            <div className="flex items-center gap-1">
              <FaEye /> {news.total_view}
            </div>
          </div>

        </div>
      )):<h2 className="text-center font-bold text-4xl flex justify-center items-center h-[50vh] ">news not found</h2>}
    </div>
         </div>
      <div className=" col-span-3 text-md font-bold">
        <Rightside></Rightside>
      </div>
    </div>
  );
}
