import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import ContentSection2 from "./components/ContentSection2";
import ContentSection1 from "./components/ContentSection1";
import Header from "./components/Header";
import FAQSection from "./components/Faqhome";
import Homescroller from "./components/Homescroller";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Homescroller/>
      <FeaturesSection />
      <ContentSection1 />
      <ContactSection />
      <ContentSection2 />
      <FAQSection/>
    </div>
  );
}