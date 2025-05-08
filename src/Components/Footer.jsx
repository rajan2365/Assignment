
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl text-blue-500 font-bold">SoftSell</span>
          <div>
            {/* <p className="text-xl font-semibold ml-1">SoftSell</p> */}
            {/* <p className="text-sm text-gray-300">Technology</p> */}
          </div>
        </div>

        {/* Offices */}
        <div>
          <p className="font-semibold text-blue-400 mb-1 flex items-center gap-1">
            📍 Location
          </p>
          <p className="text-sm text-gray-300">
            Mainpuri | 206301 | Uttar Pradesh
          </p>
        </div>

        {/* Contact */}
        <div className="text-sm text-gray-300 space-y-1">
          <p className="flex items-center gap-2">
            📞 <span>+91 9675476146</span>
          </p>
          <p className="flex items-center gap-2">
            📧 <span>rajan2362005@gmail.com</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="text-right">
          <p className="font-semibold text-gray-300 mb-2">Social Links</p>
          <div className="flex justify-end gap-3">
            <a href="#" className="p-2 border border-blue-500 rounded-full hover:bg-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 border border-blue-500 rounded-full hover:bg-blue-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 border border-blue-500 rounded-full hover:bg-blue-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm mt-8">
      <p>&copy; 2025 SoftSell. All rights reserved.   By Rajan Tripathi</p>
      </p>
    </footer>
  );
}
