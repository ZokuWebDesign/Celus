"use client";

import { ChevronRight } from 'lucide-react';

const FeatureImageOne = () => {
  const problems = [
    "Cansado de ter que explicar *todo dia* para seus funcionários como precificar um serviço?",
    "Já perdeu vendas porque o cliente não quis esperar alguém \"autorizar\" um desconto?",
    "Seu sistema de OS parece feito por alguém que nunca mexeu num celular?",
    "Sua equipe se atrapalha com orçamentos, agendamentos e esquecimentos?",
    "Está preso a sistemas genéricos, que fazem sua loja parecer uma oficina de bicicleta?"
  ];

  return (
    <section id='desafios' className="bg-[#f9fcff] px-4 lg:px-16 py-12 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
          {/* Left side - Image */}
          <div className="flex-1 max-w-[469px]">
            <img
              src={'https://i.ibb.co/wFWsX3Xk/imageone.webp'}
              alt="Funcionários confusos"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex-1 max-w-[469px]">
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-2 lg:gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <ChevronRight size={24} className="text-primary" />
                  </div>
                  <p className="text-[#414651] font-medium text-base lg:text-xl leading-6 flex-1">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImageOne;