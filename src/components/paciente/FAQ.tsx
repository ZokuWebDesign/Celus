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
    question: "Como funciona o atendimento por minuto?",
    answer: "No Syd, você paga apenas pelos minutos que escolher. Você pode contratar atendimentos de 20, 40 ou 60 minutos, seja para um acolhimento imediato (urgência emocional) ou uma consulta previamente agendada com um psicólogo credenciado. Caso queira estender a conversa, é possível adicionar mais minutos com facilidade, sendo cobrado proporcionalmente pelo tempo extra escolhido.” (em amarelo, considerar retirar caso fique uma resposta muito longa)."
  },
  {
    question: "Preciso agendar com antecedência?",
    answer: "Não. O SYD oferece atendimento de urgência 24h com profissionais disponíveis em tempo real. Mas, se preferir, você também pode agendar com antecedência."
  },
  {
    question: "É seguro e sigiloso?",
    answer: "Sim. Todos os atendimentos seguem o Código de Ética Profissional da Psicologia. Seus dados e conversas são protegidos com total sigilo."
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim! Você pode usar a plataforma diretamente do seu celular, tablet ou computador. Basta ter conexão com a internet."
  },
  {
    question: "Preciso pagar alguma mensalidade?",
    answer: "Não. Você pode usar o SYD de forma avulsa, sem nenhum tipo de fidelidade ou taxa mensal. Só paga quando usar; se preferir, pode adicionar saldo com antecedência, o que ajuda a ganhar agilidade em momentos de urgência, sem precisar inserir dados de pagamento na hora. É uma forma prática de estar preparado quando mais precisar."
  },
  {
    question: "O que acontece se eu cancelar uma consulta agendada?",
    answer: "Você pode cancelar sua consulta diretamente pela plataforma, sem burocracia. Se o cancelamento for feito com até 12 horas de antecedência, o valor não é cobrado. Cancelamentos após esse prazo podem gerar cobrança parcial ou total, dependendo do tempo reservado pelo profissional. Sempre informamos as condições antes da confirmação do agendamento."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-14">
        <div className="max-w-3xl text-center pb-12">
          <h2 className="pb-2 text-left">
            Perguntas Frequentes
          </h2>
          <p className="text-left">
            Separamos as dúvidas mais comuns de quem está começando no SYD. Caso ainda tenha alguma pergunta, nosso time está pronto para te ajudar.
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
                href={WHATSAPP_LINKS.PATIENT.FAQ}
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
