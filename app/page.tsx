import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FeatureImageOne from "@/components/sections/FeatureImageOne";
import ComoFunciona from "@/components/sections/ComoFunciona";
import FeatureTwo from "@/components/sections/FeatureTwo";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";
import AppDownload from "@/components/sections/AppDownload";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeatureImageOne />
      <ComoFunciona />
      <Testimonials />
      <FeatureTwo />
      <Pricing />
      <FAQ />
      <Contact />
      <CTA />
      <AppDownload />
      <Footer />
    </div>
  );
}
