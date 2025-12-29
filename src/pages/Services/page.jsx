import { useRef } from "react";
import Serviceanimation from "./components/Serviceanimation";
import Serviceconnect from "./components/Serviceconnect";
import Servicecontent from "./components/Servicecontent";
import Servicesheader from "./components/Servicesheader";

export default function Services() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (

    <div>
      <Servicesheader onContactClick={scrollToContact} />
      <Servicecontent />
      <Serviceanimation />
      <div ref={contactRef}>
        <Serviceconnect />
      </div>
    </div>

  );
}
