import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-16">
      <div className="bg-white w-full sm:py-10 py-8">
        <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic mb-3">
          About Linklytics
        </h1>
        <p className="text-gray-700 text-sm mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          Linklytics simplifies URL shortening for efficient sharing. Easily
          generate, manage, and track your shortened links. Linklytics
          simplifies URL shortening for efficient sharing. Easily generate,
          manage, and track your shortened links. Linklytics simplifies URL
          shortening for efficient sharing. Easily generate, manage, and track
          your shortened links.
        </p>

        <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          <div className="flex items-start">
            <FaLink className="text-blue-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Simple URL Shortening
              </h2>
              <p className="text-gray-600">
                Experience the ease of creating short, memorable URLs in just a
                few clicks. Our intuitive interface and quick setup process
                ensure you can start shortening URLs without any hassle.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaShareAlt className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Powerful Analytics
              </h2>
              <p className="text-gray-600">
                Gain insights into your link performance with our comprehensive
                analytics dashboard. Track clicks, geographical data, and
                referral sources to optimize your marketing strategies.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaEdit className="text-purple-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Enhanced Security
              </h2>
              <p className="text-gray-600">
                Rest assured with our robust security measures. All shortened
                URLs are protected with advanced encryption, ensuring your data
                remains safe and secure.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaChartLine className="text-red-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Fast and Reliable
              </h2>
              <p className="text-gray-600">
                Enjoy lightning-fast redirects and high uptime with our reliable
                infrastructure. Your shortened URLs will always be available and
                responsive, ensuring a seamless experience for your users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
