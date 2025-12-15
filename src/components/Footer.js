import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, MessageCircle, ArrowRight, Globe, Shield, Award, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 border-t border-slate-200">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-violet-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">BRIGHT</h3>
                <h3 className="text-xl font-bold text-blue-600">TELECOM</h3>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Leading the future of VoIP communications with innovative solutions that connect people across the globe.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-xs font-semibold text-slate-700">Secure</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold text-slate-700">Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                <Clock className="w-4 h-4 text-violet-600" />
                <span className="text-xs font-semibold text-slate-700">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
              Quick Links
              <div className="ml-2 h-0.5 w-8 bg-gradient-to-r from-violet-600 to-blue-600"></div>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="group flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
              Our Services
              <div className="ml-2 h-0.5 w-8 bg-gradient-to-r from-violet-600 to-blue-600"></div>
            </h4>
            <ul className="space-y-3">
              {['VoIP Solutions', 'Cloud PBX', 'SIP Trunking', 'Video Conferencing', 'Call Analytics'].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="group flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
              Get in Touch
              <div className="ml-2 h-0.5 w-8 bg-gradient-to-r from-violet-600 to-blue-600"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-violet-200 transition-colors">
                  <Phone className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Call Us</p>
                  <a href="tel:+1234567890" className="text-slate-700 font-semibold hover:text-blue-600 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Email Us</p>
                  <a href="mailto:info@brighttelecom.com" className="text-slate-700 font-semibold hover:text-blue-600 transition-colors">
                    info@brighttelecom.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                  <MapPin className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Visit Us</p>
                  <p className="text-slate-700 font-semibold text-sm">
                    123 Telecom Street<br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay Connected</h3>
              <p className="text-white/90 text-sm">Subscribe to get the latest updates and exclusive offers.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300
  text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2
  focus:ring-blue-500 transition-all"
              />

              <button
                className="w-full sm:w-auto px-6 py-3 bg-white text-violet-600 rounded-lg font-semibold
  hover:bg-slate-100 transition-all duration-200 flex items-center justify-center gap-2
  shadow-lg hover:shadow-xl hover:scale-105"
              >

                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Copyright */}
            <div className="text-slate-600 text-sm text-center md:text-left">
              © {currentYear} <span className="font-semibold text-slate-800">Bright Telecom</span>. All rights reserved.
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-slate-600 text-sm font-medium mr-2">Follow Us:</span>
              <a
                href="#"
                className="group relative"
                aria-label="WhatsApp"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-green-500/30 transition-all duration-200 group-hover:scale-110">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
              </a>

              <a
                href="#"
                className="group relative"
                aria-label="LinkedIn"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-200 group-hover:scale-110">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
              </a>

              <a
                href="#"
                className="group relative"
                aria-label="Instagram"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all duration-200 group-hover:scale-110">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </a>

              <a
                href="#"
                className="group relative"
                aria-label="Facebook"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-blue-600/30 transition-all duration-200 group-hover:scale-110">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
              <span className="text-slate-300">|</span>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Terms of Service</a>
              <span className="text-slate-300">|</span>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-slate-600" />
              <span className="text-sm text-slate-600 font-medium">150+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-slate-600" />
              <span className="text-sm text-slate-600 font-medium">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-slate-600" />
              <span className="text-sm text-slate-600 font-medium">Industry Leading</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-slate-600" />
              <span className="text-sm text-slate-600 font-medium">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;