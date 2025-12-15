import React from 'react';
import { PhoneCall, Settings, ShieldCheck, Globe } from "lucide-react";

export default function Servicescontent() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-32">

        {/* Section 1: CLI Routes */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-12">
          {/* Content */}
          <div className="space-y-6 max-w-xl order-1">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-50 p-3 rounded-lg inline-flex">
                <Globe className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                CLI Routes
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              Our CLI routes ensure accurate caller ID delivery with high answer
              rates and excellent call clarity. We provide stable and verified
              CLI routing for multiple destinations, enabling businesses to
              establish trust and improve customer engagement.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              Using optimized carrier paths and real-time monitoring, we maintain
              consistent performance and minimal call failures. Our CLI routes
              are suitable for enterprises, call centers, and service providers
              requiring reliable outbound voice communication.
            </p>
          </div>

          {/* Image */}
          <div className="w-full order-2 md:order-2">
            <img
              src="/assets/5159816.jpg"
              alt="CLI Routes"
              className="rounded-2xl w-full object-cover mt-6 md:mt-0"
            />
          </div>
        </div>

        {/* Section 2: CC Routes */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-12">
          {/* Content */}
          <div className="space-y-6 max-w-xl order-1 md:order-2">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-3 rounded-lg inline-flex">
                <ShieldCheck className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                CC Routes
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              Our CC routes are designed for high-volume calling with stable
              connectivity and low latency. Built on carrier-grade infrastructure,
              these routes support consistent call quality for contact centers
              and enterprise-level operations.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              We focus on route optimization, redundancy, and quality control to
              minimize call drops and improve completion rates. Continuous testing
              and performance analysis ensure reliable communication across all
              supported regions.
            </p>
          </div>

          {/* Image */}
          <div className="w-full order-2 md:order-1">
            <img
              src="/assets/7055173.jpg"
              alt="CC Routes"
              className="rounded-2xl w-full object-cover mt-6 md:mt-0"
            />
          </div>
        </div>

        {/* Section 3: Dialer Solutions */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-12">
          {/* Content */}
          <div className="space-y-6 max-w-xl order-1">
            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-3 rounded-lg inline-flex">
                <Settings className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Dialer Solutions
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              Our advanced dialer solutions are built to maximize agent efficiency
              and improve call productivity. We support predictive, progressive,
              and manual dialers tailored to meet diverse business requirements.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              With real-time analytics, flexible configurations, and seamless
              VoIP integration, our dialer platforms help businesses scale their
              calling operations while maintaining quality, compliance, and
              performance.
            </p>
          </div>

          {/* Image */}
          <div className="w-full order-2 md:order-2">
            <img
              src="/assets/6247730.jpg"
              alt="Dialer Solutions"
              className="rounded-2xl w-full object-cover mt-6 md:mt-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
