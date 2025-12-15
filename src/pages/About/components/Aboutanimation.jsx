import { User, Headphones, ShieldCheck, Star, Globe2, Clock } from "lucide-react";

const features = [
  { title: "About Us", icon: <User className="w-8 h-8 text-yellow-400" />, desc: "We provide reliable VoIP solutions tailored for your business." },
  { title: "24/7 Support", icon: <Headphones className="w-8 h-8 text-green-400" />, desc: "Our team is available round the clock to assist you." },
  { title: "Dedicated Account Manager", icon: <ShieldCheck className="w-8 h-8 text-red-400" />, desc: "A personal manager to handle all your queries and services." },
  { title: "Test Credit", icon: <Star className="w-8 h-8 text-purple-400" />, desc: "Get free test credit to experience our VoIP services risk-free." },
  { title: "Global Coverage", icon: <Globe2 className="w-8 h-8 text-blue-400" />, desc: "Connect to international destinations with ease." },
  { title: "Low Latency", icon: <Clock className="w-8 h-8 text-pink-400" />, desc: "Experience fast and reliable voice connections." },
];

export default function VoIPFeatures() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our VoIP Services</h2>
          <p className="text-lg text-gray-300">Reliable, efficient, and tailored for your business needs</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
