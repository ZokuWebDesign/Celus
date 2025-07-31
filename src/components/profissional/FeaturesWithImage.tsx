import { useEffect, useRef, useState } from "react";
import { CircleCheckBig, Banknote, Tag, CalendarCheck, Users, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/illustrations/hero-illustration.svg";
import dividerPrimary from "@/assets/vectors/divider-primary.svg";
import dividerGray from "@/assets/vectors/divider-gray.svg";
import { AUTH_LINKS } from "@/constants/links";

const features = [
  {
    icon: CircleCheckBig,
    title: "Painel gerencial completo",
    description: "Tenha controle total sobre sua agenda, atendimentos realizados, repasses financeiros e indicadores de desempenho, tudo em um só lugar."
  },
  {
    icon: Banknote,
    title: "6 meses sem custos, com repasses justos",
    description: "Comece a atender sem custos fixos por 6 meses e receba de forma simples e transparente. Você foca no cuidado, e a gente cuida do resto."
  },
  {
    icon: Tag,
    title: "Prontuário com tags inteligentes",
    description: "Registre o que importa de forma prática e organizada, com recursos de marcação por temas que facilitam o acompanhamento clínico."
  },
  {
    icon: CalendarCheck,
    title: "Agenda com lembretes automáticos",
    description: "Evite faltas e atrasos com alertas automáticos para você e para o paciente, integrados à sua rotina de forma simples."
  },
  {
    icon: Users,
    title: "Comunidade SYD",
    description: "Conecte-se com outros profissionais, compartilhe vivências e participe de discussões clínicas e de desenvolvimento contínuo."
  },
  {
    icon: Smartphone,
    title: "App feito por quem vive a prática clínica",
    description: "Desenvolvido com base na vivência real da psicologia, o SYD entende suas dores e entrega uma experiência que respeita seu tempo e sua profissão."
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
                Benefícios de ser profissional 
              </h2>
              <p>
                A plataforma SYD foi pensada por psicólogos para psicólogos. Oferecemos ferramentas que <span className="text-secondary font-semibold">otimizam sua rotina</span>, <span className="text-secondary font-semibold">ampliam seu impacto</span> e <span className="text-secondary font-semibold">respeitam sua individualidade</span> profissional.
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
                        href={AUTH_LINKS.PROFESSIONAL.SIGNUP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-6 py-3.5 text-white text-xl font-semibold"
                      >
                        Venha fazer parte
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
                        href={AUTH_LINKS.PROFESSIONAL.SIGNUP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-6 py-3.5 text-white text-xl font-semibold"
                      >
                        Venha fazer parte
                      </a>
                    </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesWithImage;
