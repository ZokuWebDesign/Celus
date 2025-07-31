import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/illustrations/hero-illustration.svg";
import { AUTH_LINKS } from "@/constants/links";

const Hero = () => {
  return (
    <section 
      id="inicio"
      className="relative border-b border-primary"
      style={{
        backgroundImage: `url(https://i.imgur.com/mqDrhio.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="py-12 lg:py-14 space-y-8">
            <div className="space-y-4">
              <h2>
                A plataforma feita por psicólogos para psicólogos.
              </h2>
              <p>
                Agendamentos, atendimentos urgentes, painel completo de gestão, prontuário com tags e comunidade exclusiva.<br />
                Trabalhe <span className="text-secondary">do seu jeito, com apoio e tecnologia</span> pensada para você.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex w-full sm:w-[20.25rem] p-0 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
                <a
                  href={AUTH_LINKS.PROFESSIONAL.LOGIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 text-white text-xl font-semibold"
                >
                  Quero atender no SYD
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="py-0 lg:py-10 relative z-10">
              <img
                src={heroIllustration}
                alt="Ilustração de atendimento psicológico"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
