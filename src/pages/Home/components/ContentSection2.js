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
            Advanced Dialer Solutions for
            <br />
            <span
              style={{ marginLeft: "15px" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 sm:ml-[15px]"
            >
              Modern Businesses
            </span>
          </h2>
        </div>

        {/* SERVICE 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/assets/homecontent4.jpg"
              alt="Predictive Dialer Solutions"
              className="rounded-xl object-cover w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-full"
            />
          </div>

          <div className="w-full md:w-1/2 text-gray-800 px-4 sm:px-0">
            <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-5 text-gray-900">
              Predictive Dialer Solutions
            </h3>

            <p className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-justify">
              Our predictive dialer solutions are designed to intelligently pace
              outbound calls, ensuring agents are connected only when live
              customers answer. By analyzing real-time agent availability, call
              progress, and historical data, the system optimizes dialing speed
              to reduce idle time and increase meaningful conversations across
              high-volume campaigns.
            </p>

            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-justify">
              With built-in compliance controls, call pacing safeguards, and
              performance monitoring, businesses maintain operational accuracy
              while scaling outreach efforts. Real-time dashboards, campaign
              insights, and seamless CRM integration empower teams to refine
              strategies, improve agent efficiency, and consistently achieve
              higher engagement outcomes.
            </p>
          </div>
        </div>

        {/* SERVICE 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/assets/homecontent5.jpg"
              alt="Auto Dialer Solutions"
              className="rounded-xl object-cover w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-full"
            />
          </div>

          <div className="w-full md:w-1/2 text-gray-800 px-4 sm:px-0">
            <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-5 text-gray-900">
              Auto Dialer Solutions
            </h3>

            <p className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-justify">
              Our auto dialer solutions streamline outbound calling by
              automatically dialing contacts from predefined lists and routing
              answered calls directly to agents. This approach eliminates manual
              dialing efforts, improves calling consistency, and allows teams to
              focus on delivering effective conversations rather than managing
              call workflows.
            </p>

            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-justify">
              Featuring flexible dialing modes, live call supervision, and CRM
              connectivity, our auto dialers adapt to diverse business use cases.
              Detailed reporting and real-time performance metrics provide clear
              visibility into campaign results, enabling smarter decision-making
              and continuous optimization of outreach strategies.
            </p>
          </div>
        </div>

        {/* SERVICE 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/assets/homecontent6.jpg"
              alt="Call Center Dialer Solutions"
              className="rounded-xl object-cover w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-full"
            />
          </div>

          <div className="w-full md:w-1/2 text-gray-800 px-4 sm:px-0">
            <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-5 text-gray-900">
              Call Center Dialer Solutions
            </h3>

            <p className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-justify">
              Our call center dialer solutions offer a unified platform for
              managing inbound and outbound communication at scale. Advanced
              dialing logic, intelligent call routing, IVR functionality, and
              queue management help contact centers maintain efficiency while
              delivering consistent customer experiences across all touchpoints.
            </p>

            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-[17px] leading-7 sm:leading-8 text-justify">
              With real-time analytics, call monitoring, and detailed reporting,
              organizations gain full visibility into agent performance and
              operational efficiency. These insights enable continuous workflow
              optimization, improved service quality, and confident scaling as
              business demands evolve.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}