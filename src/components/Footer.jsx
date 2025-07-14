import React from 'react';
import { Heart, MessageCircle, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Sharon Tanganyika</h3>
                <p className="text-sm text-gold-400">Brand Story Consultant</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Helping brands move from silent to unforgettable through authentic storytelling and resilience strategy.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <MessageCircle size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sharon-tanganyika-5825b9160 " target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/sharontanganyika" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gold-400" />
                <span className="text-gray-300">hello@sharontanganyika.com</span>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="/contact"
                className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Book Discovery Call
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sharon Tanganyika. All rights reserved. | Empowering brands to find their unforgettable voice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;