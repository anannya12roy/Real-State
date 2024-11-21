import AboutSection from "./components/AboutSection";
import AvailableSection from "./components/Available";
import ContactUs from "./components/Contact";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TeamSection from "./components/TeamSection";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <AvailableSection />
      <AboutSection />
      <CTASection />
      <FAQSection />
      <TeamSection />
      <ContactUs />
      <Footer />
    </>
  );
}
