import { PhoneCall, ShieldCheck, Globe } from "lucide-react";

export default function AboutUsSections() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-32">

        {/* Section 1: About Us & Working Pattern */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-12">
          {/* Content */}
          <div className="space-y-6 max-w-xl order-1">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-50 p-3 rounded-lg inline-flex">
                <Globe className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                About Us & Our Working Pattern
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              We are a leading VoIP solutions provider, dedicated to connecting businesses and individuals worldwide. Our working pattern revolves around efficiency, reliability, and innovation, ensuring seamless communication for our clients across multiple regions and platforms.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              By leveraging modern tools, intelligent routing, and optimized workflows, we maintain exceptional service quality. Our team constantly monitors operations to quickly address any issues and improve our systems, keeping communication smooth and uninterrupted.
            </p>
          </div>

          {/* Image */}
          <div className="w-full order-2 md:order-2">
            <img
              src="/assets/6180780.jpg"
              alt="About Us"
              className="rounded-2xl w-full object-cover mt-6 md:mt-0"
            />
          </div>
        </div>

        {/* Section 2: Service Quality */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-12">
          {/* Content */}
          <div className="space-y-6 max-w-xl order-1 md:order-2">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-3 rounded-lg inline-flex">
                <ShieldCheck className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Service Quality
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              Our VoIP services guarantee crystal-clear calls and minimal latency. Using carrier-grade infrastructure, optimized regional routes, and real-time monitoring, we provide reliable, high-quality communication for businesses and individual users alike.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              From conference calls to customer service lines, we ensure smooth connectivity. Continuous updates, quality audits, and proactive troubleshooting help maintain superior service performance and customer satisfaction across every interaction.
            </p>
          </div>

          {/* Image */}
          <div className="w-full order-2 md:order-1">
            <img
              src="/assets/5_communication02.jpg"
              alt="Service Quality"
              className="rounded-2xl w-full object-cover mt-6 md:mt-0"
            />
          </div>
        </div>

        {/* Section 3: Support & Assistance */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-12">
          {/* Content */}
          <div className="space-y-6 max-w-xl order-1">
            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-3 rounded-lg inline-flex">
                <PhoneCall className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Support & Assistance
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              We provide 24/7 customer support to ensure uninterrupted communication for all clients. Our dedicated account managers and technical teams are ready to handle any issue promptly, minimizing downtime and maintaining trust.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              Whether handling minor inquiries or critical incidents, our team responds efficiently with detailed guidance and actionable solutions. We focus on building long-term relationships by delivering consistent support and fostering seamless user experiences.
            </p>
          </div>

          {/* Image */}
          <div className="w-full order-2 md:order-2">
            <img
              src="/assets/6247730.jpg"
              alt="Support & Assistance"
              className="rounded-2xl w-full object-cover mt-6 md:mt-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
