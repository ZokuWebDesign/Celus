"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const testimonials = [
  {
    quote: "Sou residente e o app está me ajudando a ter mais autonomia na ultrassonografia.",
    name: "— Vanessa A.",
    crp: "R3 Clínica Médica",
    image: "https://images.unsplash.com/photo-1680204437044-011a94496b4a"
  },
  {
    quote: "Com o Celus, consigo revisar protocolos e emitir laudos no mesmo plantão, direto do celular.",
    name: "Dr. Rafael L.",
    crp: "Intensivista",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471"
  },
  {
    quote: "Uso o app toda vez que estou no SAMU. É rápido, confiável e evita erros.",
    name: "— Camila T.",
    crp: "Paramédica",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
  },
  {
    quote: "GAntes eu precisava revisar tabelas e artigos a cada exame. Agora, com o Celus, consigo padronizar a avaliação em minutos e manter a confiança nos resultados.",
    name: "Dra. Juliana Ferreira",
    crp: "Ultrassonografista",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f"
  },
  {
    quote: "O Celus trouxe objetividade ao meu dia a dia. Além de facilitar o cálculo do TI-RADS, ele garante que nenhum critério importante passe despercebido.",
    name: "Dr. Ricardo Menezes",
    crp: "Médico Nuclear",
    image: "https://images.unsplash.com/photo-1612349316228-5942a9b489c2"
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
    <section id="depoimentos" className="w-full max-w-7xl mx-auto flex flex-col items-start self-stretch gap-8 py-16 lg:py-28 px-4 sm:px-6 lg:px-14 bg-white">
      {/* Container */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Image */}
        <div className="w-full h-[640px] rounded-[8px] overflow-hidden order-first lg:order-last">
          <img 
            src={currentTestimonial.image} 
            alt="Testimonial visual" 
            className="w-full h-full object-cover transition-all duration-500" 
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-start gap-6 md:gap-8">
          {/* Stars */}
          <div className="flex items-start gap-1">
            <img src="/assets/icons/star.svg" className="w-5 h-5" />
            <img src="/assets/icons/star.svg" className="w-5 h-5" />
            <img src="/assets/icons/star.svg" className="w-5 h-5" />
            <img src="/assets/icons/star.svg" className="w-5 h-5" />
            <img src="/assets/icons/star.svg" className="w-5 h-5" />
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-lg md:text-2xl text-[hsl(var(--black))] font-bold font-[Lato] [font-feature-settings:'liga'_off]">
            "{currentTestimonial.quote}"
          </blockquote>

          {/* Avatar */}
          <div className="flex flex-col items-start text-[hsl(var(--black))]">
            <span className="text-lg font-medium">{currentTestimonial.name}</span>
            <span className="text-sm">{currentTestimonial.crp}</span>
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
