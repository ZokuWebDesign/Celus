"use client";
import { useState, useRef, MouseEvent } from "react";

const testimonials = [
  {
    quote: "Em duas semanas usando o upOS, minha taxa de conversão de orçamentos subiu de 40% para 70%",
    name: "Lucas V.",
    role: "Dono de assistência técnica"
  },
  {
    quote: "Reduzi em 90% os erros de comunicação com a equipe técnica graças ao histórico nas OS",
    name: "Mariana A.",
    role: "Dona de assistência técnica"
  },
  {
    quote: "Antes era um caos passar preços. Agora, o vendedor só insere o custo e o sistema calcula tudo sozinho.",
    name: "Andre S.",
    role: "Dono de assistência técnica"
  },
  {
    quote: "Antes do upOS, perdíamos prazos e esquecíamos pagamentos. Agora tudo está em um só lugar!",
    name: "Lucas R.",
    role: "Dono de assistência técnica"
  },
  {
    quote: "O painel é leve, rápido e super intuitivo. Consigo acompanhar minha equipe de qualquer lugar.",
    name: "Patrícia M.",
    role: "Gestora"
  },
  {
    quote: "Economizo pelo menos 2 horas por dia só por ter tudo centralizado. O sistema é direto, sem enrolação.",
    name: "Juliana M.",
    role: "Técnica de informática"
  },
  {
    quote: "O controle de contas a pagar e receber me salvou. Antes era tudo no caderno. Hoje recebo lembrete automático e não atraso mais nada.",
    name: "Carlos V.",
    role: "Micro empreendedor"
  }
];

const Testimonials = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <>
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <section id="depoimentos" className="w-full bg-[#f8f7f6] py-[70px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex flex-col items-center gap-10">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-[32px] font-bold text-primary leading-10">
                O que estão dizendo...
              </h2>
            </div>

            {/* Testimonials Cards */}
            <div 
              ref={containerRef}
              className="w-full overflow-x-auto pb-4 cursor-grab active:cursor-grabbing scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <div className="flex gap-6 min-w-max px-4">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-[305px] bg-background border border-[#e9eaeb] rounded-2xl p-4 select-none"
                  >
                    <div className="flex flex-col justify-between h-[180px]">
                      <p className="text-[#414651] text-base font-normal leading-[1.6] tracking-[-0.8px]">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex flex-col gap-1">
                        <p className="text-[#414651] text-base font-semibold tracking-[-0.8px] leading-[1.17]">
                          {testimonial.name}
                        </p>
                        <p className="text-[#717680] text-xs font-semibold tracking-[-0.6px] leading-[1.17]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
