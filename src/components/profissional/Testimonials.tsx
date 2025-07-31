import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import star from "@/assets/icons/star.svg"

const testimonials = [
  {
    quote: "O SYD me proporcionou autonomia real. Eu defino meus horários, planos, tipo de atendimento e ainda conto com um sistema que facilita muito minha rotina. Me sinto respeitada como profissional e acolhida como pessoa.",
    name: "Ana Campos",
    crp: "CRP 06/123456",
    image: "https://i.imgur.com/9eli6nb.jpeg"
  },
  {
    quote: "Comecei atendendo nas horas vagas, mas a demanda foi tão constante que hoje atendo exclusivamente pelo SYD. O modelo por minuto é justo e os repasses são sempre pontuais.",
    name: "Ricardo Tavares",
    crp: "CRP 04/987654",
    image: "https://i.imgur.com/SfXqFUh.jpeg"
  },
  {
    quote: "O prontuário com tags inteligentes foi um divisor de águas pra mim. Consigo organizar os casos com agilidade e manter um acompanhamento muito mais eficiente e personalizado.",
    name: "Priscila Andrade",
    crp: "CRP 05/345672",
    image: "https://i.imgur.com/VG27Yrn.jpeg"
  },
  {
    quote: "A plataforma é leve, intuitiva e realmente feita por quem conhece a prática clínica. Me sinto seguro, amparado e conectado com outros profissionais incríveis através da comunidade SYD.",
    name: "Felipe Costa",
    crp: "CRP 01/678901",
    image: "https://i.imgur.com/enYh7fd.jpeg"
  },
  {
    quote: "Eu valorizo muito o cuidado com o sigilo e a ética. O SYD entrega isso com excelência, além de me permitir ajudar pacientes em momentos críticos, com a estrutura certa para isso.",
    name: "Larissa Moura",
    crp: "CRP 08/112233",
    image: "https://i.imgur.com/hKg3f69.jpeg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col items-start self-stretch gap-8 py-16 lg:py-28 px-4 sm:px-6 lg:px-14 bg-white">
      {/* Container */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Image */}
        <div className="w-full order-first">
          <img 
            src={currentTestimonial.image} 
            alt="Testimonial visual" 
            className="w-full h-auto object-cover rounded-lg transition-all duration-500" 
          />
        </div>


        {/* Content */}
        <div className="flex flex-col items-start gap-6 md:gap-8">
          {/* Stars */}
          <div className="flex items-start gap-1">
            <img src={star} alt="estrela" className="w-5 h-5" />
            <img src={star} alt="estrela" className="w-5 h-5" />
            <img src={star} alt="estrela" className="w-5 h-5" />
            <img src={star} alt="estrela" className="w-5 h-5" />
            <img src={star} alt="estrela" className="w-5 h-5" />
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-lg md:text-2xl text-[hsl(var(--black))] font-bold font-[Lato] [font-feature-settings:'liga'_off]">
            "{currentTestimonial.quote}"
          </blockquote>

          {/* Avatar */}
          <div className="flex flex-col items-start text-[hsl(var(--black))]">
            <span className="text-lg font-medium">{currentTestimonial.name}</span>
            {<span className="text-sm">{currentTestimonial.crp}</span>}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full flex justify-between items-center">
        {/* Slider Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-secondary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        {/* Slider Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
