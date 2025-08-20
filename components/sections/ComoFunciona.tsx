"use client";
import { useEffect, useRef, useState } from "react";
import { FileCheck, Handshake, List, AlignLeft, TrendingUp } from "lucide-react";

const features = [
  {
    icon: FileCheck,
    title: "Orçamentos rápidos",
    description: "Envio em PDF pelo Whatsapp"
  },
  {
    icon: Handshake,
    title: "Regras de desconto",
    description: "Interface simples, sem necessidade de treinamento"
  },
  {
    icon: List,
    title: "Checklist interativo",
    description: "Ordem de Serviço automatizada"
  },
  {
    icon: AlignLeft,
    title: "Kanban com status",
    description: "Organização visual das OS"
  },
  {
    icon: TrendingUp,
    title: "Dashboard completo",
    description: "Métricas de conversão e vendas"
  }
];

const ComoFunciona = () => {
  const [activeFeatures, setActiveFeatures] = useState<boolean[]>(new Array(features.length).fill(false));
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = featureRefs.current.findIndex((ref: HTMLDivElement | null) => ref === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setActiveFeatures((prev: boolean[]) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    featureRefs.current.forEach((ref: HTMLDivElement | null) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-funciona" className="bg-[#fefefe] border border-[#3685fb]">
      <div className="max-w-7xl mx-auto py-16 lg:py-28 px-4 sm:px-6 lg:px-16">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-[#155eef] text-[32px] font-bold leading-[40px] mb-2">
            Como Funciona
          </h2>
          <p className="text-[#5b5b5b] text-lg leading-6">
            Veja os recursos e funcionalidades
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Left side - Image */}
          <div className="w-full flex justify-center">
            <div className="w-full">
              <img
                src="https://i.ibb.co/kLvr5mv/imagetwo.webp"
                alt="Como funciona o sistema upOS"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  ref={(el: HTMLDivElement | null) => {
                    if (el) featureRefs.current[index] = el;
                  }}
                  className={`flex items-start gap-6 transition-all duration-1000 ${
                    activeFeatures[index] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-50 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <feature.icon 
                      size={48} 
                      className="transition-colors duration-1000"
                      style={{ 
                        transitionDelay: `${index * 200}ms`,
                        color: activeFeatures[index] 
                          ? '#3685fb' 
                          : '#9CA3AF'
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-xl font-semibold leading-[28px] mb-2 transition-all duration-1000"
                      style={{ 
                        transitionDelay: `${index * 200}ms`,
                        color: activeFeatures[index] 
                          ? '#101828'  // Dark when active
                          : '#9CA3AF'  // Gray when inactive
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className={`text-base leading-[25.6px] transition-all duration-1000 ${
                        activeFeatures[index] ? 'opacity-100' : 'opacity-50'
                      }`}
                      style={{ 
                        transitionDelay: `${index * 200}ms`,
                        color: activeFeatures[index] ? '#101828' : '#9CA3AF'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
