import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINKS } from "@/constants/links";

const faqs = [
  {
    question: "A contratação da plataforma tem custo fixo mensal?",
    answer: "O SYD oferece diferentes modelos, incluindo planos sob demanda e contratos personalizados por número de colaboradores. Nosso time comercial vai indicar o formato ideal para o seu porte e necessidade."
  },
  {
    question: "Como é garantido o sigilo dos atendimentos?",
    answer: "Todos os atendimentos seguem as normas éticas do CFP e são realizados por psicólogos com CRP ativo. A empresa não tem acesso ao conteúdo das consultas, apenas a indicadores agregados e anônimos."
  },
  {
    question: "A plataforma exige algum tipo de integração com sistemas internos da empresa?",
    answer: "Não. O SYD funciona de forma independente e pronta para uso. O RH envia convites para os colaboradores se cadastrarem na plataforma."
  },
  {
    question: "Quais métricas a empresa pode acompanhar?",
    answer: "O RH tem acesso a dados de uso da plataforma (como número de atendimentos, horários mais frequentes, tags utilizadas nos prontuários autorizados), relatórios em PDF e indicadores de engajamento. Sempre respeitando a confidencialidade individual."
  },
  {
    question: "Quanto tempo leva para começar a usar a plataforma?",
    answer: "A ativação pode ocorrer em até 24h após o envio dos dados dos colaboradores. Tudo é pensado para ser ágil, sem fricção e com o apoio do nosso time de onboarding."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-white">
      <div className="max-w-7xl mx-auto py-16 lg:py-28 px-4 sm:px-6 lg:px-14">
        <div className="max-w-3xl text-center pb-12">
          <h2 className="pb-2 text-left">
            Perguntas Frequentes
          </h2>
          <p className="text-left">
            Selecionamos as dúvidas mais comuns de gestores e líderes de RH que estão considerando levar o SYD para seus times. Se não encontrar sua resposta aqui, é só falar com a gente.
          </p>
        </div>

        <Accordion type="single" collapsible className="flex flex-col items-start self-stretch border-b border-[hsl(var(--primary))]">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="flex flex-col w-full"
            >
              <AccordionTrigger className="flex items-center gap-6 py-5 w-full border-t border-[hsl(var(--primary))] hover:no-underline font-[var(--body)]">
                <h4 className="font-semibold text-[hsl(var(--black))] text-left">{faq.question}</h4>
              </AccordionTrigger>
              <AccordionContent className="flex items-start gap-4 pb-6 w-full">
                <p className="">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="max-w-xl text-center pt-12">
          <h3 className="text-[hsl(var(--black))] pb-2 text-left">
            Ainda tem dúvidas?
          </h3>
          <p className="pb-6 text-left">
            Entre contato conosco! Estamos aqui para te ajudar com o que for preciso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex w-full lg:w-[14rem] p-0 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 text-white text-xl font-[var(--body)] h-auto">
                <a
                  href={WHATSAPP_LINKS.RH.FAQ}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 text-white text-xl font-semibold"
                >
                  Entrar em contato
                </a>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
