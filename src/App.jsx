import AboutSection from "./components/AboutSection";
import Available from "./components/Available";
import Contact from "./components/Contact";
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
      <Available />
      <AboutSection />
      <CTASection />
      <FAQSection />
      <TeamSection />
      <Contact />
      <Footer />
    </>
  );
}
