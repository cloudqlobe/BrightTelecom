import { useState } from "react";
import {
  PhoneCall,
  Settings,
  ShieldCheck,
  Globe,
  BarChart2,
  ChevronDown,
  Search
} from "lucide-react";

export default function HelpFAQPage() {
  const [active, setActive] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const leftItems = [
    { icon: <PhoneCall className="w-6 h-6 text-blue-600" />, title: "Call Quality" },
    { icon: <Globe className="w-6 h-6 text-emerald-600" />, title: "Global Coverage" },
    { icon: <Settings className="w-6 h-6 text-purple-600" />, title: "Integration" },
    { icon: <ShieldCheck className="w-6 h-6 text-rose-600" />, title: "Security" },
    { icon: <BarChart2 className="w-6 h-6 text-amber-600" />, title: "Analytics" }
  ];

  const faqs = [
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

  const filteredFaqs = faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full min-h-screen bg-gray-200">

      {/* SEARCH SECTION */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h1 className="text-6xl font-default mb-4 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-600">
            Search our knowledge base for quick answers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-7 h-7" />
              <input
                type="text"
                placeholder="Type your question here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-6 text-lg text-gray-900 border-0 focus:outline-none"
              />
            </div>
          </div>

          {searchQuery && (
            <p className="mt-5 text-sm text-gray-600 text-center font-medium">
              Found {filteredFaqs.length} result
              {filteredFaqs.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>
      </div>

      {/* FAQ CONTENT */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-900 to-indigo-900 border border-yellow-500 squared-2xl p-8">

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT */}
            <div className="space-y-4">
              {leftItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200"
                >
                  <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="space-y-4">
              {filteredFaqs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl px-5 py-4"
                >
                  <button
                    onClick={() => setActive(active === index ? null : index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h4 className="text-sm font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h4>
                    <ChevronDown
                      className={`w-6 h-[28px] transition-transform ${
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
      </div>

    </section>
  );
}
