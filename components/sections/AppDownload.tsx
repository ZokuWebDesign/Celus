import { Download } from "lucide-react";
import { STORE_LINKS } from "@/constants/links";

const AppDownload = () => {
  return (
    <section id="app-download" className="bg-white px-4 lg:px-16 py-12 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Section */}
          <div className="max-w-[674px]">
            {/* Title */}
            <div className="mb-12">
              <h2 className="text-[#108b6a] font-bold text-3xl lg:text-5xl leading-tight mb-6">
                Decida com mais segurança, em menos tempo, direto do celular
              </h2>
              <p className="text-[#101828] font-medium text-lg leading-relaxed mb-4">
                Baixe o Celus e leve protocolos, laudos e calculadoras médicas com você, direto no seu bolso.
              </p>
              <p className="text-[#101828] font-medium text-lg leading-relaxed">
                Tenha tudo o que você precisa no ponto de atendimento. Sem papel. Sem perder tempo. Sem depender de internet o tempo todo.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
          <div className="max-w-[510px] h-[640px] lg:h-full relative">
            <div className="relative h-full">
              <img
                src="https://i.ibb.co/kLvr5mv/imagetwo.webp"
                alt="Celus App on Mobile"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Optional overlay with app preview mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#108b6a] rounded-2xl flex items-center justify-center">
                    <Download size={32} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Celus App</h3>
                  <p className="text-white/90 text-sm">Disponível em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
