import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
// import { HiMail } from "react-icons/hi";
// import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Logo */}
          <div className="text-2xl font-bold text-white">Ahmed Amer</div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=100010224039198"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 font-bold transition-colors text-xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=201033705805"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 font-bold transition-colors text-xl"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/ahmed_3amer118"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 font-bold transition-colors text-xl"
              aria-label="Instagram"
            >
              <FaInstagram className="font-bold" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-amer-884242289"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 font-bold transition-colors text-xl"
              aria-label="LinkedIn"
              
            >
              <FaLinkedin />
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 ">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Egypt, Cairo, Obour city</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-400" />
              <a href="tel:01033705805" className="hover:text-blue-400 transition-colors">
                01033705805
              </a>
            </div>
            <div className="flex items-center space-x-3">
              {/* <HiMail className="text-blue-400" /> */}
              <a href="mailto:amer73090@gmail.com" className="hover:text-blue-400 transition-colors">
                amer73090@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright/Made with love */}
        <div className="mt-12 pt-6 border-t border-white  text-center">
          <p className="flex items-center justify-center space-x-1">
            <span>Made with</span>
            {/* <FaHeart className="text-red-500 mx-1" /> */}
            <span>by</span>
            <a 
              href="mailto:amer73090@gmail.com" 
              className="text-blue-400 hover:underline ml-1"
            >
              Ahmed Amer
            </a>
          </p>
          <p className="mt-2 text-sm text-gray-500">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;