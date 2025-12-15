import { useState } from 'react';
import { Linkedin, Instagram, Facebook, MessageCircle, X, Menu } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-4 shadow-sm">
        <div className="max-w-9xl mx-auto flex items-center justify-between">

          {/* LEFT — LOGO */}
          <div className="text-lg sm:text-xl">
            <a href="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/assets/logo1.png"
                alt="Logo"
                style={{ width: "68px", height: "50px", marginRight: "15px" }}
              />
              <div className='flex hide-brand-text'>
                <span className="text-[25px] text-slate-800 font-semibold">GIANT</span>
                <span className="text-[25px] text-blue-600 ml-2 font-semibold">VOIP</span>
              </div>
            </a>
          </div>


          {/* CENTER — DESKTOP MENU */}
          <ul className="hidden lg:flex items-center space-x-8 lg:space-x-10 font-medium">
            <li>
              <a
                href="/"
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 py-2 relative group"
                onClick={closeMobileMenu}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 py-2 relative group"
                onClick={closeMobileMenu}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>

            <li>
              <a
                href="/services"
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 py-2 relative group"
                onClick={closeMobileMenu}
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 py-2 relative group"
                onClick={closeMobileMenu}
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>

            <li>
              <a
                href="/faq"
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 py-2 relative group"
                onClick={closeMobileMenu}
              >
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>

          {/* RIGHT — DESKTOP SOCIAL ICONS */}
          <div className="hidden lg:flex items-center space-x-3 lg:space-x-4">
            <a href="#" className="transform hover:-translate-y-1 transition-transform duration-200 group">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-green-500/30 transition-all duration-200">
                <MessageCircle className="text-white w-5 h-5" />
              </div>
            </a>

            <a href="#" className="transform hover:-translate-y-1 transition-transform duration-200 group">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-blue-600/30 transition-all duration-200">
                <Linkedin className="text-white w-5 h-5" />
              </div>
            </a>

            <a href="#" className="transform hover:-translate-y-1 transition-transform duration-200 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all duration-200">
                <Instagram className="text-white w-5 h-5" />
              </div>
            </a>

            <a href="#" className="transform hover:-translate-y-1 transition-transform duration-200 group">
              <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-blue-700/30 transition-all duration-200">
                <Facebook className="text-white w-5 h-5" />
              </div>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-slate-700 p-2 rounded-md hover:bg-slate-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="text-xl font-bold text-slate-800">
            Menu
          </div>
          <button
            onClick={toggleMobileMenu}
            className="text-slate-700 hover:bg-slate-100 p-2 rounded-md transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex-1 flex flex-col p-4 pt-6 overflow-y-auto">
          {/* Mobile Navigation Links */}
          <nav className="space-y-2 mb-8">
            <a
              href="/"
              className="block py-3 px-4 text-slate-700 font-medium text-lg rounded-lg hover:bg-slate-100 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-600"
              onClick={closeMobileMenu}
            >
              Home
            </a>

            <a
              href="/about"
              className="block py-3 px-4 text-slate-700 font-medium text-lg rounded-lg hover:bg-slate-100 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-600"
              onClick={closeMobileMenu}
            >
              About
            </a>

            <a
              href="/services"
              className="block py-3 px-4 text-slate-700 font-medium text-lg rounded-lg hover:bg-slate-100 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-600"
              onClick={closeMobileMenu}
            >
              Services
            </a>

            <a
              href="/contact"
              className="block py-3 px-4 text-slate-700 font-medium text-lg rounded-lg hover:bg-slate-100 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-600"
              onClick={closeMobileMenu}
            >
              Contact Us
            </a>

            <a
              href="/faq"
              className="block py-3 px-4 text-slate-700 font-medium text-lg rounded-lg hover:bg-slate-100 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-600"
              onClick={closeMobileMenu}
            >
              FAQ
            </a>
          </nav>

          {/* Mobile Social Icons */}
          <div className="border-t border-slate-200 pt-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <h3 className="text-slate-800 text-sm font-semibold uppercase tracking-wider">Connect With Us</h3>
            </div>

            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="transform hover:-translate-y-1 transition-transform duration-200 group p-2 rounded-lg hover:bg-slate-100"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-green-500/30 transition-all duration-200">
                  <MessageCircle className="text-white w-5 h-5" />
                </div>
              </a>

              <a
                href="#"
                className="transform hover:-translate-y-1 transition-transform duration-200 group p-2 rounded-lg hover:bg-slate-100"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-blue-600/30 transition-all duration-200">
                  <Linkedin className="text-white w-5 h-5" />
                </div>
              </a>

              <a
                href="#"
                className="transform hover:-translate-y-1 transition-transform duration-200 group p-2 rounded-lg hover:bg-slate-100"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all duration-200">
                  <Instagram className="text-white w-5 h-5" />
                </div>
              </a>

              <a
                href="#"
                className="transform hover:-translate-y-1 transition-transform duration-200 group p-2 rounded-lg hover:bg-slate-100"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-blue-700/30 transition-all duration-200">
                  <Facebook className="text-white w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 391px) {
          .hide-brand-text {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;