import React, { useState } from 'react';
import { Search, Phone, DollarSign, Settings, Shield, Headphones, Wifi, ChevronDown, ChevronUp } from 'lucide-react';

const VoIPFAQ = () => {
  const [activeTab, setActiveTab] = useState('getting-started');
  const [searchQuery] = useState('');
  const [openQuestion, setOpenQuestion] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: Phone, color: 'bg-blue-500' },
    { id: 'pricing', name: 'Pricing & Plans', icon: DollarSign, color: 'bg-green-500' },
    { id: 'technical', name: 'Technical', icon: Settings, color: 'bg-purple-500' },
    { id: 'security', name: 'Security', icon: Shield, color: 'bg-red-500' },
    { id: 'support', name: 'Support', icon: Headphones, color: 'bg-orange-500' },
    { id: 'connectivity', name: 'Connectivity', icon: Wifi, color: 'bg-teal-500' },
  ];

  const faqs = {
    'getting-started': [
      { q: 'What is VoIP and how does it work?', a: 'VoIP (Voice over Internet Protocol) is a technology that allows you to make voice calls using a broadband internet connection instead of a regular phone line. It converts your voice into digital data packets and transmits them over the internet.' },
      { q: 'What equipment do I need to use VoIP?', a: 'You need a stable internet connection, a VoIP-compatible phone or softphone application, and optionally a router with QoS settings for better call quality.' },
      { q: 'Can I keep my existing phone number?', a: 'Yes, most VoIP providers support number porting, allowing you to transfer your existing phone number to the VoIP service.' },
    ],
    'pricing': [
      { q: 'How much does VoIP service cost?', a: 'VoIP pricing varies by provider and plan. Basic plans start from $10-20 per month per user, while enterprise plans with advanced features can cost $30-50+ per user monthly.' },
      { q: 'Are there any hidden fees?', a: 'Reputable VoIP providers are transparent about pricing. However, always check for setup fees, international calling rates, and hardware costs if applicable.' },
      { q: 'Can I upgrade or downgrade my plan?', a: 'Yes, most VoIP services offer flexible plans that can be adjusted based on your business needs at any time.' },
    ],
    'technical': [
      { q: 'What internet speed do I need for VoIP?', a: 'For optimal call quality, we recommend at least 100 kbps upload and download speed per concurrent call. For HD voice, 1 Mbps or higher is preferred.' },
      { q: 'Does VoIP work during power outages?', a: 'VoIP requires internet connectivity and power. Battery backups for your router and devices can maintain service during short outages.' },
      { q: 'Can I use VoIP with my existing network?', a: 'Yes, VoIP integrates with most existing networks. However, network assessment and QoS configuration may be needed for optimal performance.' },
    ],
    'security': [
      { q: 'Is VoIP secure?', a: 'Modern VoIP systems use encryption protocols like TLS and SRTP to secure voice data. Choose providers that offer end-to-end encryption.' },
      { q: 'How do you protect against eavesdropping?', a: 'We implement multiple security layers including encrypted signaling, secure media transmission, and regular security audits to prevent unauthorized access.' },
      { q: 'What about compliance and regulations?', a: 'Our VoIP solutions comply with major regulations including HIPAA, GDPR, and PCI-DSS depending on your industry requirements.' },
    ],
    'support': [
      { q: 'What support options are available?', a: 'We offer 24/7 phone support, live chat, email ticketing, and an extensive knowledge base with video tutorials and documentation.' },
      { q: 'How quickly can issues be resolved?', a: 'Critical issues are addressed immediately with 99.9% uptime SLA. Standard issues are typically resolved within 4-8 hours.' },
      { q: 'Do you offer training for new users?', a: 'Yes, we provide comprehensive onboarding, training sessions, and ongoing educational resources for all users.' },
    ],
    'connectivity': [
      { q: 'What happens if my internet goes down?', a: 'Most VoIP services offer call forwarding to mobile phones or backup numbers. Cloud-based systems can route calls to alternative locations.' },
      { q: 'Can I use VoIP while traveling?', a: 'Absolutely! VoIP works anywhere with internet access. Use softphone apps on your mobile device or laptop to stay connected globally.' },
      { q: 'Does VoIP work with mobile devices?', a: 'Yes, VoIP apps are available for iOS and Android, allowing you to make and receive calls on your business number from anywhere.' },
    ],
  };

  const filteredFaqs = faqs[activeTab].filter(faq =>
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Mobile Category Dropdown */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-500 rounded-xl"
          >
            <div className="flex items-center gap-3">
              {(() => {
                const Icon = categories.find(c => c.id === activeTab)?.icon;
                return Icon ? <Icon className="text-blue-600" size={20} /> : null;
              })()}
              <span className="font-medium text-blue-700">
                {categories.find(c => c.id === activeTab)?.name}
              </span>
            </div>
            {showMobileMenu ? (
              <ChevronUp className="text-blue-600" size={20} />
            ) : (
              <ChevronDown className="text-blue-600" size={20} />
            )}
          </button>
          
          {showMobileMenu && (
            <div className="mt-2 space-y-2 bg-white border-2 border-gray-200 rounded-xl p-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveTab(category.id);
                      setShowMobileMenu(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === category.id
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-500'
                        : 'bg-gray-50 border-2 border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className={`${category.color} p-2 rounded-lg`}>
                      <Icon className="text-white" size={16} />
                    </div>
                    <span className={`font-medium text-sm ${activeTab === category.id ? 'text-blue-700' : 'text-gray-700'}`}>
                      {category.name}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex gap-6 lg:gap-8">
          {/* Left Sidebar - Categories (Desktop) */}
          <div className="hidden lg:flex w-64 xl:w-72 flex-shrink-0">
            <div className="sticky top-6">
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`w-full flex items-center gap-3 xl:gap-4 px-3 xl:px-4 py-3 xl:py-4 rounded-xl transition-all duration-200 ${
                        activeTab === category.id
                          ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-500 shadow-md'
                          : 'bg-gray-50 border-2 border-transparent hover:border-gray-200 hover:shadow'
                      }`}
                    >
                      <div className={`${category.color} p-2 xl:p-2.5 rounded-lg`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      <span className={`font-medium text-sm xl:text-base ${activeTab === category.id ? 'text-blue-700' : 'text-gray-700'}`}>
                        {category.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content - FAQ */}
          <div className="flex-1 min-w-0">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                {categories.find(c => c.id === activeTab)?.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'} 
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-3 sm:pr-4">{faq.q}</h3>
                      {openQuestion === index ? (
                        <ChevronUp className="text-blue-600 flex-shrink-0" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                      )}
                    </button>
                    {openQuestion === index && (
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                        <div className="border-t-2 border-gray-100 pt-3 sm:pt-4">
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8 sm:py-12 bg-gray-50 rounded-xl">
                  <Search className="mx-auto text-gray-400 mb-4" size={40} />
                  <p className="text-gray-600 text-base sm:text-lg px-4">No questions found matching your search.</p>
                  <p className="text-gray-500 text-sm sm:text-base mt-2 px-4">Try different keywords or browse categories.</p>
                </div>
              )}
            </div>

            {/* Contact Support */}
            <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 border-2 border-blue-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Still have questions?</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Our support team is here to help you 24/7</p>
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoIPFAQ;