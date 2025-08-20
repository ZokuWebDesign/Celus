import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Banner from "@/components/sections/Banner";
import FeatureImageOne from "@/components/sections/FeatureImageOne";
import FeaturesWithImage from "@/components/sections/FeaturesWithImage";
import ComoFunciona from "@/components/sections/ComoFunciona";
import FeatureImageTwo from "@/components/sections/FeatureImageTwo";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Banner />
      <FeatureImageOne />
      <FeaturesWithImage />
      <ComoFunciona />
      <FeatureImageTwo />
      <CTA />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
