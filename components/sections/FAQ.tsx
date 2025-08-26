"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Celus serve só para médicos?",
    answer: "Não. O app foi pensado para todos os profissionais da saúde que usam ultrassonografia no dia a dia — incluindo paramédicos, residentes e sonographers."
  },
  {
    question: "Preciso de internet para usar?",
    answer: "O Celus funciona tanto online quanto offline. Você pode baixar conteúdos quando tiver internet e acessá-los posteriormente mesmo sem conexão, garantindo que sempre tenha as informações necessárias na hora do atendimento."
  },
  {
    question: "Posso testar antes de assinar?",
    answer: "Sim! Oferecemos uma versão gratuita com acesso a conteúdos selecionados para que você possa experimentar as funcionalidades antes de decidir pelo plano premium."
  },
  {
    question: "O app substitui a formação médica?",
    answer: "Não. O Celus é uma ferramenta de apoio que complementa sua formação e experiência clínica, fornecendo referências rápidas e protocolos validados para auxiliar na tomada de decisões."
  },
  {
    question: "Como são atualizados os conteúdos?",
    answer: "Nosso time de especialistas atualiza constantemente os protocolos, calculadoras e resumos com base nas mais recentes evidências científicas e diretrizes médicas internacionais."
  },
  {
    question: "Funciona em todos os celulares?",
    answer: "Sim! O Celus é compatível com dispositivos Android e iOS, além de funcionar perfeitamente em tablets e computadores através do navegador web."
  },
  {
    question: "Os dados ficam seguros?",
    answer: "Absolutamente. Utilizamos criptografia de ponta e seguimos todas as normas de segurança para proteção de dados médicos, garantindo total privacidade e conformidade com regulamentações de saúde."
  },
  {
    question: "Posso sugerir novos conteúdos?",
    answer: "Claro! Temos um canal direto para sugestões de nossa comunidade médica. Sua experiência prática ajuda a tornar o app ainda mais útil para todos os profissionais."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-[#edfcf6] px-4 lg:px-16 py-12 lg:py-28">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[#108b6a] font-semibold text-base mb-4">
            FAQ
          </p>
          <h2 className="text-[#108b6a] font-bold text-3xl lg:text-5xl leading-tight mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-[#101828] font-medium text-lg max-w-4xl mx-auto leading-relaxed">
            Celus oferece tudo que você precisa para cuidar da sua prática médica e prevenir erros clínicos, com recursos inovadores e personalizados para cada necessidade.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger>
                  <span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
