
import Header from "@/components/paciente/Header";
import Hero from "@/components/paciente/Hero";
import FeaturesWithImage from "@/components/paciente/FeaturesWithImage";
import ComoFunciona from "@/components/paciente/ComoFunciona";
import Pricing from "@/components/paciente/Pricing";
import Doctors from "@/components/paciente/Doctors";
import CTA from "@/components/paciente/CTA";
import Testimonials from "@/components/paciente/Testimonials";
import FAQ from "@/components/paciente/FAQ";
import Forms from "@/components/paciente/Forms";
import AppDownload from "@/components/paciente/AppDownload";
import Footer from "@/components/paciente/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ComoFunciona />
      <FeaturesWithImage />
      <Pricing />
      <CTA />
      <Forms />
      <Testimonials />
      <FAQ />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Index;
