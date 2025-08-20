"use client";
import { Rocket } from "lucide-react";

const CTA = () => {
  return (
    <section id="inicio" className="bg-[#0067d1] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col items-center pt-[90px]">
          {/* Content Wrapper */}
          <div className="max-w-[1126px] w-full">
            {/* Text Content */}
            <div className="flex flex-col items-center text-center space-y-6 mb-12">
              {/* Rocket Icon */}
              <div className="flex justify-center mb-4">
                <Rocket className="w-12 h-12 text-white" />
              </div>

              {/* Title and Subtitle */}
              <div className="space-y-2">
                <h1 className="text-[32px] font-bold text-white leading-[40px]">
                  Dê um UP na sua loja agora
                </h1>
                <p className="text-white text-lg leading-6">
                  Teste grátis por 7 dias
                </p>
              </div>

              {/* CTA Button */}
              <button className="w-[332px] h-11 rounded-2xl bg-transparent border border-white hover:bg-background hover:text-[#0067d1] transition-colors duration-300">
                <span className="text-white hover:text-[#0067d1] font-bold text-base">
                  Quero testar o upOS gratuitamente
                </span>
              </button>
            </div>

            {/* Dashboard Preview */}
            <div className="flex justify-center">
              <div className="w-[430px] max-w-full">
                <img
                  src='https://i.ibb.co/6RT5jyn7/cta.webp'
                  alt="Dashboard Preview"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
