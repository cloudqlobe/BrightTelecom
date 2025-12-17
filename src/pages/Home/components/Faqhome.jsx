import {
  PhoneCall,
  Settings,
  ShieldCheck,
  Globe,
  BarChart2,
  ChevronDown,
  Headphones,
  MessageSquare,
  Zap,
  Users,
  Cloud,
  Clock
} from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [active, setActive] = useState(0);

  // Feature cards with gradient colors
  const featureCards = [
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: "Call Quality",
      description: "Premium HD audio quality",
      gradient: "from-blue-500 to-indigo-500",
      bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
      border: "border-blue-200"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Coverage",
      description: "150+ countries supported",
      gradient: "from-indigo-500 to-cyan-500",
      bg: "bg-gradient-to-br from-indigo-50 to-cyan-50",
      border: "border-indigo-200"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Integration",
      description: "Seamless system compatibility",
      gradient: "from-cyan-500 to-blue-500",
      bg: "bg-gradient-to-br from-cyan-50 to-blue-50",
      border: "border-cyan-200"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade protection",
      gradient: "from-blue-600 to-indigo-600",
      bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
      border: "border-blue-300"
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Analytics",
      description: "Real-time insights",
      gradient: "from-indigo-600 to-cyan-600",
      bg: "bg-gradient-to-br from-indigo-50 to-cyan-50",
      border: "border-indigo-300"
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How do you ensure crystal-clear VoIP call quality?",
      answer: "We use premium carrier-grade routes, intelligent traffic routing with QoS prioritization, and real-time monitoring to deliver consistently low latency and high voice clarity. Our network is optimized for VoIP with dedicated voice channels.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      question: "Do you support international call termination?",
      answer: "Yes, our VoIP platform supports stable and reliable termination across 150+ countries with optimized routing through Tier-1 carriers. We maintain direct partnerships with local carriers to ensure best rates and highest quality connections.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      question: "Can your services integrate with our existing systems?",
      answer: "Absolutely. We support comprehensive integrations including SIP trunking, REST APIs, webhooks, and CRM integrations (Salesforce, HubSpot, Zoho). Our team provides full documentation and developer support.",
      icon: <Settings className="w-5 h-5" />
    },
    {
      question: "How secure are your VoIP services?",
      answer: "Enterprise-grade security with 256-bit SSL/TLS encryption for all calls, real-time fraud detection, DDoS protection, and strict access controls. We're SOC 2 Type II compliant and conduct regular security audits.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      question: "Do you provide call monitoring and analytics?",
      answer: "Yes, we offer a comprehensive analytics dashboard with real-time monitoring, detailed call records (CDR), ASR/ACD metrics, quality scores, and customizable reports. All data is available through both our dashboard and API.",
      icon: <BarChart2 className="w-5 h-5" />
    },
    {
      question: "What level of technical support do you offer?",
      answer: "24/7 technical support with average response times under 15 minutes. We provide proactive monitoring, dedicated account managers for enterprise clients, and a comprehensive knowledge base with experienced VoIP engineers.",
      icon: <Headphones className="w-5 h-5" />
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
            <MessageSquare className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get answers to common questions about our VoIP services, features, and support.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side - Feature Cards */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Key Features
              </h3>
              <div className="space-y-4">
                {featureCards.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:border-white/40 transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border ${item.border}`}>
                        <div className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-blue-100">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-r from-blue-700/50 to-cyan-700/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <BarChart2 className="w-5 h-5" />
                Performance Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-sm text-blue-100">Service Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-blue-100">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">150+</div>
                  <div className="text-sm text-blue-100">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">15min</div>
                  <div className="text-sm text-blue-100">Avg Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Accordions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Common Questions</h3>
                  <p className="text-gray-600">Browse through {faqItems.length} frequently asked questions</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>Updated weekly</span>
                </div>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all duration-300"
                  >
                    <button
                      onClick={() => setActive(active === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="text-white">
                            {item.icon}
                          </div>
                        </div>
                        <h4 className="font-semibold text-gray-900 pr-4">
                          {item.question}
                        </h4>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                          active === index ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    
                    {active === index && (
                      <div className="p-4 bg-white border-t border-gray-100">
                        <div className="flex gap-4">
                          <div className="w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Support CTA */}
            <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Still have questions?</h4>
                  <p className="text-blue-100 mb-4">
                    Our support team is available 24/7 to help you with any questions.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-5 py-2.5 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      Contact Support
                    </button>
                    <button className="px-5 py-2.5 bg-transparent border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                      View Documentation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">Join 500+ satisfied customers</span>
          </div>
          <h4 className="text-2xl font-bold text-white mb-4">
            Ready to upgrade your VoIP services?
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}