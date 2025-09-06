import { Check } from "lucide-react";

const freeFeatures = [
  "Acesso a conteúdos selecionados no ResumUS",
  "Modelos básicos de laudos no LaudUS",
  "Protocolos clínicos iniciais no ProtocolUS",
  "Calculadoras médicas limitadas (ex: volume, IMC)",
  "Criação de conta e salvamento de favoritos",
  "Funcionalidade offline para itens baixados"
];

const premiumFeatures = [
  "Acesso total a todos os resumos por especialidade",
  "Biblioteca completa de modelos de laudos (LaudUS)",
  "Todos os protocolos clínicos com passo a passo detalhado",
  "Todas as calculadoras médicas (gestacional, renal, VEF, etc.)",
  "MedUltra: tabelas de medidas de normalidade por perfil",
  "Suporte prioritário e melhorias contínuas"
];

const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-center justify-start gap-3">
    <img src="/assets/logo/logo-icon.svg" className="w-6 h-6" />
    <span className="text-tertiary text-base leading-relaxed">
      {text}
    </span>
  </li>
);

const Pricing = () => {
  return (
    <section id="planos" className="bg-white px-4 lg:px-16 py-12 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
          <p className="text-primary font-semibold text-base mb-4">
            Planos e Preços
          </p>
          <h2 className="text-primary font-bold text-3xl lg:text-5xl leading-tight mb-6">
            Transforme seu celular em uma central clínica de decisões
          </h2>
          <p className="text-tertiary font-medium text-lg leading-relaxed">
            Tenha confiança no atendimento com acesso imediato a protocolos, laudos, calculadoras e resumos criados por especialistas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Free Plan Card */}
          <div className="bg-white rounded-[8px] border-2 border-primary p-8 h-full flex flex-col">
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-tertiary font-bold text-2xl mb-2">
                Gratuito
              </h3>
              <p className="text-[#475467] text-base leading-relaxed">
                Ideal para estudantes e iniciantes. Resumos e acessos limitados, ferramentas básicas.
              </p>
            </div>

            <div className="border border-primary mb-8"/>

            {/* Price */}
            <div className="mb-8">
              <div className="mb-4">
                <span className="text-primary font-bold text-5xl lg:text-6xl">
                  R$0,00
                </span>
                <span className="text-[#141414] text-xl ml-1">/mês</span>
              </div>
              <p className="text-[#475467] text-base">
                Com o plano gratuito, você já começa a ganhar autonomia.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <button className="w-full bg-primary text-white font-bold text-lg py-4 rounded-lg hover:bg-[#0e7a5d] transition-colors duration-200">
                Quero testar gratuitamente
              </button>
            </div>

            {/* Features List */}
            <div className="flex-1">
              <ul className="space-y-4">
                {freeFeatures.map((feature, index) => (
                  <FeatureItem key={index} text={feature} />
                ))}
              </ul>
            </div>
          </div>

          {/* Premium Plan Card */}
          <div className="bg-white rounded-[8px] border-2 border-primary px-6 py-8 h-full flex flex-col">
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-tertiary font-bold text-2xl mb-2">
                Premium
              </h3>
              <p className="text-[#475467] text-base leading-relaxed">
                Ideal para profissionais ativos. Todas as funcionalidades desbloqueadas, atualizações frequentes.
              </p>
            </div>

            <div className="border border-primary mb-8"/>

            {/* Price */}
            <div className="mb-8">
              <div className="mb-4">
                <span className="text-primary font-bold text-5xl lg:text-6xl">
                  R$34,99
                </span>
                <span className="text-[#141414] text-xl ml-1">/mês</span>
              </div>
              <p className="text-[#475467] text-base">
                Com o plano premium, você desbloqueia o verdadeiro potencial.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <button className="w-full bg-primary text-white font-bold text-lg py-4 rounded-lg hover:bg-[#0e7a5d] transition-colors duration-200">
                Assinar plano premium
              </button>
            </div>

            {/* Features List */}
            <div className="flex-1">
              <ul className="space-y-4">
                {premiumFeatures.map((feature, index) => (
                  <FeatureItem key={index} text={feature} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
