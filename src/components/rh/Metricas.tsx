import { Button } from "@/components/ui/button";
import FeatureItem from "./FeatureItem";
import sun from "@/assets/icons/sun-icon.svg";
import { WHATSAPP_LINKS } from "@/constants/links";

const features = [
  {
    highlight: "Retenção de talentos:",
    text: " maior permanência e menor rotatividade",
    icon: sun
  },
  {
    highlight: "Retorno financeiro",
    text: " implantar suporte psicológico gera redução de faltas e custos médicos",
    icon: sun
  },
  {
    highlight: "Clima organizacional fortalecido:",
    text: " impacto direto na satisfação, engajamento e retenção da equipe",
    icon: sun
  },
  {
    highlight: "Produtividade percebida:",
    text: " impulso no eNPS, refletindo satisfação e engajamento",
    icon: sun
  },
  {
    highlight: "Atração de talentos:",
    text: " empresas com esse diferencial são mais atrativas no mercado de trabalho",
    icon: sun
  }
];

const Metricas = () => {
  return (
    <section id="como-funciona" className="w-full max-w-7xl mx-auto flex flex-col gap-12 lg:gap-20 py-16 lg:py-28 px-4 lg:px-14">
      <header className="flex flex-col gap-2 w-full lg:w-[48rem]">
        <h2>Resultados que sua empresa<br />sente na prática</h2>
        <p>Bem-estar emocional não é só discurso, é resultado medido.<br />Com o SYD, sua empresa transforma cuidado em performance. Menos faltas, mais engajamento e uma equipe emocionalmente mais estável refletem diretamente no clima e na produtividade.</p>
      </header>

      <div className="grid gap-12 md:grid-cols-3">
        
        <div className="flex flex-col items-start gap-2 pl-8 flex-1 border-l-2 border-primary">
          <h1 className="lg:text-[5rem] text-secondary">
            40%
          </h1>
          <h4 className="font-bold">
            Redução de faltas por saúde mental
          </h4>
          <a
            href="https://melhorrh.com.br/saude-mental-eleva-o-engajamento-nas-empresas/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 font-normal hover:underline">
            Fonte - Melhor RH
          </a>
        </div>
        
        <div className="flex flex-col items-start gap-2 pl-8 flex-1 border-l-2 border-primary">
          <h1 className="lg:text-[5rem] text-secondary">
            +700
          </h1>
          <h4 className="font-bold">
            Colaboradores mais engajados
          </h4>
          <a
            href="https://static.poder360.com.br/2025/02/1738011386472RelatoCC81rio20sustentabilidade20humana20e20produtiviade20no20trabalho.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 font-normal hover:underline">
            Fonte - Poder360
          </a>
        </div>
        
        <div className="flex flex-col items-start gap-2 pl-8 flex-1 border-l-2 border-primary">
          <h1 className="lg:text-[5rem] text-secondary">
            80%
          </h1>
          <h4 className="font-bold">
            Melhora no equilíbrio emocional
          </h4>
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5550734/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 font-normal hover:underline">
            Fonte - PMC (Meta-análise)
          </a>
        </div>
        
        <div className="flex flex-col items-start gap-2 pl-8 flex-1 border-l-2 border-primary">
          <h1 className="lg:text-[5rem] text-secondary">
            85%
          </h1>
          <h4 className="font-bold">
            Das lideranças de RH no Brasil perceberam redução nos afastamentos por questões médicas após programas de bem-estar emocional.
          </h4>
          <a
            href="https://revistatopicos.com.br/artigos/adocao-de-praticas-de-bem-estar-emocional-no-trabalho-os-efeitos-que-isso-traz-para-os-resultados-da-empresa-e-dos-colaboradores" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 font-normal hover:underline">
            Fonte - Resvista Tópicos (dados nacionais)
          </a>
        </div>
        
        <div className="flex flex-col items-start gap-2 pl-8 flex-1 border-l-2 border-primary">
          <h1 className="lg:text-[5rem] text-secondary">
            35%
          </h1>
          <h4 className="font-bold">
            A mais de engajamento interno nas empresas que cuidam da saúde física e mental dos colaboradores.
          </h4>
          <a
            href="https://melhorrh.com.br/saude-mental-eleva-o-engajamento-nas-empresas/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 font-normal hover:underline">
            Fonte - Pulso RH – Alice & Opinion Box
          </a>
        </div>
        
        <div className="flex flex-col items-start gap-2 pl-8 flex-1 border-l-2 border-primary">
          <h1 className="lg:text-[5rem] text-secondary">
            66%
          </h1>
          <h4 className="font-bold">
            Dos trabalhadores brasileiros desejam trabalhar ou permanecer em empresas que valorizem seu bem-estar emocional.
          </h4>
          <a
            href="https://static.poder360.com.br/2025/02/1738011386472RelatoCC81rio20sustentabilidade20humana20e20produtiviade20no20trabalho.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 font-normal hover:underline">
            Fonte - Reconnect & Pinpeople
          </a>
        </div>


      </div>

      <div className="flex flex-col gap-2 w-full lg:w-[53rem]">
        <h3>Esses dados mostram que oferecer suporte psicológico tem impacto direto em:</h3>
        {/* List */}
        <ul className="flex flex-col gap-3 w-full">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              highlight={feature.highlight}
              text={feature.text}
              icon={feature.icon}
            />
          ))}
        </ul>
        <p>Investir em bem-estar emocional é investimento estratégico, não apenas em saúde, mas em produtividade, marca empregadora e valorização do capital humano.</p>
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-4">
              <Button size="lg" className="flex w-full sm:w-[20.25rem] p-0 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
                <a
                  href={WHATSAPP_LINKS.RH.PITCH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 text-white text-xl font-semibold"
                >
                  Agendar apresentação
                </a>
              </Button>
      </div>
    </section>
  );
};

export default Metricas;
