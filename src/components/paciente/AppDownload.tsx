import appStore from "@/assets/vectors/app-store.svg";
import appStoreh from "@/assets/vectors/app-store-hover.svg";
import googlePlay from "@/assets/vectors/google-play.svg";
import googlePlayh from "@/assets/vectors/google-play-hover.svg";
import { STORE_LINKS } from "@/constants/links";

const AppDownload = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-28 bg-white">
      {/* Responsive Grid Container */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div className="flex flex-col items-start gap-6 lg:gap-12 w-full">
          {/* Section Title */}
          <div className="flex flex-col items-start gap-4 w-full">
            {/* Heading + Text */}
            <div className="flex flex-col items-start gap-2 w-full">
              <h2>Leve o SYD com você</h2>
              <p>Baixe o app do SYD e tenha acesso a atendimentos psicológicos imediatos, agendamentos, histórico de consultas e suporte sempre à mão. Tudo com segurança, praticidade e acolhimento no seu bolso.</p>
            </div>
          </div>
          {/* Actions */}
          <div className="flex items-start gap-4">
            <a href={STORE_LINKS.GOOGLE_PLAY} target="_blank" rel="noopener noreferrer" aria-label="Download on Google Play" className="group">
              <img 
                src={googlePlay} 
                alt="Baixe na PlayStore" 
                className="h-12 group-hover:hidden"
              />
              <img 
                src={googlePlayh} 
                alt="Baixe na PlayStore" 
                className="h-12 hidden group-hover:block" 
              />
            </a>
            <a href={STORE_LINKS.APP_STORE} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store" className="group">
              <img 
                src={appStore} 
                alt="Baixe na AppStore" 
                className="h-12 group-hover:hidden" 
              />
              <img 
                src={appStoreh} 
                alt="Baixe na AppStore" 
                className="h-12 hidden group-hover:block" 
              />
            </a>
          </div>
        </div>

        {/* Placeholder image */}
        <div className="w-full">
          <img src="https://i.imgur.com/IsqWKo2.jpeg" alt="App preview" className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>

  );
};

export default AppDownload;
