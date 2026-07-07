import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaUsers, FaAward, FaHistory } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      
      {/* HERO SECTION */}
      <div className="relative bg-gray-900 text-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-orange-500 uppercase tracking-widest text-sm font-bold block mb-3">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Global News Time
          </h1>
          <p className="text-lg text-gray-300 md:px-8">
            Your window to the world. Delivering accurate, unbiased, and real-time news from every corner of the globe.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        
        {/* OUR MISSION SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1638866411782-5f59287c19e1?q=80&w=2420&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill
              className="object-cover rounded-xl shadow-lg"
              alt="Journalist working"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-l-4 border-orange-500 pl-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At <strong>Global News Time</strong>, we believe that information is the ultimate tool for empowerment. Our dedicated team of journalists works round-the-clock to uncover breaking news, analyze global trends, and deliver truth without bias.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it’s geopolitics, technology, business, or human interest stories, we bridge the gap between events and your understanding, keeping you connected to what matters most.
            </p>
          </div>
        </div>

        {/* STATS COUNTER */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-1">24/7</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Live Coverage</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">50M+</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Monthly Readers</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">120+</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Global Reporters</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">15+</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">News Categories</p>
          </div>
        </div>

        {/* WHY CHOOSE US / VALUES */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
            Why Trust Global News Time?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center mb-4 text-xl">
                <FaGlobe />
              </div>
              <h4 className="font-bold text-lg mb-2">Unbiased Journalism</h4>
              <p className="text-sm text-gray-600">We report the raw facts, allowing you to form your own informed opinions.</p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center mb-4 text-xl">
                <FaUsers />
              </div>
              <h4 className="font-bold text-lg mb-2">Community First</h4>
              <p className="text-sm text-gray-600">Our content is structured around stories that directly impact global citizens.</p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-green-100 text-green-500 rounded-lg flex items-center justify-center mb-4 text-xl">
                <FaAward />
              </div>
              <h4 className="font-bold text-lg mb-2">Verified Sources</h4>
              <p className="text-sm text-gray-600">Every single detail is cross-referenced strictly before going on air.</p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 text-purple-500 rounded-lg flex items-center justify-center mb-4 text-xl">
                <FaHistory />
              </div>
              <h4 className="font-bold text-lg mb-2">Speed & Precision</h4>
              <p className="text-sm text-gray-600">We deliver swift breakings without compromising on accurate details.</p>
            </div>

          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="bg-orange-500 text-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated With Us</h3>
          <p className="text-orange-100 mb-6 max-w-xl mx-auto text-sm md:text-base">
            Don't miss a beat. Explore our latest categories, live opinions, and investigative reporting.
          </p>
          <Link href="/">
            <button className="bg-white text-orange-500 font-bold px-6 py-3 rounded-full hover:bg-gray-100 shadow transition text-sm md:text-base">
              Back to Homepage
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}