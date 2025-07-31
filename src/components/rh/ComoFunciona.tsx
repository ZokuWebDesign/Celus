import { Button } from "@/components/ui/button";
import steps1 from "@/assets/vectors/step1.svg";
import steps2 from "@/assets/vectors/step2.svg";
import steps3 from "@/assets/vectors/step3.svg";
import { WHATSAPP_LINKS } from "@/constants/links";

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12 py-16 lg:py-28 px-4 lg:px-14">
      <header className="flex flex-col items-center gap-2 w-full lg:w-[48rem] text-center">
        <h2>Implementação simples,<br />resultados duradouros.</h2>
        <p>Oferecer suporte emocional para seus colaboradores nunca foi tão fácil. Com o SYD, sua empresa investe em bem-estar com tecnologia, ética e praticidade, sem complicar a rotina do RH.</p>
      </header>

      <div className="w-full grid gap-8 md:grid-cols-3">

        <div className="text-center">
          <div className="flex justify-center">
            <img
              src={steps1}
              alt="Ilustração de atendimento psicológico"
              className="w-10 h-[74px] object-contain"
            />
          </div>
          <h3>Os colaboradores se cadastram no Syd por meio de um convite enviado pelo RH, de forma simples, segura e personalizada.</h3>
        </div>


        <div className="text-center">
          <div className="flex justify-center">
            <img
              src={steps2}
              alt="Ilustração de atendimento psicológico"
              className="w-[58px] h-[75px] object-contain"
            />
          </div>
          <h3>Colaboradores acessam<br />quando precisarem</h3>
        </div>


        <div className="text-center">
          <div className="flex justify-center">
            <img
              src={steps3}
              alt="Ilustração de atendimento psicológico"
              className="w-[55px] h-[75px] object-contain"
            />
          </div>
          <h3>Acompanhe os minutos<br />utilizados pelo painel gerencial.</h3>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center w-full gap-4">
              <Button size="lg" className="flex w-full sm:w-[20.25rem] p-0 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
                <a
                  href={WHATSAPP_LINKS.RH.PITCH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 text-white text-xl font-semibold"
                >
                  Agende uma demonstração
                </a>
              </Button>
      </div>
    </section>
  );
};

export default ComoFunciona;
