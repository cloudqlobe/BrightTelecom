import { Phone, Shield, Zap, Globe, Users, Headphones, Video, MessageSquare, Lock, BarChart3, Cloud, Settings, CheckCircle2, TrendingUp, Smartphone } from 'lucide-react';

export default function AboutUs() {
  const quickFeatures = [
    { icon: Lock, text: 'Secure Calls', color: 'blue' },
    { icon: Cloud, text: 'Cloud Storage', color: 'blue' },
    { icon: Headphones, text: '24/7 Support', color: 'blue' },
    { icon: Settings, text: 'Easy Config', color: 'blue' },
    { icon: Video, text: 'HD Video', color: 'blue' },
    { icon: MessageSquare, text: 'Messaging', color: 'blue' },
    { icon: Smartphone, text: 'Mobile Apps', color: 'blue' },
    { icon: TrendingUp, text: 'Scalable', color: 'blue' }
  ];
  return (
    <section className="bg-white py-16 font-inter">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 style={{fontWeight:"300"}} className="text-4xl mb-6 leading-tight">
              <span className="text-gray-800">About Our </span>
              <span className="text-orange-500">VoIP Services</span>
            </h2>

            <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
              We provide enterprise-grade VoIP communication solutions designed
              to deliver exceptional call quality, high reliability, and secure
              global connectivity for modern businesses. Our advanced network
              infrastructure supports low-latency routing, intelligent traffic
              management, and carrier-grade redundancy to ensure uninterrupted
              communication across regions. Whether you operate a growing
              startup, an established enterprise, or a telecom reseller, our
              scalable VoIP services adapt seamlessly to your operational needs,
              enabling efficient collaboration, cost optimization, and
              consistent performance while maintaining complete transparency
              and control.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src="/assets/7055152.jpg"
              alt="VoIP Illustration"
              className="w-full rounded-xl"
            />
          </div>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {quickFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-200/50 hover:border-blue-300 transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <p className="text-slate-700 font-semibold text-sm group-hover:text-blue-600 transition-colors">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
