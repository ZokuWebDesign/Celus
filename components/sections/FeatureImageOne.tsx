"use client";

import { 
  TrendingDown, 
  AlertTriangle, 
  Users, 
  Smartphone, 
  Clock, 
  FileX 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeatureImageOne = () => {
  const leftColumnStats = [
    {
      icon: TrendingDown,
      heading: "72% dos profissionais",
      text: "Relatam dificuldade em acessar conteúdo prático e validado de ultrassonografia no momento do atendimento."
    },
    {
      icon: AlertTriangle,
      heading: "68% dos laudos clínicos",
      text: "Apresentam variações por falta de padronização, o que afeta diretamente a tomada de decisão."
    },
    {
      icon: Users,
      heading: "83% dos residentes e não médicos",
      text: "Sentem insegurança ao realizar exames por falta de orientação clara e acessível."
    }
  ];

  const rightColumnStats = [
    {
      icon: Smartphone,
      heading: "90% dos apps médicos",
      text: "São considerados densos, confusos ou mal adaptados ao uso no dia a dia clínico."
    },
    {
      icon: Clock,
      heading: "Mais de 60% dos médicos",
      text: "Dizem que perdem tempo procurando protocolos ou calculadoras confiáveis durante o plantão."
    },
    {
      icon: FileX,
      heading: "Apenas 1 em cada 4 profissionais",
      text: "Usa ferramentas móveis com frequência por não confiar na precisão ou usabilidade delas."
    }
  ];

  return (
    <section id='problema' className="bg-white px-4 lg:px-16 py-12 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-base mb-4">
            Precisão e Agilidade
          </p>
          <h2 className="text-primary font-bold text-3xl lg:text-5xl leading-tight mb-6 max-w-4xl mx-auto">
            Quando você mais precisa, o conhecimento não pode faltar
          </h2>
          <p className="text-[#101828] font-medium text-lg max-w-4xl mx-auto leading-relaxed">
            Quando o tempo é curto e a precisão faz diferença entre acertar ou errar, depender de conteúdo desatualizado ou mal estruturado pode custar caro. A realidade é que muitos profissionais da saúde enfrentam barreiras invisíveis todos os dias: pouca padronização, ferramentas dispersas e a sensação constante de que estão sozinhos na hora de decidir. E pior — os recursos disponíveis mais confundem do que ajudam.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center mb-12">
          {/* Left Column - Statistics */}
          <div className="flex-1 max-w-[303px] space-y-8">
            {leftColumnStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent size={48} className="text-primary" />
                  </div>
                  <h3 className="text-primary font-bold text-2xl mb-2 leading-tight">
                    {stat.heading}
                  </h3>
                  <p className="text-tertiary font-medium text-base leading-relaxed">
                    {stat.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Center - Phone Image */}
          <div className="flex-1 max-w-[466px] relative">
            <img
              src="https://i.ibb.co/wrLHbXSF/comofunciona.webp"
              alt="Celus App Interface"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Right Column - Statistics */}
          <div className="flex-1 max-w-[303px] space-y-8">
            {rightColumnStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent size={48} className="text-primary" />
                  </div>
                  <h3 className="text-primary font-bold text-2xl mb-2 leading-tight">
                    {stat.heading}
                  </h3>
                  <p className="text-tertiary font-medium text-base leading-relaxed">
                    {stat.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant='primary'
            size='xl'
            className='w-[324px]'
          >
            Baixar agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureImageOne;