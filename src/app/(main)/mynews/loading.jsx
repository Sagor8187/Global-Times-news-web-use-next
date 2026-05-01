
export default function loading() {
  return (
    <div>
      
        <div className="grid grid-cols-12 m-10 gap-4 animate-pulse">
      
      {/* Left Sidebar Skeleton */}
      <div className="col-span-3 space-y-3">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        <div className="h-6 bg-gray-300 rounded w-2/3"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      </div>

      {/* Main News Skeleton */}
      <div className="col-span-6 space-y-6">
        
        {[1,2,3].map((item) => (
          <div key={item} className="bg-white p-4 shadow rounded-md space-y-4">

            {/* header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 w-24 rounded"></div>
                  <div className="h-2 bg-gray-200 w-16 rounded"></div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* title */}
            <div className="h-5 bg-gray-300 w-3/4 rounded"></div>

            {/* image */}
            <div className="h-[200px] bg-gray-300 rounded-md"></div>

            {/* text */}
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 w-full rounded"></div>
              <div className="h-3 bg-gray-200 w-5/6 rounded"></div>
              <div className="h-3 bg-gray-200 w-2/3 rounded"></div>
            </div>

          </div>
        ))}

      </div>

      {/* Right Sidebar Skeleton */}
      <div className="col-span-3 space-y-3">
        <div className="h-40 bg-gray-300 rounded"></div>
        <div className="h-20 bg-gray-300 rounded"></div>
        <div className="h-20 bg-gray-300 rounded"></div>
      </div>

    </div>
    </div>
  )
}
