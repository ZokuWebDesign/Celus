import Header from "@/components/rh/Header";
import Hero from "@/components/rh/Hero";
import FeaturesWithImage from "@/components/rh/FeaturesWithImage";
import ComoFunciona from "@/components/rh/ComoFunciona";
import FAQ from "@/components/rh/FAQ";
import Forms from "@/components/rh/Forms";
import FeatureImage from "@/components/rh/FeatureImage";
import Footer from "@/components/rh/Footer";
import Metricas from "@/components/rh/Metricas";

export default function RH() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeatureImage />
      <ComoFunciona />
      <FeaturesWithImage />
      <Metricas />
      <Forms />
      <FAQ />
      <Footer />
    </div>
  );
}
