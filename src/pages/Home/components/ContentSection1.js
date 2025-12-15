export default function ContentSection2() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* MAIN HEADING */}
        <div className="text-center">
          <h2 style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", fontWeight: "300" }} className="text-4xl md:text-5xl text-slate-900 mb-4">
            Business Voice
            <br />
            <span style={{ marginLeft: "15px" }} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Without Boundaries
            </span>
          </h2>
        </div>

        {/* SERVICE 1 — IMAGE LEFT, CONTENT RIGHT */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/assets/5124556.jpg"
              alt="CC Voice Routes"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl mb-4 text-gray-900">
              CC Voice Routes
            </h3>

            <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
              MARYAAM TELECOM’s CC voice routes are engineered for high-volume call center operations, delivering consistent and crystal-clear call quality with minimal latency. Utilizing a robust, multi-carrier infrastructure with intelligent routing algorithms, we guarantee uninterrupted communication across domestic and international networks. Businesses can scale operations efficiently, maintain superior voice clarity, and reduce dropped calls, ensuring a seamless experience for both customers and agents.
            </p>

            <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
              Beyond call quality, MARYAAM TELECOM provides proactive route monitoring, dynamic traffic management, and detailed analytics to optimize performance continuously. Our CC routes are designed for long-term reliability, adapting to fluctuating traffic while maintaining compliance with industry standards. Enterprises gain improved agent productivity, operational efficiency, and peace of mind knowing their communications are stable, secure, and high-performing at all times.
            </p>
          </div>
        </div>

        {/* SERVICE 2 — CONTENT LEFT, IMAGE RIGHT */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/assets/3692685.jpg"
              alt="CLI Routes"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl mb-4 text-gray-900">
              CLI Routes
            </h3>

            <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
              MARYAAM TELECOM’s CLI routes provide accurate, verified caller ID presentation to enhance answer rates, establish trust, and strengthen business credibility. Our routes are fully optimized for local and international traffic, ensuring that every call is delivered with consistency and reliability, even during high-traffic periods. By maintaining strict compliance with global regulations, we protect businesses from delivery errors and caller ID mismatches.
            </p>

            <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
              Our CLI solutions are equipped with advanced routing logic, real-time performance monitoring, and flexible configurations to meet enterprise requirements. Businesses benefit from detailed reports, transparent analytics, and optimized call flow, reducing call rejection rates and improving campaign efficiency. With MARYAAM TELECOM, companies can execute large-scale campaigns with confidence, ensuring every customer receives professional, reliable communication.
            </p>
          </div>
        </div>

        {/* SERVICE 3 — IMAGE LEFT, CONTENT RIGHT */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/assets/5143151.jpg"
              alt="CLI & CC Termination"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl mb-4 text-gray-900">
              CLI & CC Termination
            </h3>

            <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
              MARYAAM TELECOM’s CLI and CC termination services offer end-to-end reliable voice connectivity for businesses worldwide. Utilizing multi-carrier termination, smart routing, and advanced traffic management, we deliver superior call clarity, minimal latency, and high delivery accuracy. Our solutions guarantee consistent performance across different networks and geographic regions while maintaining full compliance with local and international regulations.
            </p>

            <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
              Businesses gain comprehensive insights through real-time monitoring, route balancing, and detailed analytics, ensuring optimal performance and stability. Designed for high-capacity operations, MARYAAM TELECOM’s termination solutions reduce call drops, maintain excellent audio quality, and provide scalable infrastructure to support growth. Companies can rely on our services for dependable, professional, and globally compliant voice communication.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
