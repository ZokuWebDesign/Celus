"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { STORE_LINKS } from "@/constants/links";

const ComoFunciona = () => {
  const [activeCards, setActiveCards] = useState<boolean[]>(new Array(6).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.findIndex((ref: HTMLDivElement | null) => ref === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setActiveCards((prev: boolean[]) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref: HTMLDivElement | null) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: "medUltra",
      title: "MedUltra",
      description: "Acesse milhares de referências de medidas normais em exames de ultrassonografia.",
      hasImage: true,
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef" /* https://i.ibb.co/7x2djYxG/medultra.webp */,
      cardHeight: "h-[484px]",
      imageHeight: "h-[280px]"
    },
    {
      id: "calculUS",
      title: "CaluculUS",
      description: "Calculadoras inteligentes baseadas em sistemas de risco reconhecidos internacionalmente.",
      hasImage: false,
      cardHeight: "h-[204px]",
      imageHeight: ""
    },
    {
      id: "resumUS",
      title: "ResumUS",
      description: "Biblioteca com os principais temas da ultrassonografia clínica.",
      hasImage: false,
      cardHeight: "h-[175px]",
      imageHeight: ""
    },
    {
      id: "image",
      title: "",
      description: "",
      hasImage: true,
      imageUrl: "https://i.ibb.co/DfWnWKT9/resumus.webp",
      cardHeight: "h-[513px]",
      imageHeight: "h-[513px]"
    },
    {
      id: "laudUS",
      title: "LaudUS",
      description: "Mais de 200 modelos prontos de laudos de ultrassonografia Organizados por especialidade, órgão e patologia.",
      hasImage: true,
      imageUrl: "https://i.ibb.co/BV9VpQJN/laudus.webp",
      cardHeight: "h-[484px]",
      imageHeight: "h-[251px]"
    },
    {
      id: "protocolUS",
      title: "ProtocolUS",
      description: "Passo a passo clínico para condutas seguras e protocolos de ultrassom ilustrados, interativos e práticos.",
      hasImage: false,
      cardHeight: "h-[204px]",
      imageHeight: ""
    }
  ];

  return (
    <section id="como-funciona" className="bg-[#edfcf6] px-4 md:px-12 lg:px-16 py-12 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-base mb-4">
            Economia de Tempo Clínico
          </p>
          <h2 className="text-primary font-bold text-3xl lg:text-5xl leading-tight mb-6 max-w-4xl mx-auto">
            Celus coloca conteúdo validado e ferramentas de decisão na palma da sua mão
          </h2>
          <p className="text-tertiary font-medium text-lg max-w-4xl mx-auto leading-relaxed">
            Celus oferece tudo que você precisa para cuidar da sua saúde física e prevenir problemas futuros, com recursos inovadores e personalizados para cada necessidade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Column 1 */}
          <div className="space-y-8">
            {/* MedULTRA Card */}
            <div 
              ref={(el: HTMLDivElement | null) => {
                if (el) cardRefs.current[0] = el;
              }}
              className={`${features[0].cardHeight} bg-white rounded-[8px] border-2 border-primary overflow-hidden transition-all duration-1000 ${
                activeCards[0] ? 'opacity-100 translate-y-0 shadow-lg' : 'opacity-70 translate-y-8'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className={`${features[0].imageHeight} overflow-hidden`}>
                <img
                  src={features[0].imageUrl}
                  alt={features[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-primary font-bold text-2xl lg:text-3xl mb-4">
                  {features[0].title}
                </h3>
                <p className="text-tertiary text-lg leading-relaxed">
                  {features[0].description}
                </p>
              </div>
            </div>

            {/* CaluculUS Card */}
            <div 
              ref={(el: HTMLDivElement | null) => {
                if (el) cardRefs.current[1] = el;
              }}
              className={`${features[1].cardHeight} bg-white rounded-[8px] border-2 border-primary overflow-hidden transition-all duration-1000 ${
                activeCards[1] ? 'opacity-100 translate-y-0 shadow-lg' : 'opacity-70 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="p-8 h-full flex flex-col justify-center">
                <h3 className="text-primary font-bold text-2xl lg:text-3xl mb-4">
                  {features[1].title}
                </h3>
                <p className="text-tertiary text-lg leading-relaxed">
                  {features[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            {/* ResumUS Card */}
            <div 
              ref={(el: HTMLDivElement | null) => {
                if (el) cardRefs.current[2] = el;
              }}
              className={`${features[2].cardHeight} bg-white rounded-[8px] border-2 border-primary overflow-hidden transition-all duration-1000 ${
                activeCards[2] ? 'opacity-100 translate-y-0 shadow-lg' : 'opacity-70 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="p-8 h-full flex flex-col justify-center">
                <h3 className="text-primary font-bold text-2xl lg:text-3xl mb-4">
                  {features[2].title}
                </h3>
                <p className="text-tertiary text-lg leading-relaxed">
                  {features[2].description}
                </p>
              </div>
            </div>

            {/* Image Card */}
            <div 
              ref={(el: HTMLDivElement | null) => {
                if (el) cardRefs.current[3] = el;
              }}
              className={`${features[3].cardHeight} rounded-[8px] border-2 border-primary overflow-hidden transition-all duration-1000 ${
                activeCards[3] ? 'opacity-100 translate-y-0 shadow-lg' : 'opacity-70 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="relative h-full">
                <div className={`${features[3].imageHeight} overflow-hidden`}>
                  <img
                    src={features[3].imageUrl}
                    alt={features[3].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-8 block md:hidden lg:block">
            {/* LaudUS Card */}
            <div 
              ref={(el: HTMLDivElement | null) => {
                if (el) cardRefs.current[4] = el;
              }}
              className={`${features[4].cardHeight} bg-white rounded-[8px] border-2 border-primary overflow-hidden transition-all duration-1000 ${
                activeCards[4] ? 'opacity-100 translate-y-0 shadow-lg' : 'opacity-70 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className={`${features[4].imageHeight} overflow-hidden`}>
                <img
                  src={features[4].imageUrl}
                  alt={features[4].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-primary font-bold text-2xl lg:text-3xl mb-4">
                  {features[4].title}
                </h3>
                <p className="text-tertiary text-lg leading-relaxed">
                  {features[4].description}
                </p>
              </div>
            </div>

            {/* ProtocolUS Card */}
            <div 
              ref={(el: HTMLDivElement | null) => {
                if (el) cardRefs.current[5] = el;
              }}
              className={`${features[5].cardHeight} bg-white rounded-[8px] border-2 border-primary overflow-hidden transition-all duration-1000 ${
                activeCards[5] ? 'opacity-100 translate-y-0 shadow-lg' : 'opacity-70 translate-y-8'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="p-8 h-full flex flex-col justify-center">
                <h3 className="text-primary font-bold text-2xl lg:text-3xl mb-4">
                  {features[5].title}
                </h3>
                <p className="text-tertiary text-lg leading-relaxed">
                  {features[5].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="primary"
            size="xl"
            className="w-full md:w-[374px]"
          >
            <a
              href={STORE_LINKS.APP_STORE}
              className="w-full"
            >
              Quero testar gratuitamente
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
