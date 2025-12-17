import React, { useState } from 'react';  
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

const ContactSection = () => {  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (  
    <section id="contact" className="relative py-20 bg-white overflow-hidden">  
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">  
        {/* Header */}
        <div className="text-center mb-16">  
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">  
            Let's Connect & Build<br />The Future Together
          </h2>  
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">  
            Our team of telecom experts is ready to discuss your project needs and provide tailored solutions for your infrastructure.
          </p>  
        </div>  

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">  
          {/* Left Column: Contact Methods */}
          <div className="lg:col-span-1 space-y-8">  
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>  
                  <div>  
                    <h4 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-blue-600 transition-colors">Email</h4>  
                    <p className="text-gray-600 mb-1">sales@teleconnect.com</p>  
                    <p className="text-gray-600">support@teleconnect.com</p>  
                    <span className="inline-block mt-2 text-sm text-blue-600 font-medium">Response within 24 hours</span>
                  </div>  
                </div>  

                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>  
                  <div>  
                    <h4 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-blue-600 transition-colors">Call Us</h4>  
                    <p className="text-2xl font-bold text-blue-600 mb-2">+1 (555) 123-4567</p>  
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Mon - Fri: 9AM - 6PM EST</span>
                    </div>
                  </div>  
                </div>  

                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>  
                  <div>  
                    <h4 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-blue-600 transition-colors">Visit Our Office</h4>  
                    <p className="text-gray-600">123 Telecom Tower</p>  
                    <p className="text-gray-600">New York, NY 10001</p>  
                    <span className="inline-block mt-2 text-sm text-blue-600 font-medium">Schedule a visit →</span>
                  </div>  
                </div>  
              </div>
            </div>
          </div>  

          {/* Right Column: Contact Form & FAQ */}
          <div className="lg:col-span-2 space-y-8">  
            {/* Contact Form Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you shortly</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input  
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"  
                      required
                      placeholder="John Smith"  
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"  
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input  
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"  
                      required
                      placeholder="john@example.com"  
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"  
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input  
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"  
                    placeholder="+1 (555) 123-4567"  
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"  
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea  
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"  
                    required
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."  
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"  
                  ></textarea>  
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <button  
                    type="submit"  
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>  
                </div>
              </form>  
            </div>
          </div>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default ContactSection;