"use client";

import { useState, use } from "react"; // 1. Import 'use' from React
import Link from "next/link";
import { FaCheckCircle, FaArrowLeft, FaPaperPlane } from "react-icons/fa";

export default function ApplyJobPage({ params }) {
  // 2. Unwrap the dynamic params promise safely using React.use()
  const unwrappedParams = use(params);
  const jobId = unwrappedParams?.id || "General";

  // Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    coverLetter: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted Data:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        
        {/* SUCCESS STATE UI */}
        {isSubmitted ? (
          <div className="p-8 md:p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto text-4xl animate-bounce">
              <FaCheckCircle />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold text-gray-900">
                Application Submitted!
              </h1>
              <p className="text-gray-600 max-w-md mx-auto text-sm md:text-base">
                Thank you for applying to <strong>Global News Time</strong>. Our recruiting team will review your credentials and get back to you shortly.
              </p>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/career">
                <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition shadow-sm text-sm">
                  Back to Careers
                </button>
              </Link>
              <Link href="/">
                <button className="w-full sm:w-auto border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold px-6 py-3 rounded-xl transition text-sm">
                  Go to Homepage
                </button>
              </Link>
            </div>
          </div>
        ) : (
          
          /* FORM SUBMISSION STATE UI */
          <div>
            <div className="bg-slate-900 p-6 md:p-8 text-white relative">
              <Link href="/career" className="absolute left-6 top-6 text-gray-400 hover:text-white transition flex items-center gap-1 text-sm">
                <FaArrowLeft /> Back
              </Link>
              <div className="text-center pt-4">
                <span className="text-xs uppercase font-bold tracking-widest text-orange-400 px-2 py-1 bg-slate-800 rounded">
                  Job ID: {jobId}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-3">
                  Apply for this Position
                </h2>
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  Please complete the form below to submit your job application.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXX XXXXXX"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Portfolio / LinkedIn URL
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Cover Letter / Brief Notes
                </label>
                <textarea
                  name="coverLetter"
                  rows="4"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Tell us why you are a great fit for Global News Time..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-sm resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <FaPaperPlane className="text-xs" /> Submit Application
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}