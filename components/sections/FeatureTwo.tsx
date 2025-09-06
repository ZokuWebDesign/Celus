"use client";

const FeatureTwo = () => {
  const specialties = [
    { 
      name: "Cervical",
      src: "/assets/illustrations/cervical.svg" 
    },
    { 
      name: "Emergência POCUS", 
      src: "/assets/illustrations/pocus.svg" 
    }, 
    { 
      name: "Física", 
      src: "/assets/illustrations/fisica.svg" 
    },
    { 
      name: "Msk", 
      src: "/assets/illustrations/msk.svg" 
    },
    { 
      name: "Ginecologia", 
      src: "/assets/illustrations/ginecologia.svg" 
    },
    { 
      name: "Pequenas partes", 
      src: "https://i.ibb.co/PZ1700KZ/pequenas-partes.webp" 
    },
    { 
      name: "Pediatria", 
      src: "https://i.ibb.co/0RXcFQgN/pediatria.webp" 
    },
    { 
      name: "Vascular", 
      src: "https://i.ibb.co/WvLpF4bX/vascular.webp" 
    },
    { 
      name: "Medicina fetal", 
      src: "https://i.ibb.co/zTvQdx0g/fetal.webp" 
    },
    { 
      name: "Medicina interna", 
      src: "https://i.ibb.co/ZR1DBqth/interna.webp" 
    },
    { 
      name: "Urogenital", 
      src: "https://i.ibb.co/8g0RP6zr/urogenital.webp" 
    },
    { 
      name: "Mama", 
      src: "/assets/illustrations/mama.svg" 
    }
  ];

  return (
    <section className="bg-[#edfcf6] border border-[#35b48b]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-0 py-16">
        {/* Header Content */}
        <div className="text-center mb-12 max-w-[768px] mx-auto">
          {/* Subheading */}
          <p className="text-primary text-base font-semibold mb-6">
            Conteúdo Curado por Especialistas
          </p>
          
          {/* Main Heading */}
          <h2 className="text-primary text-3xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight">
            Criado por profissionais, para profissionais
          </h2>
          
          {/* Description */}
          <p className="text-tertiary text-lg font-medium leading-relaxed">
            O Celus foi desenvolvido por uma equipe de especialistas em USOM, com foco em quem está na linha de frente. Nossa missão é democratizar o acesso ao raciocínio clínico e ferramentas confiáveis, seja você médico, paramédico ou residente.
          </p>
        </div>

        {/* Medical Specialties Tags */}
        <div className="flex flex-wrap justify-center max-w-[1280px] mx-auto">
          {specialties.map((specialty, index) => (
            <div key={index} className="flex flex-col items-center px-6 py-[4px] gap-[4px] max-w-[100px]">
              {/* Icon */}
              <div className="w-14 h-14 rounded-[6px] overflow-hidden">
                <img 
                  src={specialty.src} 
                  alt={`Ícone ${specialty.name}`} 
                  className="w-full h-full"
                />
              </div>
              
              {/* Label */}
              <span className="text-tertiary text-xs font-medium text-center leading-tight">
                {specialty.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTwo;
