import Link from "next/link"
export default function Leftnews({final,isactive}) {
  return (
    <div>
          <h1> All Category</h1>

      <ul className="flex flex-col">
        {final.map((category) => (
          <li 
            key={category.category_id}
            className={`${isactive == category.category_id?"bg-gray-200":""} py-2 px-4 text-center bg-gray-100 m-2 text-black transition-colors cursor-pointer font-medium text-lg border-b border-gray-50 last:border-none`}
          >
            <Link href={`/mynews/${category.category_id}`}>{category.category_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
