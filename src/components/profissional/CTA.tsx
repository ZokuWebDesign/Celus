import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(https://i.imgur.com/WdhJL9g.jpeg)` }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-4xl mx-auto py-16 lg:py-28 px-4 sm:px-6 lg:px-14 text-center">
        <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
          Cadastre-se e comece a transformar vidas
        </h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          No SyD, você encontra escuta, apoio e estrutura para estar presente nos momentos em que mais importa.<br/>Aqui, você faz parte de uma rede que respeita sua trajetória e sua escolha de exercer a profissão com liberdade e sentido<br/>Atue com autonomia, segurança, suporte contínuo e retorno justo, em um ambiente que também cuida de quem cuida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="flex w-full sm:w-[20.25rem] px-6 py-3.5 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
            <a
              href={AUTH_LINKS.PROFESSIONAL.SIGNUP}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white text-xl font-semibold"
            >
              Quero me cadastrar
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
