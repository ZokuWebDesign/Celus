import { Button } from "@/components/ui/button";
import { AUTH_LINKS } from "@/constants/links";

const FeatureImage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-28 bg-white">
      {/* Responsive Grid Container */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image: order-1 on mobile, order-2 on large screens */}
        <div className="w-full order-1 lg:order-2">
          <img src="https://i.imgur.com/o7vA0tY.jpeg" alt="App preview" className="w-full h-auto object-contain" />
        </div>
        {/* Content: order-2 on mobile, order-1 on large screens */}
        <div className="flex flex-col items-start gap-6 lg:gap-12 w-full order-2 lg:order-1">
          {/* Section Title */}
          <div className="flex flex-col items-start gap-4 w-full">
            {/* Heading + Text */}
            <div className="flex flex-col items-start gap-2 w-full">
              <h2>Menos crises,<br />mais produtividade</h2>
              <p>Com o SYD, sua empresa evita afastamentos, queda de performance e rotatividade por problemas emocionais.<br />Ao oferecer suporte psicológico acessível e imediato, você cria um ambiente mais saudável, engajado e sustentável. Cuidar da saúde mental dos colaboradores não é só um diferencial, é uma estratégia inteligente de gestão de pessoas. Além disso, o Syd contribui para que sua empresa esteja em conformidade com a NR-1, que exige medidas efetivas de prevenção e promoção da saúde no ambiente de trabalho, incluindo a saúde mental.</p>
            </div>
          </div>
          {/* Actions */}
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <Button size="lg" className="flex w-full sm:w-[20.25rem] p-0 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
              <a
                href={AUTH_LINKS.RH.LOGIN}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3.5 text-white text-xl font-semibold"
              >
                Quero diminuir o turnover
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImage;
