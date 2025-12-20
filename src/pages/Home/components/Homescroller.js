import React from "react";

export default function CountryTicker() {
  const countries = [
    { name: "United States", iso: "us", dial: "+1" },
    { name: "United Kingdom", iso: "gb", dial: "+44" },
    { name: "Canada", iso: "ca", dial: "+1" },
    { name: "Australia", iso: "au", dial: "+61" },
    { name: "Germany", iso: "de", dial: "+49" },
    { name: "France", iso: "fr", dial: "+33" },
    { name: "Japan", iso: "jp", dial: "+81" },
    { name: "India", iso: "in", dial: "+91" }
  ];

  return (
    <div className="bg-blue-900 py-16 overflow-hidden">
      <div className="w-full overflow-hidden">

        {/* Animation */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          /* Desktop speed */
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }

          /* Mobile speed */
          @media (max-width: 640px) {
            .animate-scroll {
              animation: scroll 5s linear infinite;
            }
          }
        `}</style>

        <div className="flex animate-scroll">

          {/* FIRST SET */}
          {countries.map((c, i) => (
            <div
              key={`first-${i}`}
              className="flex-shrink-0 mx-5 bg-white rounded-xl shadow-md p-5"
              style={{ width: "300px" }}
            >
              <div className="flex items-center gap-5">
                <div className="w-20 h-14 border rounded-md overflow-hidden">
                  <img
                    src={`https://flagcdn.com/w160/${c.iso}.png`}
                    alt={c.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold">{c.name}</span>
                  <span className="text-sm font-mono border px-4 py-1 rounded-md">
                    {c.dial}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* DUPLICATE SET */}
          {countries.map((c, i) => (
            <div
              key={`second-${i}`}
              className="flex-shrink-0 mx-5 bg-white border-2 border-orange-500 rounded-xl shadow-md p-5"
              style={{ width: "300px" }}
            >
              <div className="flex items-center gap-5">
                <div className="w-20 h-14 border rounded-md overflow-hidden">
                  <img
                    src={`https://flagcdn.com/w160/${c.iso}.png`}
                    alt={c.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold">{c.name}</span>
                  <span className="text-sm font-mono border px-4 py-1 rounded-md">
                    {c.dial}
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
