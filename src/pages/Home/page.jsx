import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import ContentSection2 from "./components/ContentSection2";
import ContentSection1 from "./components/ContentSection1";
import Header from "./components/Header";
import FAQSection from "./components/Faqhome";
import Homescroller from "./components/Homescroller";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onContactClick={scrollToContact} />
      <Homescroller />
      <FeaturesSection />
      <ContentSection1 />
      <div ref={contactRef}>
        <ContactSection />
      </div>
      <ContentSection2 />
      <FAQSection />
    </div>
  );
}