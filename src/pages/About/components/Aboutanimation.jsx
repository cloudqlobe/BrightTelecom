import {
  PhoneCall,
  Headphones,
  ShieldCheck,
  Globe2,
  BarChart3,
  Settings
} from "lucide-react";

const features = [
  {
    title: "High-Quality Voice Routes",
    desc: "Crystal-clear voice routes optimized for stability, clarity, and consistent call performance across regions.",
    icon: PhoneCall,
    bg: "bg-blue-100",
    color: "text-blue-600"
  },
  {
    title: "24/7 Network Monitoring",
    desc: "Continuous monitoring ensures real-time issue detection, proactive fixes, and uninterrupted service delivery.",
    icon: Headphones,
    bg: "bg-green-100",
    color: "text-green-600"
  },
  {
    title: "Secure Call Infrastructure",
    desc: "Advanced security layers protect voice traffic against fraud, spoofing, and unauthorized access.",
    icon: ShieldCheck,
    bg: "bg-red-100",
    color: "text-red-600"
  },
  {
    title: "Global Termination Coverage",
    desc: "Seamless voice termination across multiple countries with reliable carrier-grade connectivity.",
    icon: Globe2,
    bg: "bg-purple-100",
    color: "text-purple-600"
  },
  {
    title: "Real-Time Analytics",
    desc: "Detailed call insights, ASR, ACD, and performance metrics to support data-driven decisions.",
    icon: BarChart3,
    bg: "bg-orange-100",
    color: "text-orange-600"
  },
  {
    title: "Flexible Integration",
    desc: "Easily integrate with dialers, CRMs, and PBX systems through secure APIs and SIP compatibility.",
    icon: Settings,
    bg: "bg-cyan-100",
    color: "text-cyan-600"
  }
];

export default function VoIPFeatures() {
  return (
    <section className="w-full bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-sans border border-gray-300">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-3 sm:mb-4 px-2">
            Powerful VoIP Features Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Global Communication
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Our VoIP platform delivers performance, reliability, and scalability
            designed to support modern enterprises and telecom operators.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 md:p-8 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-4 sm:mb-5`}
                >
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-6 sm:leading-7 text-sm sm:text-base">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}