import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import ContentSection2 from "./components/ContentSection2";
import ContentSection1 from "./components/ContentSection1";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import FAQSection from "./components/Faqhome";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AboutUs />
      <FeaturesSection />
      <ContentSection1 />
      <ContactSection />
      <ContentSection2 />
      <FAQSection/>
    </div>
  );
}