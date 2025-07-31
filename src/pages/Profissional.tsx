import Header from "@/components/profissional/Header";
import Hero from "@/components/profissional/Hero";
import FeaturesWithImage from "@/components/profissional/FeaturesWithImage";
import ComoFunciona from "@/components/profissional/ComoFunciona";
import CTA from "@/components/profissional/CTA";
import Testimonials from "@/components/profissional/Testimonials";
import FAQ from "@/components/profissional/FAQ";
import FeatureImageOne from "@/components/profissional/FeatureImageOne";
import FeatureImageTwo from "@/components/profissional/FeatureImageTwo";
import Footer from "@/components/profissional/Footer";

const Profissional = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ComoFunciona />
      <FeaturesWithImage />
      <FeatureImageOne />
      <Testimonials />
      <FeatureImageTwo />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Profissional;
