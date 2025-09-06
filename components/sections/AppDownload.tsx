import { Download } from "lucide-react";
import { STORE_LINKS } from "@/constants/links";

const AppDownload = () => {
  return (
    <section id="app-download" className="max-w-7xl mx-auto bg-white px-4 py-12 lg:pl-14 lg:pr-6 lg:pt-[74px] lg:pb-28">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        {/* Content Section */}
        <div className="max-w-[674px]">
          {/* Title */}
          <div className="mb-12">
            <h2 className="text-primary font-bold text-3xl lg:text-5xl leading-tight mb-6">
              Decida com mais segurança, em menos tempo, direto do celular
            </h2>
            <p className="text-tertiary font-medium text-lg leading-relaxed mb-4">
              Baixe o Celus e leve protocolos, laudos e calculadoras médicas com você, direto no seu bolso.
            </p>
            <p className="text-tertiary font-medium text-lg leading-relaxed">
              Tenha tudo o que você precisa no ponto de atendimento. Sem papel. Sem perder tempo. Sem depender de internet o tempo todo.
            </p>
          </div>
          {/* Download Buttons */}
          <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4">
            {/* App Store Button */}
            <a
              href={STORE_LINKS.APP_STORE}
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/vectors/app-store.svg" alt="App Store" className="h-auto group-hover:hidden" />
              <img src="/assets/vectors/app-store-hover.svg" alt="App Store" className="h-auto hidden group-hover:block" />
            </a>
            {/* Google Play Button */}
            <a
              href={STORE_LINKS.GOOGLE_PLAY}
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/vectors/google-play.svg" alt="Google Play" className="h-auto group-hover:hidden" />
              <img src="/assets/vectors/google-play-hover.svg" alt="Google Play" className="h-auto hidden group-hover:block" />
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full max-w-[510px] max-h-[716px] pt-8 lg:pt-0 relative">
            <img
              src="https://i.ibb.co/8ny97W07/app-download.webp"
              alt="Celus App on Mobile"
              className="w-full h-full object-cover"
            />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
