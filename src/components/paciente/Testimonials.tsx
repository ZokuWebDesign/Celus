import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import star from "@/assets/icons/star.svg"

const testimonials = [
  {
    quote: "A funcionalidade de urgência é sensacional! Em situações que eu não podia esperar dias por uma consulta, o SYD me deu suporte na hora. Recomendo para todos que precisam de apoio imediato.",
    name: "Thaís Moura",
    /*crp: "",*/
    image: "https://i.imgur.com/RiCNUWV.jpeg"
  },
  {
    quote: "Depois que conheci o SYD, nunca mais deixei minha saúde emocional de lado. Os psicólogos são excelentes e o atendimento é muito humano. A plataforma é simples, segura e funciona muito bem.",
    name: "Bruna Almeida",
    /*crp: "",*/
    image: "https://i.imgur.com/4507tyO.jpeg"
  },
  {
    quote: "A empresa onde trabalho contratou o SYD e foi um divisor de águas. Me senti acolhido em momentos difíceis e passei a ver o cuidado com a saúde mental com outros olhos. Atendimento rápido, sigiloso e de qualidade.",
    name: "Camila Ferreira",
    /*crp: "",*/
    image: "https://i.imgur.com/mCLpyQD.jpeg"
  },
  {
    quote: "Gosto muito da liberdade de pagar por minuto. Sem compromisso, sem pressão, só entro quando realmente preciso. Já usei duas vezes e fui super bem atendida. Recomendo muito!",
    name: "Rafaela Souza",
    /*crp: "",*/
    image: "https://i.imgur.com/R3VWDDC.jpeg"
  },
  {
    quote: "Eu estava em crise de ansiedade numa madrugada e achei o SYD no Google. Em menos de 5 minutos estava conversando com uma psicóloga incrível. Nunca pensei que atendimento psicológico urgente fosse possível assim. Mudou minha vida!",
    name: "Mariana Lopes",
    /*crp: "",*/
    image: "https://i.imgur.com/kbwztml.jpeg"
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
            {/* <span className="text-sm">{currentTestimonial.crp}</span>*/}
          </div>
        </div>

        {/* Image */}
        <div className="w-full order-first lg:order-last">
          <img 
            src={currentTestimonial.image} 
            alt="Testimonial visual" 
            className="w-full h-auto object-cover rounded-lg transition-all duration-500" 
          />
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
