import { Button } from "@/components/ui/button";
import { AUTH_LINKS } from "@/constants/links";

const CTA = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(https://i.imgur.com/WdhJL9g.jpeg)` }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-3xl mx-auto py-16 lg:py-28 px-4 sm:px-6 lg:px-14 text-center">
        <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
          Sua empresa cuida da saúde mental dos colaboradores?
        </h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          <span className="text-lg font-medium">Ofereça um benefício que realmente faz a diferença.</span><br />O SYD ajuda empresas a promoverem bem-estar emocional com um atendimento psicológico acessível, imediato e sem burocracias. Invista em um time mais saudável, produtivo e engajado. Fale com nosso time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="flex w-full sm:w-[20.25rem] px-6 py-3.5 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
            <a
              href={AUTH_LINKS.PATIENT.SIGNUP}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white text-xl font-semibold"
            >
              Quero indicar minha empresa
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
