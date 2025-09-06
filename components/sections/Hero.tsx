"use client";
import { Button } from "@/components/ui/button";
import { STORE_LINKS } from "@/constants/links";

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="bg-white relative overflow-hidden"
    >
      <div className="hidden">
      {/* 
      <div className="absolute max-w-7xl mx-auto flex flex-col lg:flex-row items-center z-30">

        <div className="flex-1 flex flex-col items-center justify-center lg:max-w-[648px] min-h-[641px] text-left px-4 lg:px-[72px] lg:rounded-br-[221px] z-20">
           
          <h1 className="text-primary text-center lg:text-start text-3xl lg:text-5xl font-bold leading-tight mb-4">
            Acelere sua tomada de decisão
          </h1>
          
          <p className="text-tertiary text-center lg:text-start text-lg lg:text-2xl leading-relaxed mb-12">
            Celus, o app de ultrassonografia point-of-care feito para quem precisa de respostas clínicas rápidas, precisas e no seu bolso.
          </p>
          
          <div className="w-full flex flex-col sm:flex-row justify-start gap-2 lg:gap-4">
            <Button
              variant="primary"
              size="xxl"
              className="w-full lg:w-[224px]"
            >
              <a
                href={STORE_LINKS.APP_STORE}
                className="w-full"
              >
                Baixar agora
              </a>
            </Button>
            <Button 
              variant="outline"
              size="xxl"
              className="w-full lg:w-auto"
            >
              <a
                href="#como-funciona"
                className="w-full"
              >
                Ver funcionalidades
              </a>
            </Button>
          </div>

        </div>

        <img 
          src="" 
          alt="Mockup" 
          className="hidden lg:block max-w-7xl mx-auto absolute top-0 z-10"
        />

      </div>

      */}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-center justify-center lg:max-w-[648px] min-h-[641px] text-left px-4 lg:px-[72px] lg:rounded-br-[221px] z-20"
            style={{backgroundImage: "url('https://i.ibb.co/gbkNy0Nn/header.webp')", backgroundSize: "cover", backgroundPosition: "center"}}
          >
            {/* Title */}
            <h1 className="text-primary text-center lg:text-start text-3xl lg:text-5xl font-bold leading-tight mb-4">
              Acelere sua tomada de decisão
            </h1>
            
            {/* Subtitle */}
            <p className="text-tertiary text-center lg:text-start text-lg lg:text-2xl leading-relaxed mb-12">
              Celus, o app de ultrassonografia point-of-care feito para quem precisa de respostas clínicas rápidas, precisas e no seu bolso.
            </p>
            
            {/* CTA Buttons */}
            <div className="w-full flex flex-col sm:flex-row justify-start gap-2 lg:gap-4">
              <Button
                variant="primary"
                size="xxl"
                className="w-full lg:w-[224px]"
              >
                <a
                  href={STORE_LINKS.APP_STORE}
                  className="w-full"
                >
                  Baixar agora
                </a>
              </Button>
              <Button 
                variant="outline"
                size="xxl"
                className="w-full lg:w-auto"
              >
                <a
                  href="#como-funciona"
                  className="w-full"
                >
                  Ver funcionalidades
                </a>
              </Button>
            </div>
          </div>

          {/* Right Medical Imagery */}
          <img
            src="/assets/vectors/Hero.svg"
            alt="C Vector"
            className="hidden lg:block max-w-7xl mx-auto absolute top-0 z-30"
          />
          <img 
            src="https://i.ibb.co/jnrW2pN/Hero.webp" 
            alt="Mockup" 
            className="hidden lg:block max-w-7xl mx-auto absolute top-0 z-10"
          />
      </div>
    </section>
  );
};

export default Hero;
