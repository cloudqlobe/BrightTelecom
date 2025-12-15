export default function ContentSection2() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* MAIN HEADING */}
        <div className="text-center">
          <h2 style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", fontWeight: "300" }} className="text-4xl md:text-5xl text-slate-900 mb-4">
            Advanced Dialer Solutions for
            <br />
            <span style={{ marginLeft: "15px" }} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Modern Businesses
            </span>
          </h2>
        </div>

        {/* SERVICE 1 — IMAGE LEFT, CONTENT RIGHT */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/assets/5132732.jpg"
              alt="Predictive Dialer Solutions"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl mb-4 text-gray-900">
              Predictive Dialer Solutions
            </h3>

            <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
              Our predictive dialer solutions are engineered to maximize agent
              productivity by intelligently dialing multiple numbers and routing
              only answered calls to available agents. This minimizes idle time,
              increases contact rates, and ensures that every campaign reaches
              its full potential. Predictive algorithms adjust dynamically based
              on call outcomes, agent availability, and campaign objectives, so
              businesses can handle high-volume outbound calling efficiently.
            </p>

            <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
              Built on a scalable and reliable infrastructure, these dialers
              maintain consistent call quality and operational efficiency, while
              providing compliance features and call control mechanisms. With
              real-time reporting, predictive analytics, and seamless CRM
              integration, businesses can make data-driven decisions that improve
              ROI and elevate the customer experience.
            </p>
          </div>
        </div>

        {/* SERVICE 2 — CONTENT LEFT, IMAGE RIGHT */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/assets/3704249.jpg"
              alt="Auto Dialer Solutions"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl mb-4 text-gray-900">
              Auto Dialer Solutions
            </h3>

            <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
              Our auto dialer solutions automate outbound calling by dialing
              sequentially from your contact lists and connecting agents only
              when calls are answered. This reduces the need for manual dialing,
              allowing teams to focus on meaningful conversations. Auto dialers
              ensure campaigns run smoothly even with large call volumes, keeping
              efficiency high and error rates low.
            </p>

            <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
              Designed for versatility, our auto dialers support multiple dialing
              modes, live call monitoring, and integration with popular CRM
              systems. Businesses benefit from improved visibility into campaign
              performance, enhanced agent efficiency, and consistent communication
              quality. Reporting dashboards provide insights for data-driven
              strategy adjustments and optimal resource allocation.
            </p>
          </div>
        </div>

        {/* SERVICE 3 — IMAGE LEFT, CONTENT RIGHT */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/assets/8836574.jpg"
              alt="Call Center Dialer Solutions"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl mb-4 text-gray-900">
              Call Center Dialer Solutions
            </h3>

            <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
              Our call center dialer solutions provide a comprehensive platform
              for managing both inbound and outbound communications. Intelligent
              dialing, combined with advanced call routing, IVR, and queuing
              features, enables contact centers to maintain high productivity
              while offering superior customer service. The platform scales
              effortlessly as your business grows, supporting multiple campaigns
              and agents simultaneously.
            </p>

            <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
              Equipped with real-time analytics, call monitoring, and detailed
              reporting, our solutions provide full visibility into agent activity
              and campaign performance. Organizations can optimize workflows,
              identify training opportunities, improve customer engagement, and
              confidently scale operations while ensuring consistent service
              standards across the board.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
