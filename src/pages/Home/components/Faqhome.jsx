import {
  PhoneCall,
  Settings,
  ShieldCheck,
  Globe,
  BarChart2,
  ChevronDown,
  Headphones
} from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [active, setActive] = useState(null);

  // LEFT SIDE (5 ITEMS)
  const leftItems = [
    {
      icon: <PhoneCall className="w-6 h-6 text-blue-600" />,
      title: "Call Quality"
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: "Global Coverage"
    },
    {
      icon: <Settings className="w-6 h-6 text-purple-600" />,
      title: "Integration"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose-600" />,
      title: "Security"
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-amber-600" />,
      title: "Analytics"
    }
  ];

  // RIGHT SIDE (6 ITEMS)
  const rightFaqs = [
    {
      question: "How do you ensure crystal-clear VoIP call quality?",
      answer:
        "We use premium carrier-grade routes, intelligent traffic routing, and real-time monitoring to deliver low latency and high voice clarity."
    },
    {
      question: "Do you support international call termination?",
      answer:
        "Yes, our VoIP platform supports stable and reliable termination across 150+ countries with optimized routing."
    },
    {
      question: "Can your services integrate with our systems?",
      answer:
        "We support SIP, API, and CRM integrations to ensure seamless compatibility with dialers and call center platforms."
    },
    {
      question: "How secure are your VoIP services?",
      answer:
        "Our services include encryption, fraud detection, traffic filtering, and strict access control policies."
    },
    {
      question: "Do you provide call monitoring and analytics?",
      answer:
        "Yes, we provide real-time dashboards, call detail records, ASR, ACD, and performance analytics."
    },
    {
      question: "Do you offer technical support?",
      answer:
        "We provide 24/7 technical support with proactive monitoring by experienced VoIP engineers."
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 ">
      <div className="max-w-7xl mx-auto bg-gray-200 border border-gray-200 rounded-2xl p-8">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Everything you need to know about our VoIP services and capabilities.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-4">
            {leftItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200"
              >
                <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-sm text-gray-800">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4">
            {rightFaqs.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4"
              >
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h4 className="text-sm text-gray-900 pr-4">
                    {item.question}
                  </h4>
                  <ChevronDown
                    className={`w-8 h-[28px] transition-transform ${
                      active === index
                        ? "rotate-180 text-emerald-600"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {active === index && (
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
