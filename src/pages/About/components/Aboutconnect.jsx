import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-default mb-4 text-blue-800">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to enhance your telecommunications infrastructure?
            Contact our experts today for a personalized consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* CONTACT INFO */}
          <div className="space-y-6">

            {/* EMAIL */}
            <div className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 text-gray-800">Email Us</h4>
                <p>sales@teleconnect.com</p>
                <p>support@teleconnect.com</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 text-gray-800">Call Us</h4>
                <p className="text-xl font-semibold">+1 (555) 123-4567</p>
                <p>Mon - Fri: 9AM - 6PM EST</p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1 text-gray-800">Visit Us</h4>
                <p>123 Telecom Tower</p>
                <p>New York, NY 10001</p>
              </div>
            </div>

          </div>

          {/* CONTACT FORM */}
          <div className="bg-gray-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Send us a message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
