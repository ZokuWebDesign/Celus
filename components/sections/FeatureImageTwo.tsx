"use client";

const FeatureImageTwo = () => {
  return (
    <section id="teste-gratis" className="bg-background">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col items-center pt-[90px] pb-[90px]">
          {/* Content Wrapper */}
          <div className="max-w-[1126px] w-full">
            {/* Header Content */}
            <div className="flex flex-col items-center text-center space-y-8 mb-12">
              {/* Icon */}
              <div className="w-[38px] h-[38px] flex items-center justify-center">
                <img 
                  src="/assets/icons/diamond.svg" 
                  alt="Diamond icon" 
                  className="w-[38px] h-[38px]"
                />
              </div>

              {/* Title and Description */}
              <div className="max-w-[840px] space-y-6">
                <h2 className="text-[32px] font-bold text-primary leading-[45px]">
                  Agenda organizada, dia produtivo
                </h2>
                <p className="text-[#414651] text-lg leading-[29px]">
                  Com a agenda do upOS, cada técnico visualiza suas ordens de serviço do dia em tempo real, com status, horários e prioridade. Mais agilidade na execução, menos retrabalho e zero confusão.
                </p>
              </div>

              {/* CTA Button */}
              <button className="w-[250px] h-11 rounded-2xl bg-primary border border-[#3685fb] hover:bg-primary/90 transition-colors duration-300">
                <span className="text-white font-bold text-base">
                  Quero testar agora!
                </span>
              </button>
            </div>

            {/* Image Preview */}
            <div className="w-full">
              <img
                src='https://i.ibb.co/hJbsHMsg/calendar.webp'
                alt="Agenda do upOS"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImageTwo;
