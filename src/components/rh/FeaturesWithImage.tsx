import { useEffect, useRef, useState } from "react";
import { PanelsLeftBottom, Clock, Tag, ChartSpline, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/illustrations/hero-illustration.svg";
import dividerPrimary from "@/assets/vectors/divider-primary.svg";
import dividerGray from "@/assets/vectors/divider-gray.svg";
import { AUTH_LINKS } from "@/constants/links";

const features = [
  {
    icon: PanelsLeftBottom,
    title: "Dashboard completo",
    description: "Acompanhe a saúde emocional da empresa com indicadores de uso, engajamento e acesso aos recursos da plataforma."
  },
  {
    icon: Clock,
    title: "Atendimento imediato 24h",
    description: "Colaboradores recebem suporte psicológico em momentos críticos, sem precisar agendar ou esperar."
  },
  {
    icon: Tag,
    title: "Prontuário com tags inteligentes",
    description: "O prontuário é de uso exclusivo do psicólogo e permanece totalmente confidencial, conforme o Código de Ética da Psicologia."
  },
  {
    icon: ChartSpline,
    title: "Relatórios Gerenciais Estratégicos.",
    description: "Receba análises mensais com métricas organizacionais, que orientam ações do RH de forma inteligente e preventiva, sem expor dados individuais, respeitando totalmente a privacidade dos colaboradores."
  },
  {
    icon: ShieldCheck,
    title: "Sigilo e ética garantidos",
    description: "Toda a jornada do colaborador é protegida por um sistema seguro e seu atendimento é feito por psicólogos com CRP ativo, com ética, cuidado e sigilo absoluto."
  }
];

const FeaturesWithImage = () => {
  const [activeFeatures, setActiveFeatures] = useState<boolean[]>(new Array(features.length).fill(false));
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = featureRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setActiveFeatures(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="beneficios"
      className="relative"
      style={{
        backgroundImage: `url(https://i.imgur.com/iWCJZ2r.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto py-16 lg:py-28 px-4 sm:px-6 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="w-full">
            <div>
              <p className="text-sm sm:text-base mb-4">
                Benefícios
              </p>
              <h2 className="mb-2">
                Vantagens para sua empresa
              </h2>
              <p>
                Mais do que um benefício, é um investimento inteligente em saúde emocional corporativa<br />Com o SYD, sua empresa entrega apoio psicológico real, imediato e acessível — enquanto o RH ganha dados para agir com inteligência, e os colaboradores sentem-se acolhidos de verdade.
              </p>
            </div>

            <div className="relative hidden lg:block py-0 lg:py-10 z-10">
              <img
                src={heroIllustration}
                alt="Ilustração de atendimento psicológico"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center hidden lg:block w-full gap-4 mt-12">
              <Button size="lg" className="flex w-full sm:w-[20.25rem] p-0 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
                <a
                  href={AUTH_LINKS.RH.LOGIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 text-white text-xl font-semibold"
                >
                  Desbloquear vantagens
                </a>
              </Button>
            </div>

          </div>

          {/* Features Section */}
          <div className="w-full">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={el => featureRefs.current[index] = el}
                  className={`flex items-start space-x-4 gap-10 rounded-lg transition-all duration-1000 ${
                    activeFeatures[index] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-50 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`rounded-lg flex flex-col items-center justify-center gap-4`}>
                    <feature.icon 
                      className="w-12 h-12 transition-colors duration-1000"
                      style={{ 
                        transitionDelay: `${index * 200}ms`,
                        color: activeFeatures[index] 
                          ? 'hsl(var(--support))' 
                          : 'hsl(var(--stroke))'
                      }}
                    />
                    {index !== features.length - 1 && (
                      <img
                        src={activeFeatures[index] ? dividerPrimary : dividerGray}
                        alt="_divider"
                        className={`h-[100px] object-cover transition-all duration-1000 ${
                          activeFeatures[index] ? 'opacity-100' : 'opacity-50'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      />
                    )}
                  </div>
                  <div>
                    <h4 
                      className="mb-2 transition-all duration-1000"
                      style={{ 
                        transitionDelay: `${index * 200}ms`,
                        color: activeFeatures[index] 
                          ? 'hsl(var(--secondary))' 
                          : 'hsl(var(--stroke))'
                      }}
                    >
                      {feature.title}
                    </h4>
                    <p className={`transition-all duration-1000 ${
                      activeFeatures[index] ? 'opacity-100' : 'opacity-50'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center block lg:hidden w-full gap-4">
            <Button size="lg" className="flex w-full sm:w-[20.25rem] p-0 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
              <a
                href={AUTH_LINKS.RH.LOGIN}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3.5 text-white text-xl font-semibold"
              >
                Desbloquear vantagens
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesWithImage;
