import React from "react";
import { Facebook, Linkedin, Instagram, Twitter, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-20 py-12 font-telegraf">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12 border-b border-gray-700">
          <div>
            <h2 className="text-4xl md:text-6xl font-light leading-tight">
              Subscribe <br /> Our Newsletter
            </h2>
          </div>
          <div>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              eu orci eleifend, viverra orci ac, ultrices ipsum.
            </p>
            <form className="flex items-center border border-white rounded-[12px] overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-5 text-gray-300 bg-transparent outline-none"
              />
              <button
                type="submit"
                className="bg-transparent px-4 py-3 text-blue-400 hover:text-blue-500 transition"
              >
                <Send size={22} />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section - Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 border-b border-gray-700">
          {/* About */}
          <div>
            <h3 className="text-lg md:text-3xl font-semibold mb-4">About</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              eu orci eleifend, viverra orci ac, ultrices ipsum. Nullam vitae pretium
              elit. Mauris ac lacinia sem.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-md"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-md"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-md"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-md"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-3xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Resources</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-lg md:text-3xl font-semibold mb-4">Legals</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Terms & Condition</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Cookies Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-3xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-white">Phone:</span> +1(234) 4564 4564
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <span className="font-semibold text-white">Email:</span> info@xyz.com
            </p>
          </div>
          </div>

         
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-gray-400 text-sm">
          <p>support@unitechagency.com</p>
          <p className="mt-4 md:mt-0">
            Copyright © UnitechAgency 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
