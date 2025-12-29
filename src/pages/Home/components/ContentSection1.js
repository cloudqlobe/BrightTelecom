export default function ContentSection2() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-inter">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 sm:gap-20 md:gap-24">

        {/* MAIN HEADING */}
        <div className="text-center px-4">
          <h2
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              fontWeight: "300"
            }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4 leading-tight"
          >
            Global Voice Solutions {" "}
            <br />
            <span
              style={{ marginLeft: "15px" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 sm:ml-[15px]"
            >
              Powered by GIANT VOIP
            </span>
          </h2>
        </div>

        {/* SERVICE 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/assets/homecontent1.jpg"
              alt="CC Voice Routes"
              className="rounded-xl object-cover w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-full"
            />
          </div>

          <div className="w-full md:w-1/2 text-gray-800 px-4 sm:px-0">
            <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-5 text-gray-900">
              CC Voice Routes
            </h3>

            <p className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-justify">
              GIANT VOIP delivers high-performance CC voice routes purpose-built
              for modern call centers and high-volume outbound operations. Our
              infrastructure is powered by multiple tier-1 carriers, enabling
              low latency, stable interconnections, and consistently clear voice
              quality across domestic and international destinations—even during
              peak traffic windows and heavy campaign loads.
            </p>

            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-justify">
              Through intelligent routing logic, automatic failover protection,
              and continuous quality monitoring, our CC voice routes maintain
              strong answer rates and reduced call failures. Enterprises gain
              real-time traffic optimization, detailed reporting visibility, and
              seamless scalability while retaining full operational control and
              service transparency.
            </p>
          </div>
        </div>

        {/* SERVICE 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/assets/homecontent2.jpg"
              alt="CLI Routes"
              className="rounded-xl object-cover w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-full"
            />
          </div>

          <div className="w-full md:w-1/2 text-gray-800 px-4 sm:px-0">
            <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-5 text-gray-900">
              CLI Routes
            </h3>

            <p className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-justify">
              GIANT VOIP's CLI routes ensure accurate and consistent caller ID
              presentation, helping businesses establish credibility and improve
              call answer rates across local and international markets. Each
              route is thoroughly tested and validated to comply with regional
              telecom regulations, reducing the risk of call blocking or
              operator-level filtering.
            </p>

            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-justify">
              Supported by adaptive routing technology and real-time traffic
              monitoring, our CLI solutions minimize call rejections while
              maintaining stable CLI display across diverse carrier networks.
              Businesses benefit from transparent analytics, improved campaign
              performance, and stronger customer engagement through reliable and
              compliant call delivery.
            </p>
          </div>
        </div>

        {/* SERVICE 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/assets/homecontent3.jpg"
              alt="CLI & CC Termination"
              className="rounded-xl object-cover w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-full"
            />
          </div>

          <div className="w-full md:w-1/2 text-gray-800 px-4 sm:px-0">
            <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-5 text-gray-900">
              CLI & CC Termination
            </h3>

            <p className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-justify">
              GIANT VOIP provides reliable CLI and CC termination services
              through a globally distributed carrier network engineered for
              performance, scalability, and long-term operational stability.
              Our termination routes are optimized to deliver high completion
              rates, minimal call drops, and crystal-clear audio quality across
              multiple regions and operators.
            </p>

            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-justify">
              By leveraging advanced routing intelligence, proactive quality
              control, and live traffic supervision, we ensure consistent and
              compliant voice termination for mission-critical communication.
              Our scalable infrastructure supports sustained business growth
              while delivering dependable, enterprise-grade global connectivity.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}