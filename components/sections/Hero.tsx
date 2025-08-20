"use client";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="bg-primary relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col items-center pt-[90px]">
          {/* Text Content */}
          <div className="max-w-[1149px] w-full text-center flex flex-col gap-4">
            <h1>
              Sua assistência técnica mais eficiente, sem complicação
            </h1>
            <p className="text-white m-0">
              O sistema de OS criado por quem vive a rotina da assistência técnica de celulares e informática.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-10">
            <Button
              variant="white-filled"
              className="w-auto h-11 rounded-2xl bg-background hover:bg-background/90 border border-[#288DF8]"
            >
              <a
                href="#pricing"
                className="w-full text-base text-primary font-bold"
              >
                Testar o upOS grátis por 7 dias
              </a>
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="w-full">
            <img
              src={'https://i.ibb.co/KxnYPRx4/hero.webp'}
              alt="Dashboard Preview"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
