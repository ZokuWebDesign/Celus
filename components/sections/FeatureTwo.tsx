"use client";

const FeatureTwo = () => {
  const specialties = [
    "Cervical",
    "Emergência POCUS", 
    "Física",
    "Msk",
    "Ginecologia",
    "Pequenas partes",
    "Pediatria", 
    "Vascular",
    "Medicina fetal",
    "Medicina interna",
    "Urogenital",
    "Mama"
  ];

  return (
    <section className="bg-[#edfcf6] border border-[#35b48b]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Content */}
        <div className="text-center mb-12">
          {/* Subheading */}
          <p className="text-[#108b6a] text-base font-semibold mb-6">
            Conteúdo Curado por Especialistas
          </p>
          
          {/* Main Heading */}
          <h2 className="text-[#108b6a] text-5xl font-bold mb-8 max-w-[768px] mx-auto leading-tight">
            Criado por profissionais, para profissionais
          </h2>
          
          {/* Description */}
          <p className="text-[#101828] text-lg font-medium max-w-[768px] mx-auto leading-relaxed">
            O Celus foi desenvolvido por uma equipe de especialistas em USOM, com foco em quem está na linha de frente. Nossa missão é democratizar o acesso ao raciocínio clínico e ferramentas confiáveis, seja você médico, paramédico ou residente.
          </p>
        </div>

        {/* Medical Specialties Tags */}
        <div className="flex flex-wrap justify-center gap-4 max-w-[1280px] mx-auto">
          {specialties.map((specialty, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div className="w-14 h-14 bg-[#3aad90] rounded-lg mb-2 flex items-center justify-center">
                <div className="w-8 h-8 bg-white/20 rounded"></div>
              </div>
              
              {/* Label */}
              <span className="text-[#101828] text-xs font-medium text-center max-w-[100px] leading-tight">
                {specialty}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTwo;
