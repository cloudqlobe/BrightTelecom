export default function ContentSection2() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* MAIN HEADING */}
        <div className="text-center">
          <h2
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", fontWeight: "300" }}
            className="text-4xl md:text-5xl text-slate-900 mb-4"
          >
            Global Voice Solutions
            <br />
            <span
              style={{ marginLeft: "15px" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"
            >
              Powered by GIANT VOIP
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
  GIANT VOIP delivers high-performance CC voice routes specifically designed for modern call centers and high-volume outbound operations. Our infrastructure is powered by multiple tier-1 carriers, ensuring low latency, stable connectivity, and consistently clear voice quality across domestic and international destinations. Even during peak traffic periods, businesses experience smooth call flow, minimal jitter, and reliable voice transmission that supports large-scale campaigns.
</p>

<p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
  With intelligent routing algorithms, automatic failover protection, and continuous quality monitoring, our CC voice routes maintain high answer rates and reduced call failures. Real-time traffic optimization allows enterprises to scale operations seamlessly while accessing detailed performance reports, quality metrics, and operational insights—giving full visibility and control over voice traffic without service interruptions.
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
  GIANT VOIP’s CLI routes ensure accurate and consistent caller ID presentation, helping businesses build credibility and significantly improve call answer rates. Each route is carefully tested and validated to comply with regional telecom regulations, allowing seamless local and international connectivity while reducing the risk of call blocking or filtering by operators.
</p>

<p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
  Backed by real-time monitoring and adaptive routing technology, our CLI solutions minimize call rejections and maintain stable CLI display across networks. Businesses benefit from transparent analytics, improved campaign performance, and enhanced customer engagement, making our CLI routes ideal for enterprises requiring reliability, compliance, and consistent call delivery.
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
  GIANT VOIP provides reliable CLI and CC termination services through a globally distributed carrier network built for performance and scalability. Our termination routes are optimized for high delivery rates, crystal-clear audio quality, and minimal call drops, ensuring smooth and dependable voice communication across multiple regions and telecom operators.
</p>

<p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
  Leveraging advanced routing intelligence, live traffic supervision, and proactive quality management, we ensure consistent and compliant voice termination for mission-critical business operations. Our scalable infrastructure supports long-term growth, operational stability, and enterprise-level reliability, making GIANT VOIP a trusted partner for global voice termination needs.
</p>

          </div>
        </div>

      </div>
    </section>
  );
}
