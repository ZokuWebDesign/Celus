"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "1. Como funciona o teste gratuito do upOS?",
    answer: "Você pode testar o sistema gratuitamente por 7 dias, com acesso completo a todas as funcionalidades do plano Profissional. Não precisa de cartão de crédito para começar."
  },
  {
    question: "2. Preciso instalar algo para usar o sistema?",
    answer: "Não! O upOS é 100% online e funciona direto no seu navegador. Você pode acessar de qualquer lugar, a qualquer hora, sem instalar nada."
  },
  {
    question: "3. É fácil de usar mesmo? Minha equipe vai conseguir sem treinamento?",
    answer: "Sim! O upOS foi desenvolvido para ser intuitivo. A interface é simples e organizada, permitindo que sua equipe comece a usar imediatamente. Oferecemos também materiais de apoio e suporte."
  },
  {
    question: "4. Posso personalizar os serviços e valores conforme minha loja?",
    answer: "Claro! Você pode cadastrar todos os seus serviços, definir preços personalizados e criar regras de precificação que se adequem ao seu negócio e margem de lucro desejada."
  },
  {
    question: "5. Já vem com modelos de celulares e serviços cadastrados?",
    answer: "Sim! O sistema já vem com um banco de dados completo dos principais modelos de smartphones e os serviços mais comuns. Você pode usar como está ou personalizar conforme sua necessidade."
  },
  {
    question: "6. Como funciona o envio de orçamentos por WhatsApp?",
    answer: "O sistema gera automaticamente um orçamento profissional em PDF e envia diretamente para o WhatsApp do cliente com apenas um clique. Isso agiliza o atendimento e melhora a conversão."
  },
  {
    question: "7. O sistema tem PDV integrado para vender produtos também?",
    answer: "Sim! Além de gerenciar serviços, o upOS possui PDV completo para venda de produtos, controle de estoque, emissão de nota fiscal e relatórios de vendas integrados."
  },
  {
    question: "8. Posso configurar regras de precificação com base no meu lucro desejado?",
    answer: "Perfeitamente! Você define suas margens de lucro por tipo de serviço ou produto, e o sistema calcula automaticamente os preços ideais para garantir sua rentabilidade."
  },
  {
    question: "9. Dá pra acompanhar o desempenho da minha equipe e conversões?",
    answer: "Sim! O sistema oferece relatórios completos de performance, conversão de orçamentos, produtividade da equipe e análises detalhadas para você tomar decisões estratégicas."
  },
  {
    question: "10. O que acontece após o fim do teste gratuito?",
    answer: "Você pode escolher um dos nossos planos para continuar usando. Seus dados ficam salvos e você mantém acesso a tudo que configurou durante o teste. Sem pegadinhas!"
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-[#fffcf7] px-4 sm:px-8 lg:px-14 pt-[70px] pb-16 sm:pb-[90px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Title centered at top */}
        <div className="text-center pb-6">
          <h2 className="text-[32px] font-bold text-primary">
            Dúvidas Frequentes
          </h2>
        </div>

        {/* Content with image on left and accordion on right */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
          {/* Left side - Image (sticky) */}
          <div className="w-full lg:w-[392px] flex-shrink-0">
            <div className="lg:sticky lg:top-8">
              <img
                className="w-full h-auto rounded-lg"
                src="https://i.ibb.co/3yJ50hGP/features.webp"
                alt="FAQ Illustration"
              />
            </div>
          </div>

          {/* Right side - Accordion */}
          <div className="flex-1 w-full lg:max-w-[752px]">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="px-6 py-0"
                >
                  <AccordionTrigger className="py-5 text-[#545353] hover:no-underline">
                    <span className="text-left text-xl font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5B5B5B]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
