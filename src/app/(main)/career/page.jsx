import Link from "next/link";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaCheckCircle, FaRocket } from "react-icons/fa";

// Dummy Job Openings Data
const jobOpenings = [
  {
    id: "j1",
    title: "Senior Investigative Journalist",
    department: "Editorial & News",
    location: "Dhaka, Bangladesh (Hybrid)",
    type: "Full-Time",
    experience: "5+ Years",
  },
  {
    id: "j2",
    title: "Breaking News Video Editor",
    department: "Media & Production",
    location: "Remote",
    type: "Full-Time",
    experience: "3+ Years",
  },
  {
    id: "j3",
    title: "Digital Marketing Executive",
    department: "Growth & Marketing",
    location: "Dhaka, Bangladesh (On-site)",
    type: "Full-Time",
    experience: "2+ Years",
  },
  {
    id: "j4",
    title: "Frontend Developer (Next.js/React)",
    department: "Engineering & Tech",
    location: "Remote",
    type: "Contract / Full-Time",
    experience: "3+ Years",
  }
];

export default function CareerPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      
      {/* HERO SECTION */}
      <div className="bg-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-orange-500 uppercase tracking-widest text-sm font-bold block mb-3">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Shape the Future of <br />
            <span className="text-orange-500">Global Journalism</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            At Global News Time, we value truth, integrity, and speed. Build your career alongside award-winning storytellers and tech innovators.
          </p>
          <a href="#openings" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full transition shadow-md inline-block">
            View Open Positions
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* PERKS & BENEFITS SECTION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Work With Us?</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              We provide an environment where you can push boundaries, learn continuously, and maintain a healthy work-life balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center mb-4 text-xl">
                <FaRocket />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Growth & Mentorship</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Work directly with seasoned media veterans and tech leaders to accelerate your professional roadmap.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center mb-4 text-xl">
                <FaClock />
              </div>
              <  h3 className="font-bold text-lg mb-2 text-gray-900">Flexible Work Arrangements</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We accommodate remote, hybrid, and flexible working structures to cater to modern global professionals.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center mb-4 text-xl">
                <FaCheckCircle />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Competitive Packages</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Enjoy market-leading salaries, health allowances, festive bonuses, and performance incentives.
              </p>
            </div>
          </div>
        </div>

        {/* JOB OPENINGS SECTION */}
        <div id="openings" className="scroll-mt-6">
          <div className="border-b border-gray-200 pb-5 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Current Job Openings</h2>
              <p className="text-sm text-gray-500 mt-1">Showing {jobOpenings.length} available roles</p>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-600 px-3 py-1.5 rounded-md self-start sm:self-center">
              Actively Hiring 🔥
            </div>
          </div>

          {/* Jobs Grid/List */}
          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div 
                key={job.id} 
                className="bg-white p-5 md:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                {/* Left metadata */}
                <div className="space-y-2">
                  <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded">
                    {job.department}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 pt-1">
                    {job.title}
                  </h3>
                  
                  {/* Row tags */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 pt-1">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-gray-400" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaBriefcase className="text-gray-400" /> {job.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-gray-400" /> {job.type}
                    </span>
                  </div>
                </div>

                {/* Right CTA Button */}
                <div>
                  <Link href={`/career/${job.id}`}>
                    <button className="w-full md:w-auto border border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white font-bold px-5 py-2.5 rounded-lg transition text-sm">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* General Application Note */}
          <div className="bg-gray-100 rounded-xl p-6 text-center mt-12 max-w-2xl mx-auto border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-1">Don't see a position that fits?</h4>
            <p className="text-sm text-gray-600 mb-3">
              We are always looking for passionate creators, editors, and engineers. Send us an open application!
            </p>
            <a href="mailto:careers@globalnewstime.com" className="text-sm text-orange-500 font-bold hover:underline">
              careers@globalnewstime.com &rarr;
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}